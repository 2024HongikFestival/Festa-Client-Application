import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const location = useLocation();

  return (
    <Container path={location.pathname}>
      <Header />
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
