import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin';
  const eventPaths = ['/event', '/event/enter', '/event/submit'];
  const isEventPath = eventPaths.includes(location.pathname);

  const [oauthPath, setOauthPath] = useState(false);

  const handleOauthPath = () => {
    const oauthRegex = /^\/oauth/;
    if (oauthRegex.test(location.pathname)) {
      // /oauth로 시작하는 경로에 대한 처리
      setOauthPath(true);
    }
  };

  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };
  const showheader = isLoggedIn() || !isAdminPath;

  useEffect(() => {
    handleOauthPath();
  }, [location]);

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {!isAdminPath && !isEventPath && !oauthPath && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: ${({ $showheader }) => ($showheader ? '5.6rem auto 0' : '0 auto 0')};

  ${(props) =>
    (props.$path === '/likelion' || props.$path === '/gaehwa') &&
    css`
      background-color: ${(props) => props.theme.colors.makersBackgroundColor};
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.$path === '/flame' &&
    css`
      background-color: transparent;
    `}
  
  ${(props) =>
    props.$path === '/facilities' &&
    css`
      background-image: url(${facilitiesBG});
      background-size: cover;
    `}
`;
