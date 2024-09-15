import AddLostItemBg from '@/assets/webps/lost/AddLostItemBg.webp';
import LostAndFoundBg from '@/assets/webps/lost/LostAndFoundBg.webp';
import { useState, useEffect } from 'react';
import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useCamera } from '@/context/AuthProvider';
import { adminAxiosInstance } from '@/api/axios';

// import fleamarketBg1 from '@/assets/webps/booth/background/fleamarketMainBackground.webp';
// import fleamarketBg2 from '@/assets/webps/booth/background/fleamarketCommonBackground.webp';
// import fleamarketBg3 from '@/assets/webps/booth/background/fleamarketSangsuBackground.webp';

import fleamarketBg1 from '@/assets/svgs/booth/background/fleamarketMainBackground.svg';
import fleamarketBg2 from '@/assets/svgs/booth/background/fleamarketCommonBackground.svg';
import fleamarketBg3 from '@/assets/svgs/booth/background/fleamarketSangsuBackground.svg';

import mdBg from '@/assets/svgs/booth/background/mdBackground.svg';
import boothBg from '@/assets/svgs/booth/background/boothBackground.svg';

export default function Layout() {
  const { isCamera } = useCamera();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('accessToken'));

  const adminPaths = ['/admin', '/admin/'];
  const adminViewPaths = ['/admin/event', '/admin/losts'];
  const isAdminPath = adminPaths.includes(location.pathname);

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

  const isAdminViewPath = adminViewPaths.includes(location.pathname);

  const showheader = isLoggedIn || !isAdminPath || isAdminViewPath;

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
  margin: 0 auto 0;
  padding-top: ${({ $showheader }) => ($showheader ? '5.6rem' : '0')};
  clip-path: inset(0 0 0 0);

  ${(props) =>
    (props.$path === '/event' ||
      props.$path === '/event/' ||
      props.$path === '/event/enter' ||
      props.$path === '/event/submit') &&
    css`
      padding-top: 0;
    `}

  ${(props) =>
    (props.$path === '/lost-and-found' || props.$path === '/lost-and-found/') &&
    css`
      background-image: url(${LostAndFoundBg});
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.$path === '/lost-and-found/add' &&
    css`
      background-image: url(${AddLostItemBg});
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    (props.$path === '/likelion' || props.$path === '/gaehwa') &&
    css`
      background-color: ${(props) => props.theme.colors.makersBackgroundColor};
    `}

  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
    `}
  
  ${(props) =>
    props.$path === '/facilities' &&
    css`
      background-image: url(${facilitiesBG});
      background-size: cover;
    `}

    ${(props) =>
    props.$path === '/booth' &&
    css`
      background-image: url(${boothBg});
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/md' &&
    css`
      background-image: url(${mdBg});
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/fleamarket' &&
    css`
      background-image: url(${fleamarketBg1});
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path.startsWith('/fleamarket/') &&
    props.$path !== '/fleamarket/sangsu' &&
    props.$path !== '/fleamarket' &&
    css`
      background-image: url(${fleamarketBg2});
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/fleamarket/sangsu' &&
    css`
      background-image: url(${fleamarketBg3});
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
    `}
`;
