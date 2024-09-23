import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { useCamera } from '@/context/AuthProvider';
import { getBackgroundStyle } from '@/utils/layouts/backgroundStyles';
import { adminAxiosInstance } from '@/api/axios';
import styled from 'styled-components';

export default function Layout() {
  const [oauthPath, setOauthPath] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('accessToken'));
  const { isCamera } = useCamera();
  const location = useLocation();

  // 경로 memoization
  const isAdminPath = useMemo(() => ['/admin', '/admin/'].includes(location.pathname), [location.pathname]);
  const isAdminViewPath = useMemo(
    () => ['/admin/event', '/admin/losts'].includes(location.pathname),
    [location.pathname]
  );
  const isEventPath = useMemo(
    () => ['/event', '/event/enter', '/event/submit'].includes(location.pathname),
    [location.pathname]
  );
  const showheader = useMemo(
    () => isLoggedIn || !isAdminPath || isAdminViewPath,
    [isLoggedIn, isAdminPath, isAdminViewPath]
  );

  useEffect(() => {
    const oauthEventRegex = /^\/oauth\/event/;
    setOauthPath(oauthEventRegex.test(location.pathname));
  }, [location.pathname]);

  // 토큰 검증 함수
  const checkToken = useCallback(async () => {
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
  }, []);

  // 어드민 경로에서만 토큰 검증 및 스토리지 이벤트 리스너 등록
  useEffect(() => {
    if (isAdminPath || isAdminViewPath) {
      checkToken();
    }

    const handleStorageChange = (event) => {
      if (event.key === 'accessToken') {
        checkToken();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isAdminPath, isAdminViewPath, checkToken]);

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <MemoizedHeader />}
      <Outlet />
      {!isAdminPath && !isAdminViewPath && !isCamera && !isEventPath && !oauthPath && <MemoizedFooter />}
    </Container>
  );
}

// Header와 Footer 메모이제이션
const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  padding-top: ${({ $showheader }) => ($showheader ? '5.6rem' : '0')};
  clip-path: inset(0 0 0 0);

  ${(props) => getBackgroundStyle(props.$path)};
`;
