import AddLostItemBg from '@/assets/webps/lost/AddLostItemBg.webp';
import LostAndFoundBg from '@/assets/webps/lost/LostAndFoundBg.webp';

import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useCamera } from '../lost-and-found/AddLostItem/context/AuthProvider';

// import fleamarketBg1 from '@/assets/webps/booth/background/fleamarketMainBackground.webp';
// import fleamarketBg2 from '@/assets/webps/booth/background/fleamarketCommonBackground.webp';
// import fleamarketBg3 from '@/assets/webps/booth/background/fleamarketSangsuBackground.webp';
import fleamarketBg2 from '@/assets/svgs/booth/background/fleamarketCommonBackground.svg';
import fleamarketBg3 from '@/assets/svgs/booth/background/fleamarketSangsuBackground.svg';

import mdBg from '@/assets/svgs/booth/background/mdBackground.svg';
import boothBg from '@/assets/svgs/booth/background/boothBackground.svg';

export default function Layout() {
  const { isCamera } = useCamera();
  const location = useLocation();

  const adminPaths = ['/admin', '/admin/event', '/admin/losts'];
  const isAdminPath = adminPaths.includes(location.pathname);

  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };

  const showheader = isLoggedIn() || !isAdminPath;

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {!isAdminPath && !isCamera && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;

  /* min-height: calc(var(--vh, 1vh) * 100); */
  margin: ${({ $showheader }) => ($showheader ? '5.6rem auto 0' : '0 auto 0')};

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
    props.$path === '/booth' &&
    css`
      background-image: url(${boothBg});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
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
      background-image: url(${fleamarketBg2});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.$path === '/fleamarket/sangsu' &&
    css`
      background-image: url(${fleamarketBg3});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`;
