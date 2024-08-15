<<<<<<< HEAD
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
=======
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
>>>>>>> bfe7ec3379ccaa282bd583da215e9f570d8db5e2

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
