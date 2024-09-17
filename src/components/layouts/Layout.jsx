import { useState, useEffect } from 'react';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { getBackgroundStyle } from '@/constants/layouts/backgroundStyles';
import { useCamera } from '@/context/AuthProvider';
import { adminAxiosInstance } from '@/api/axios';
import styled from 'styled-components';

export default function Layout() {
  const [oauthPath, setOauthPath] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('accessToken'));
  const { isCamera } = useCamera();
  const location = useLocation();

  // 경로
  const adminPaths = ['/admin', '/admin/'];
  const adminViewPaths = ['/admin/event', '/admin/losts'];
  const isAdminPath = adminPaths.includes(location.pathname);
  const isAdminViewPath = adminViewPaths.includes(location.pathname);
  const eventPaths = ['/event', '/event/enter', '/event/submit'];
  const isEventPath = eventPaths.includes(location.pathname);
  const showheader = isLoggedIn || !isAdminPath || isAdminViewPath;

  const handleOauthPath = () => {
    const oauthRegex = /^\/oauth/;
    if (oauthRegex.test(location.pathname)) {
      // /oauth로 시작하는 경로에 대한 처리
      setOauthPath(true);
    }
  };

  useEffect(() => {
    handleOauthPath();
  }, [location]);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const response = await adminAxiosInstance.get('/test/admin', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setIsLoggedIn(response.status === 200);
        } catch {
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };
    checkToken();
    const handleStorageChange = (event) => {
      if (event.key === 'accessToken') {
        checkToken();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {!isAdminPath && !isAdminViewPath && !isCamera && !isEventPath && !oauthPath && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding-top: ${({ $showheader }) => ($showheader ? '5.6rem' : '0')};
  clip-path: inset(0 0 0 0);

  ${(props) => getBackgroundStyle(props.$path)};
`;
