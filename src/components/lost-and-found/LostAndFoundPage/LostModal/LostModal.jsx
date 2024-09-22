import axios from 'axios';
import { t } from 'i18next';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from './LostModal.styled';
import PanZoom from 'react-easy-panzoom';
import CustomMap from './CutomMap';
import { axiosInstance } from '@/api/axios';

const LostModal = ({ children, top, gap, isOpen, setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <S.ModalWrapper>
        <S.ModalLayout $top={top} $gap={gap}>
          {children}
          <S.BlueButton onClick={handleCloseModal}>{t('Close')}</S.BlueButton>
        </S.ModalLayout>
      </S.ModalWrapper>
    )
  );
};

export const LocationModal = ({ isOpen, setIsOpen }) => {
  const panZoomRef = React.useRef(null);

  return (
    <LostModal top={'16.3rem'} gap={'0rem'} isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.LostCenterLayout>
        <S.LostCenterTitle>
          {t('LocationModal.location1')}
          &nbsp;
          <span>{t('LocationModal.location2')}</span>
        </S.LostCenterTitle>
        <CustomMap />
      </S.LostCenterLayout>
      <S.LostCenterContent>
        <Trans i18nKey={'LocationModal.content'} components={{ 1: <span />, 2: <br /> }}></Trans>
      </S.LostCenterContent>
    </LostModal>
  );
};

export const ItemModal = ({ isOpen, setIsOpen, lostId }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState({});

  const getItemApi = async () => {
    try {
      const response = await axiosInstance.get(`/losts/${lostId}`);
      setItem(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    lostId !== -1 && getItemApi();
  }, [lostId]);

  const extractDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.split('T')[0].split('-')[2] + '일';
    return date;
  };

  const extractTime = (timestamp) => {
    if (!timestamp) return '';
    const time = timestamp.split('T')[1].slice(0, 5);
    return time;
  };

  return (
    <LostModal top={'7.9rem'} gap={'3.6rem'} isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.LostItemWrapper>
        <S.LostItemDateBox>
          <S.LostItemDay>{extractDate(item.createdAt)}</S.LostItemDay>
          <S.LostItemTime>{extractTime(item.createdAt)}</S.LostItemTime>
        </S.LostItemDateBox>
        <S.LostItemLayout>
          <S.LostItemImg src={item.imageUrl} />
          <S.LostItemContentWrapper>
            <S.LostItemMainContentLayout>
              <S.LostItemMainContentBox>
                <S.LostItemMainContentLeft>
                  {t('LostModal.found')}
                  <S.BlueLine />
                </S.LostItemMainContentLeft>
                <S.LostItemMainContentRight>{item.foundLocation}</S.LostItemMainContentRight>
              </S.LostItemMainContentBox>

              <S.LostItemMainContentBox>
                <S.LostItemMainContentLeft>
                  {t('LostModal.stored')}
                  <S.BlueLine />
                </S.LostItemMainContentLeft>
                <S.LostItemMainContentRight>{item.storageLocation}</S.LostItemMainContentRight>
              </S.LostItemMainContentBox>
            </S.LostItemMainContentLayout>
            <S.ThreeLineTextContent>{item.content}</S.ThreeLineTextContent>
          </S.LostItemContentWrapper>
        </S.LostItemLayout>
      </S.LostItemWrapper>
    </LostModal>
  );
};

LostModal.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.string.isRequired,
  gap: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

LocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

ItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  lostId: PropTypes.number.isRequired,
};

const SpaceSpan = styled.span`
  &::after {
    display: inline-block;
    width: 5px;
    content: ' ';
  }
`;
