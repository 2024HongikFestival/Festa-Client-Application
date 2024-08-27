import styled, { css } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Layout() {
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin';
  const isEventPath =
    location.pathname === '/event' || location.pathname === '/event/enter' || location.pathname === '/event/submit';
  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };
  const showheader = isLoggedIn() || !isAdminPath;

  return (
    <Container $path={location.pathname} $showheader={showheader}>
      {showheader && <Header />}
      <Outlet />
      {!isAdminPath && !isEventPath && <Footer />}
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
`;
