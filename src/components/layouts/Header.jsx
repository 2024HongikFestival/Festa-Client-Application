import styled from 'styled-components';
import hiuLogo from '@/assets/layouts/hiuLogo.svg';
import hambergerMenu from '@/assets/layouts/hambergerMenu.svg';

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderBg>
        <HambergerMenu>
          <img src={hambergerMenu} alt="hambergerMenu" />
        </HambergerMenu>
        <HiuLogo>
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
  height: 56px;
  background-color: black;
  position: fixed;
  top: 0px;
  z-index: 10;
`;

const HeaderBg = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 56px;
  background: rgba(22, 22, 22, 0.1);
  box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.12) inset;
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HambergerMenu = styled.div`
  margin-left: 20px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HiuLogo = styled.div`
  width: 137px;
  height: 28px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  margin-right: 20px;
  width: 24px;
  height: 24px;
`;
