import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PubCarousel from '@/components/booth/PubCarousel';
import { useTranslation } from 'react-i18next';
import HeartIcon from '@/components/booth/HeratIcon';

import { useCallback } from 'react';

export default function PubCard() {
  const lng = localStorage.getItem('language');
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState(t('booth.pub.menu.1'));
  const [hearts, setHearts] = useState([]);

  const handleLikeBtnClick = useCallback(() => {
    console.log('btn clicked!');
    const newHeart = {
      id: Date.now(),
      left: `${Math.random() * 80 + 10}%`, // Random position between 10% and 90%
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove the heart after animation completes
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 15000);
  }, []);

  const menuItems = [
    t('booth.pub.menu.1'),
    t('booth.pub.menu.2'),
    t('booth.pub.menu.3'),
    t('booth.pub.menu.4'),
    t('booth.pub.menu.5'),
    t('booth.pub.menu.6'),
    t('booth.pub.menu.7'),
    t('booth.pub.menu.8'),
    t('booth.pub.menu.9'),
  ];

  const subMenuItems = [
    t('booth.pub.menu.10'),
    t('booth.pub.menu.11'),
    t('booth.pub.menu.12'),
    t('booth.pub.menu.13'),
    t('booth.pub.menu.14'),
  ];

  const handleMenuClick = (item) => {
    setSelectedMenu(item);
  };

  const isSubMenu = subMenuItems.includes(selectedMenu);
  const showSubMenu = selectedMenu === t('booth.pub.menu.9') || isSubMenu;

  return (
    <ContentContainer>
      <PubCardContainer>
        <HeartContainer>
          <FallingHeart>
            {/* <HeartIcon /> */}
            {/* {hearts.map((heart) => (
              <FallingHeart key={heart.id} style={{ left: heart.left }}>
                <HeartIcon />
              </FallingHeart>
            ))} */}
            {hearts.map((heart) => (
              <FallingHeart key={heart.id} left={heart.left}>
                <HeartIcon />
              </FallingHeart>
            ))}
          </FallingHeart>
        </HeartContainer>
        <Title>{t('booth.pub.specific')}</Title>
        <MenuContainer>
          <MenuWrapper index={'1'}>
            {menuItems.slice(0, 4).map((item) => (
              <MenuItem key={item} lng={lng} onClick={() => handleMenuClick(item)} selected={selectedMenu === item}>
                {item}
              </MenuItem>
            ))}
          </MenuWrapper>

          <MenuWrapper index={'2'}>
            {menuItems.slice(4).map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleMenuClick(item)}
                lng={lng}
                selected={selectedMenu === item && !isSubMenu}
              >
                {item}
              </MenuItem>
            ))}
          </MenuWrapper>

          <SubMenuWrapper show={showSubMenu}>
            {subMenuItems.map((item) => (
              <SubMenuItem key={item} onClick={() => handleMenuClick(item)} lng={lng} selected={selectedMenu === item}>
                {item}
              </SubMenuItem>
            ))}
          </SubMenuWrapper>
        </MenuContainer>
        <PubCarousel menu={selectedMenu} click={handleLikeBtnClick} />
      </PubCardContainer>
    </ContentContainer>
  );
}

const PubCardContainer = styled.div`
  width: 33.5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gg
  position: relative;
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0.5;
  }
`;

// const FallingHeart = styled.div`
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 100%;
//   height: 100%;
//   animation: ${fallAnimation} 10s linear infinite;
// `;

const FallingHeart = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left}; // 각 하트의 위치를 개별적으로 지정
  width: 100%;
  height: 100%;
  animation: ${fallAnimation} 10s linear forwards; // 애니메이션이 독립적으로 실행되도록 수정
`;

const HeartContainer = styled.div`
  position: absolute;
  /* background-color: red; */
  top: 15rem;
  /* z-index: 5; */
  width: 100%;
  height: 75%;
  overflow: hidden;
`;

const Title = styled.div`
  margin-top: 2.4rem;
  ${({ theme }) => theme.fontStyles.main.headline6}
  text-align: center;
`;

const MenuContainer = styled.div`
  width: 28.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  gap: 1.2rem;
  margin-bottom: 3.5rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ index }) => (index === '1' ? '1.6rem' : '1.8rem')};
`;

const MenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Bold};
  color: ${({ theme, selected }) => (selected ? theme.colors.hongikBlue : theme.colors.gray40)};
  cursor: pointer;

  ${({ lng }) =>
    lng === 'en' &&
    css`
      font-size: 0.9rem;
      text-align: center;
    `}
`;

const SubMenuWrapper = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.3s ease-out,
    opacity 0.3s ease-out,
    margin-top 0.3s ease-out;
  display: flex;
  gap: 2.4rem;

  ${(props) =>
    props.show &&
    css`
      max-height: 5rem;
      opacity: 1;
      margin-top: 0.8rem;
    `}
`;

const SubMenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  color: ${({ theme, selected }) => (selected ? '#7997F2' : theme.colors.gray30)};
  cursor: pointer;

  ${({ lng }) =>
    lng === 'en' &&
    css`
      font-size: 0.75rem;
      text-align: center;
    `}
`;
