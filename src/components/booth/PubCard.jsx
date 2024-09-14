import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PubCarousel from '@/components/booth/PubCarousel';

import { useTranslation } from 'react-i18next';

export default function PubCard() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const { t, i18n } = useTranslation();

  const handleMenuClick = (item) => {
    setSelectedMenu(item);
    if (item === '총동아리연합회') {
      setShowSubMenu(!showSubMenu);
      setSelectedSubMenu(null);
    } else {
      setShowSubMenu(false);
      setSelectedSubMenu(null);
    }
  };

  const handleSubMenuClick = (subItem) => {
    setSelectedSubMenu(subItem);
    setSelectedMenu('총동아리연합회');
  };

  return (
    <ContentContainer>
      <PubCardContainer>
        <Title>{t('booth.pub.specific')}</Title>
        <MenuContainer>
          <MenuWrapper index={'1'}>
            {['자율전공', '경영/경제', '미대', '건축도시'].map((item) => (
              <MenuItem key={item} onClick={() => handleMenuClick(item)} selected={selectedMenu === item}>
                {item}
              </MenuItem>
            ))}
          </MenuWrapper>

          <MenuWrapper index={'2'}>
            {['사범대', '문과대', '공대', '융합', '총동아리연합회'].map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleMenuClick(item)}
                selected={selectedMenu === item && !selectedSubMenu}
              >
                {item}
              </MenuItem>
            ))}
          </MenuWrapper>

          <SubMenuWrapper show={showSubMenu || selectedSubMenu}>
            {['학술', '스포츠', '공연', '전시/레저', '사회/연합'].map((item) => (
              <SubMenuItem key={item} onClick={() => handleSubMenuClick(item)} selected={selectedSubMenu === item}>
                {item}
              </SubMenuItem>
            ))}
          </SubMenuWrapper>
        </MenuContainer>
        <PubCarousel />
      </PubCardContainer>
    </ContentContainer>
  );
}

const PubCardContainer = styled.div`
  width: 33.5rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const SubMenuWrapper = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.3s ease-out,
    opacity 0.3s ease-out,
    margin-top 0.3s ease-out;
  width: 26.2rem;
  display: flex;
  gap: 2.4rem;

  ${(props) =>
    props.show &&
    css`
      max-height: 5rem; // 충분히 큰 값으로 설정
      opacity: 1;
      margin-top: 0.8rem;
    `}
`;

const SubMenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  color: ${({ theme, selected }) => (selected ? '#7997F2' : theme.colors.gray30)};
  cursor: pointer;
`;
