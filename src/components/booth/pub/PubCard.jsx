import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css, keyframes } from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PubCarousel from '@/components/booth/pub/PubCarousel';
import HeartIcon from '@/components/booth/pub/HeratIcon';
import { getHeartColor } from '@/utils/booth/getHeartColor';
import { menuItems, subMenuItems } from '@/constants/booth/menuItems';

export default function PubCard() {
  const lng = localStorage.getItem('language');
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState('autonomous');
  const [hearts, setHearts] = useState([]);
  const [behindHearts, setBehindHearts] = useState([]);
  const [likeData, setLikeData] = useState(null);
  const [selectedLikeData, setSelectedLikeData] = useState(null);
  const [isAssociation, setIsAssociation] = useState(false);

  useEffect(() => {
    const associationKeys = [
      'clubScholarship',
      'clubSports',
      'clubPerformance',
      'clubExhibitionLeisure',
      'clubSociety',
      'clubFederation',
    ];
    setIsAssociation(associationKeys.includes(selectedMenu));
  }, [selectedMenu]);

  const handleLikeBtnClick = useCallback(() => {
    const newHeart = {
      id: `${Date.now()}-${Math.random()}`, // 고유한 키 생성
      left: `${Math.random() * 80 + 10}%`,
      color: getHeartColor(selectedMenu),
      delay: Math.random() * 2, // 0초에서 2초 사이의 랜덤 딜레이
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    setLikeData((prevData) => {
      if (!prevData || !prevData[selectedMenu]) return prevData;

      const updatedData = { ...prevData };
      updatedData[selectedMenu] = updatedData[selectedMenu].map((booth) =>
        selectedLikeData && selectedLikeData[0] && booth.boothId === selectedLikeData[0].boothId
          ? { ...booth, totalLike: booth.totalLike + 1 }
          : booth
      );
      return updatedData;
    });

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 3000);
  }, [selectedMenu, selectedLikeData]);

  const handleMenuClick = (item) => {
    setSelectedMenu(item.key);
  };

  const isSubMenu = subMenuItems(t).some((item) => item.key === selectedMenu);
  const showSubMenu = selectedMenu === 'clubFederation' || isSubMenu;

  const sseUrl = import.meta.env.VITE_SSE_URL;

  const compare = useCallback((prevData, newData) => {
    const changes = {};
    for (const category in newData) {
      if (!prevData[category]) continue;

      const prevTotalLike = prevData[category].reduce((sum, booth) => sum + booth.totalLike, 0);
      const newTotalLike = newData[category].reduce((sum, booth) => sum + booth.totalLike, 0);

      const change = newTotalLike - prevTotalLike;
      if (change > 0) {
        changes[category] = change;
      }
    }
    console.log(changes);
    return changes;
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(sseUrl);
    eventSource.onopen = () => console.log('SSE open success!');
    eventSource.onerror = (error) => {
      console.log('SSE error!', error);
      eventSource.close();
    };

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setLikeData((prevData) => {
        if (prevData) {
          const changes = compare(prevData, newData);

          const newBehindHearts = Object.entries(changes).flatMap(([category, change]) => {
            const heartCount = Math.min(change, 1);
            return Array.from({ length: heartCount }, () => ({
              id: Date.now() + Math.random(),
              left: `${Math.random() * 80 + 10}%`,
              color: getHeartColor(category),
            }));
          });

          if (newBehindHearts.length > 0) {
            setBehindHearts((prev) => [...prev, ...newBehindHearts].slice(-100));
            setTimeout(() => {
              setBehindHearts((hearts) => hearts.filter((heart) => !newBehindHearts.includes(heart)));
            }, 7000);
          }
        }
        return newData;
      });
    };

    return () => {
      eventSource.close();
    };
  }, [sseUrl, compare]);

  useEffect(() => {
    if (likeData) setSelectedLikeData(likeData[selectedMenu === 'clubFederation' ? 'clubScholarship' : selectedMenu]);
  }, [likeData, selectedMenu]);

  return (
    <ContentContainer>
      <PubCardContainer $lng={lng}>
        <BehindHeartContainer $isAssociation={isAssociation}>
          {behindHearts.map((heart) => (
            <FallingHeart2 key={heart.id} left={heart.left}>
              <HeartIcon color={heart.color} />
            </FallingHeart2>
          ))}
        </BehindHeartContainer>
        <HeartContainer $isAssociation={isAssociation}>
          {hearts.map((heart) => (
            <FallingHeart key={heart.id} left={heart.left}>
              <HeartIcon color={heart.color} />
            </FallingHeart>
          ))}
        </HeartContainer>
        <Title>{t('booth.pub.specific')}</Title>
        <MenuContainer $show={isSubMenu}>
          <MenuWrapper $index={'1'}>
            {menuItems(t)
              .slice(0, 4)
              .map((item) => (
                <MenuItem
                  key={item.key}
                  $lng={lng}
                  onClick={() => handleMenuClick(item)}
                  selected={selectedMenu === item.key}
                >
                  {item.label}
                </MenuItem>
              ))}
          </MenuWrapper>
          <MenuWrapper $index={'2'}>
            {menuItems(t)
              .slice(4)
              .map((item) => (
                <MenuItem
                  key={item.key}
                  onClick={() => handleMenuClick(item)}
                  $lng={lng}
                  selected={selectedMenu === item.key && !isSubMenu}
                  $selectedMenu={selectedMenu}
                  $itemKey={item.key}
                >
                  {item.label}
                </MenuItem>
              ))}
          </MenuWrapper>
          <SubMenuWrapper $show={showSubMenu}>
            {subMenuItems(t).map((item) => (
              <SubMenuItem
                key={item.key}
                onClick={() => handleMenuClick(item)}
                $lng={lng}
                selected={selectedMenu === item.key}
                $selectedMenu={selectedMenu}
                $itemKey={item.key}
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

// Styled components follow...

const PubCardContainer = styled.div`
  width: 33.5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: ${({ $lng }) => ($lng === 'en' ? '2rem' : '')};
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0.5;
  }
`;

const fallAnimation2 = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    opacity: 0;  // 40% 위치에서 opacity가 0으로
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
  
`;

const FallingHeart = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
  width: 100%;
  height: 100%;
  animation: ${fallAnimation} 3s linear forwards;
  animation-delay: ${({ delay }) => delay}s; // 랜덤 딜레이 추가
`;

const FallingHeart2 = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
  width: 100%;
  height: 100%;
  animation: ${fallAnimation2} 3s linear forwards;
  animation-delay: ${({ delay }) => delay}s; // 랜덤 딜레이 추가
`;

const HeartContainer = styled.div`
  position: absolute;
  top: ${({ $isAssociation }) => ($isAssociation ? '20rem' : '14.4rem')};
  width: 100%;
  height: 80%;
  pointer-events: none;
  overflow: hidden;
  z-index: 30;
`;

const BehindHeartContainer = styled.div`
  position: absolute;
  top: ${({ $isAssociation }) => ($isAssociation ? '20rem' : '14.4rem')};
  width: 100%;
  height: 80%;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
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
  margin-bottom: 3.5rem;

  & > *:first-child + * {
    margin-top: 1.2rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $index }) => ($index === '1' ? '1.6rem' : '1.8rem')};
`;

const MenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Bold};
  color: ${({ theme, selected, $itemKey, $selectedMenu }) =>
    selected || ($itemKey === 'clubScholarship' && $selectedMenu === 'clubFederation')
      ? theme.colors.hongikBlue
      : theme.colors.gray40};
  cursor: pointer;

  ${({ $lng }) =>
    $lng === 'en' &&
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
    props.$show &&
    css`
      max-height: 5rem;
      opacity: 1;
      margin-top: 1.2rem;
    `}
`;

const SubMenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  color: ${({ theme, selected, $itemKey, $selectedMenu }) =>
    selected || ($itemKey === 'clubScholarship' && $selectedMenu === 'clubFederation')
      ? '#7997F2'
      : theme.colors.gray30};
  cursor: pointer;

  ${({ $lng }) =>
    $lng === 'en' &&
    css`
      font-size: 0.75rem;
      text-align: center;
    `}
`;
