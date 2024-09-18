import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PubCarousel from '@/components/booth/pub/PubCarousel';
import { useTranslation } from 'react-i18next';
import HeartIcon from '@/components/booth/pub/HeratIcon';
import { getHeartColor } from '@/utils/booth/getHeartColor';

export default function PubCard() {
  const lng = localStorage.getItem('language');
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState('autonomous');
  const [hearts, setHearts] = useState([]);
  const [likeData, setLikeData] = useState(null);
  const [selectedLikeData, setSelectedLikeData] = useState(null);
  const [isAssociation, setIsAssociation] = useState(false);

  useEffect(() => {
    const associationKeys = [
      'clubScholarship',
      'clubSports',
      'clubPerformance',
      'clubExhibitionLeisure',
      'clueSociety',
    ];
    const isAssoc = associationKeys.includes(selectedMenu);
    setIsAssociation(isAssoc);
  }, [selectedMenu]);

  const handleLikeBtnClick = useCallback(() => {
    const newHeart = {
      id: Date.now(),
      left: `${Math.random() * 80 + 10}%`, // Random position between 10% and 90%
      color: getHeartColor(selectedMenu), // Determine the heart color based on the selected menu
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 15000);
  }, [selectedMenu]);

  const menuItems = [
    { key: 'autonomous', label: t('booth.pub.menu.1') },
    { key: 'businessEconomic', label: t('booth.pub.menu.2') },
    { key: 'art', label: t('booth.pub.menu.3') },
    { key: 'architecture', label: t('booth.pub.menu.4') },
    { key: 'education', label: t('booth.pub.menu.5') },
    { key: 'liberalArts', label: t('booth.pub.menu.6') },
    { key: 'engineering', label: t('booth.pub.menu.7') },
    { key: 'convergence', label: t('booth.pub.menu.8') },
    { key: 'clubScholarship', label: t('booth.pub.menu.9') },
  ];

  const subMenuItems = [
    { key: 'clubScholarship', label: t('booth.pub.menu.10') },
    { key: 'clubSports', label: t('booth.pub.menu.11') },
    { key: 'clubPerformance', label: t('booth.pub.menu.12') },
    { key: 'clubExhibitionLeisure', label: t('booth.pub.menu.13') },
    { key: 'clueSociety', label: t('booth.pub.menu.14') },
  ];

  const handleMenuClick = (item) => {
    setSelectedMenu(item.key);
  };

  const isSubMenu = subMenuItems.some((item) => item.key === selectedMenu);
  const showSubMenu = selectedMenu === 'clubScholarship' || isSubMenu;

  const sseUrl = import.meta.env.VITE_SSE_URL;

  useEffect(() => {
    const eventSource = new EventSource(sseUrl);
    eventSource.onopen = function () {
      console.log('SSE open success!');
    };
    eventSource.onerror = function (error) {
      console.log('SSE error!', error);
      eventSource.close();
    };
    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data);
      setLikeData(data);
    };
    return () => {
      eventSource.close();
    };
  }, [sseUrl]);

  const category = selectedMenu;

  useEffect(() => {
    if (likeData) {
      setSelectedLikeData(likeData[category]);
    }
  }, [likeData, category]);

  return (
    <ContentContainer>
      <PubCardContainer>
        <HeartContainer $isAssociation={isAssociation}>
          {hearts.map((heart) => (
            <FallingHeart key={heart.id} left={heart.left}>
              <HeartIcon color={heart.color} />
            </FallingHeart>
          ))}
        </HeartContainer>
        <Title>{t('booth.pub.specific')}</Title>
        <MenuContainer>
          <MenuWrapper index={'1'}>
            {menuItems.slice(0, 4).map((item) => (
              <MenuItem
                key={item.key}
                lng={lng}
                onClick={() => handleMenuClick(item)}
                selected={selectedMenu === item.key}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuWrapper>

          <MenuWrapper index={'2'}>
            {menuItems.slice(4).map((item) => (
              <MenuItem
                key={item.key}
                onClick={() => handleMenuClick(item)}
                lng={lng}
                selected={selectedMenu === item.key && !isSubMenu}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuWrapper>

          <SubMenuWrapper show={showSubMenu}>
            {subMenuItems.map((item) => (
              <SubMenuItem
                key={item.key}
                onClick={() => handleMenuClick(item)}
                lng={lng}
                selected={selectedMenu === item.key}
              >
                {item.label}
              </SubMenuItem>
            ))}
          </SubMenuWrapper>
        </MenuContainer>
        <PubCarousel menu={selectedMenu} click={handleLikeBtnClick} likeData={selectedLikeData} />
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
  position: relative;
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(0);  // 애니메이션 시작 위치를 컨테이너의 최상단으로 고정
    opacity: 1;
  }
  100% {
    transform: translateY(100%);  // 애니메이션 종료 위치를 컨테이너의 최하단으로 고정
    opacity: 0.5;
  }
`;

const FallingHeart = styled.div`
  position: absolute;
  top: 0; // HeartContainer 내에서 항상 같은 위치에서 시작되도록 설정
  left: ${({ left }) => left}; // 각 하트의 위치를 개별적으로 지정
  width: 100%;
  height: 100%;
  animation: ${fallAnimation} 3s linear forwards; // 애니메이션이 동일한 속도로 적용되도록 설정
`;

const HeartContainer = styled.div`
  position: absolute;
  top: ${({ $isAssociation }) => ($isAssociation ? '18rem' : '14.4rem')};
  width: 100%;
  height: 80%;
  pointer-events: none;
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
  z-index: 5;

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
