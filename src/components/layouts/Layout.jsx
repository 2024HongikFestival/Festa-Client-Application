import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Layout() {
  const location = useLocation();

  const paths = [
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
    '/admin',
    '/flame',
  ];

  return (
    <Container path={location.pathname}>
      {paths.includes(location.pathname) && <Header />}
      <Outlet />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 5.6rem auto 0;
`;
