import styled from 'styled-components';
import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();

  return (
    <HeaderLayout>
      <HeaderBg>
        <HambergerMenu>
          <img src={hambergerMenu} alt="hambergerMenu" />
        </HambergerMenu>
        <HiuLogo onClick={() => nav('/')}>
          <img src={hiuLogo} alt="hiuLogo" />
        </HiuLogo>
        <Right></Right>
      </HeaderBg>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  height: 5.6rem;
  background-color: ${(props) => props.theme.colors.black};
  position: fixed;
  top: 0rem;
  z-index: 100;
`;

const HeaderBg = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 5.6rem;
  background: rgba(22, 22, 22, 0.1);
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.12) inset;
  backdrop-filter: blur(0.2rem);
  position: fixed;
  top: 0rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HambergerMenu = styled.div`
  cursor: pointer;
  margin-left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HiuLogo = styled.div`
  cursor: pointer;
  width: 14.7rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  margin-right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;
