import styled, { css } from 'styled-components';

/* Header */

export const HeaderLayout = styled.header`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  height: 5.6rem;
  background-color: transparent;
  position: fixed;
  top: 0rem;
  z-index: 100;
`;

export const HeaderBg = styled.header`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 5.6rem;
  position: fixed;
  top: 0rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray20};
  background: ${({ $isMenuOpen, $flame }) => ($isMenuOpen && !$flame ? '#F1FBFD' : 'rgba(255, 255, 255, 0.05)')};
  box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(0.2rem);
  transition: background 0.3s ease;

  ${(props) =>
    (props.$path === '/likelion' || props.$path === '/gaehwa') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.black};
      box-shadow: 0rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.12) inset;
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
      box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    (props.$path === '/admin/losts' || props.$path === '/admin/event') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.white};
    `}


  ${(props) =>
    props.$isCamera &&
    css`
      background-color: ${(props) => props.theme.colors.white};
    `}
`;

export const HambergerMenu = styled.div`
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

export const HiuLogo = styled.div`
  cursor: pointer;
  width: 14.7rem;
  height: 1.8rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  margin-right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

/* CommonMenuBar */
export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 5.6rem;
  bottom: 0;
  width: 100%;
  max-width: 26.1rem;
  background-color: #f1fbfd;
  border-right: 0.1rem solid #d1c2f3;
  z-index: 99;
  overflow-y: auto;
  opacity: 1;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }

  &.close {
    transform: translateX(-100%);
    opacity: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ $flame }) =>
    $flame &&
    css`
      background: rgba(1, 3, 4, 0.9);
      border-right: none;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 0.1rem;
        height: var(--before-height);
        background: linear-gradient(180deg, #fff7f7 0%, #ff7711 69%);
      }
      &::-webkit-scrollbar {
        width: 0rem;
      }
    `};
`;

export const MenuList = styled.ul`
  margin: 3.5rem 2.2rem 0;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.$isOpen ? '#def2fd;' : 'transparent')};
  border-radius: ${(props) => (props.$isOpen ? '1rem' : '0')};
  color: ${(props) => props.theme.colors.gray80};
  span {
    padding: ${(props) => (props.$isOpen ? '0.8rem 0' : '1rem 0')};
    ${(props) => props.theme.fontStyles.basic.body1Med};
  }

  ${({ $flame }) =>
    $flame &&
    css`
      color: white;
      justify-content: inherit;
      padding-left: 2.4rem;
      span {
        padding: 1rem 0;
      }
    `}
`;

/* Accordion */

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: var(--accordion-height, 0);
  transition: height 0.3s ease;
`;

export const SubMenuItemWrapper = styled.div`
  margin-bottom: 1.9rem;
  display: flex;
  flex-direction: column;
`;

export const SubMenuItem = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  margin: 0.8rem 0;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background: linear-gradient(90deg, #85daff 0%, #a9f2dd 25.9%, #becdf9 43.9%, #ece6f0 89.4%);

  ${({ $flame }) =>
    $flame &&
    css`
      background: #2c2d30;
    `}
`;

/* Language Toggle */

export const LanguageWrapper = styled.div`
  height: 6.5rem;
  margin: 0 2.2rem 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const LanguageBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1.8rem 0;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
  .language {
    color: ${({ $flame, theme }) => ($flame ? theme.colors.gray40 : 'rgba(0, 115, 180, 0.8)')};
    ${(props) => props.theme.fontStyles.basic.body2Med};
    text-align: center;
    margin-right: 1.6rem;
  }
`;

export const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 8.2rem;
  height: 2.8rem;
  border-radius: 1.5rem;
  border: 0.05rem solid #b0dbf3;
  background-color: white;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  justify-content: space-between;
  ${({ $flame }) =>
    $flame &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.gray100};
    `}
`;

export const Slider = styled.div`
  margin: 0 0.5rem;
  position: absolute;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(110deg, #27b0eb 40.84%, #d1dbfa 81.65%);
  transition: transform 0.3s ease;
  transform: ${({ $isKorActive }) => ($isKorActive ? 'translateX(0)' : 'translateX(100%)')};

  ${({ $flame }) =>
    $flame &&
    css`
      background: linear-gradient(180deg, rgba(255, 15, 0, 0.8) 0%, rgba(255, 229, 0, 0.8) 236.05%);
    `}
`;

export const LanguageItem = styled.div`
  margin: ${({ $isEng }) => ($isEng ? '0 0.5rem 0 0' : '0 0 0 0.5rem')};
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 1;
  color: ${({ $isKorActive }) => ($isKorActive ? 'white' : '#B0DBF3')};
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.001rem;
  }
  ${({ $flame }) =>
    $flame &&
    css`
      color: ${({ $isKorActive, theme }) => ($isKorActive ? 'white' : theme.colors.gray20)};
    `}
`;

/* AdminMenuBar */

export const AdminBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 5.6rem;
  bottom: 0;
  width: 100%;
  max-width: 19.2rem;
  background-color: white;
  z-index: 99;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }

  &.close {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.span`
  padding: 1.6rem;
  text-align: left;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray20};
  }
`;

export const Logout = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  padding: 1.6rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray70};
  cursor: pointer;
`;
