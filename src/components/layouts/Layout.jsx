import styled from "styled-components";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <Continer>
      <Outlet />
    </Continer>
  );
}

const Continer = styled.div`
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`;
