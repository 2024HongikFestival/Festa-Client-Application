import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

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

const Continer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 5.6rem auto 0;
`;
