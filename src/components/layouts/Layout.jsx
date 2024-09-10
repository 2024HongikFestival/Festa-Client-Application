import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';

import fleamarketBg1 from '@/assets/webps/booth/background/fleamarketCommonBackground.webp';
import fleamarketBg2 from '@/assets/webps/booth/background/fleamarketSangsuBackground.webp';

import mdBg from '@/assets/webps/booth/background/mdBackground.webp';

export default function Layout() {
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin' || '/admin/event' || '/admin/losts';
  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };
  const showheader = isLoggedIn() || !isAdminPath;

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {!isAdminPath && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;

  /* min-height: calc(var(--vh, 1vh) * 100); */
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

    ${(props) =>
    props.$path === '/md' &&
    css`
      background-image: url(${mdBg});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/fleamarket' &&
    css`
      background-image: url(${facilitiesBG});
      background-size: cover;
    `}

    ${(props) =>
    props.$path.startsWith('/fleamarket/') &&
    props.$path !== '/fleamarket/sangsu' &&
    css`
      background-image: url(${fleamarketBg1});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/fleamarket/sangsu' &&
    css`
      background-image: url(${fleamarketBg2});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`;
