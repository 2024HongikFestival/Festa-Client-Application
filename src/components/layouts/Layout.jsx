import AddLostItemBg from '@/assets/webps/lost/AddLostItemBg.webp';
import LostAndFoundBg from '@/assets/webps/lost/LostAndFoundBg.webp';

import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useCamera } from '../lost-and-found/AddLostItem/context/AuthProvider';

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
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto 0;
  padding-top: ${({ $showheader }) => ($showheader ? '5.6rem' : '0')};
  clip-path: inset(0 0 0 0);
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
`;
