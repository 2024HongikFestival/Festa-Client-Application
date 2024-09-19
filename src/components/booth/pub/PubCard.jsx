import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PubCarousel from '@/components/booth/pub/PubCarousel';
import { useTranslation } from 'react-i18next';
import HeartIcon from '@/components/booth/pub/HeratIcon';
import { getHeartColor } from '@/utils/booth/getHeartColor';
import { menuItems, subMenuItems } from '@/constants/booth/menuItems';
import useLikeDataCompare from '@/hooks/useLikeDataCompare';

export default function PubCard() {
  const lng = localStorage.getItem('language');
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState('autonomous');
  const [hearts, setHearts] = useState([]);
  const [behindHearts, setBehindHearts] = useState([]);
  const [likeData, setLikeData] = useState(null);
  const [selectedLikeData, setSelectedLikeData] = useState(null);
  const [isAssociation, setIsAssociation] = useState(false);
  const [previousLikeData, setPreviousLikeData] = useState(null);

  useEffect(() => {
    const associationKeys = [
      'clubScholarship',
      'clubSports',
      'clubPerformance',
      'clubExhibitionLeisure',
      'clubSociety',
    ];
    const isAssoc = associationKeys.includes(selectedMenu);
    setIsAssociation(isAssoc);
  }, [selectedMenu]);

  const handleLikeBtnClick = useCallback(() => {
    const newHeart = {
      id: Date.now(),
      left: `${Math.random() * 80 + 10}%`,
      color: getHeartColor(selectedMenu),
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    setLikeData((prevData) => {
      if (!prevData || !prevData[selectedMenu]) {
        console.log('초기 데이터가 없습니다. 좋아요 기능이 작동하지 않습니다.');
        return prevData;
      }

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
    }, 5000);
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

    return changes;
  }, []);

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
      const newData = JSON.parse(event.data);
      setLikeData((prevData) => {
        if (prevData) {
          const changes = compare(prevData, newData);
          console.log('카테고리별 좋아요 변화량:', changes);

          const newBehindHearts = Object.entries(changes).flatMap(([category, change]) => {
            const heartCount = Math.min(change, 3);
            return Array.from({ length: heartCount }, () => ({
              id: Date.now() + Math.random(),
              left: `${Math.random() * 80 + 10}%`,
              color: getHeartColor(category),
            }));
          });

          if (newBehindHearts.length > 0) {
            setBehindHearts((prev) => {
              const updatedHearts = [...prev, ...newBehindHearts].slice(-3);
              setTimeout(() => {
                setBehindHearts((hearts) => hearts.filter((heart) => !updatedHearts.includes(heart)));
              }, 5000);
              return updatedHearts;
            });
          }

          setPreviousLikeData(prevData);
        }
        return newData;
      });
    };

    return () => {
      eventSource.close();
    };
  }, [sseUrl, compare]);

  const category = selectedMenu === 'clubFederation' ? 'clubScholarship' : selectedMenu;

  useEffect(() => {
    console.log(likeData);
    if (likeData) {
      setSelectedLikeData(likeData[category]);
    }
  }, [likeData, category]);

  return (
    <ContentContainer>
      <PubCardContainer>
        <BehindHeartContainer $isAssociation={isAssociation}>
          {behindHearts.map((heart) => (
            <FallingHeart key={heart.id} left={heart.left}>
              <HeartIcon color={heart.color} />
            </FallingHeart>
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
        <MenuContainer>
          <MenuWrapper index={'1'}>
            {menuItems(t)
              .slice(0, 4)
              .map((item) => (
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
            {menuItems(t)
              .slice(4)
              .map((item) => (
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
            {subMenuItems(t).map((item) => (
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
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0.5;
  }
`;

const FallingHeart = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
  width: 100%;
  height: 100%;
  animation: ${fallAnimation} 3s linear forwards;
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
