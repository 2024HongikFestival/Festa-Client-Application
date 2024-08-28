import styled, { css } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Layout() {
  const location = useLocation();
  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };
  const visiblePaths = [
    '/',
    '/booth',
    '/fleamarket',
    '/fleamarket/:marketId',
    '/promotion',
    '/event/:eventId',
    '/event/enter',
    '/event/submit',
    '/oauth/events',
    '/map',
    '/flame/map',
    '/flame/timetable',
    '/flame/reservation',
    '/facilities',
    '/likelion',
    '/gaehwa',
    '/lost-and-found',
    '/lost-and-found/:lostId',
    '/lost-and-found/add',
    '/oauth/losts',
    '/lineup',
    '/stage-info',
    '/hongik-zone',
    '/flame/lineup',
    '/flame/md',
    '/flame/promotion',
    '/flame',
  ];
  const showheader = isLoggedIn() || visiblePaths.includes(location.pathname);

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {visiblePaths.includes(location.pathname) && <Footer />}
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
`;
