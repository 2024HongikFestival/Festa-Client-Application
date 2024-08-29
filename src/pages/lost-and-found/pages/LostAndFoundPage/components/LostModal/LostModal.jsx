import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as S from './LostModal.styled';

const LostModal = ({ children, top, gap, isOpen, setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <S.ModalWrapper>
        <S.ModalLayout $top={top} $gap={gap}>
          {children}
          <S.BlueButton onClick={handleCloseModal}>닫기</S.BlueButton>
        </S.ModalLayout>
      </S.ModalWrapper>
    )
  );
};

export const LocationModal = ({ isOpen, setIsOpen }) => {
  return (
    <LostModal top={'16.3rem'} gap={'1.6rem'} isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.LostCenterLayout>
        <S.LostCenterTitle>
          분실물 센터&nbsp;<span>위치</span>
        </S.LostCenterTitle>
        <S.LostCenterMap />
      </S.LostCenterLayout>
      <S.LostCenterContent>
        <span>대운동장 구령대 중앙에</span>
        <br />
        분실물 센터가 위치해 있습니다.
      </S.LostCenterContent>
    </LostModal>
  );
};

export const ItemModal = ({ isOpen, setIsOpen, lostId }) => {
  const [item, setItem] = useState({});

  const getItemApi = async () => {
    try {
      const response = await axios.get(`https://api.2024hongikfestival.com/losts/${lostId}`);
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
    <LostModal top={'7.9rem'} gap={'7.5rem'} isOpen={isOpen} setIsOpen={setIsOpen}>
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
                  발견 위치
                  <S.BlueLine />
                </S.LostItemMainContentLeft>
                <S.LostItemMainContentRight>{item.foundLocation}</S.LostItemMainContentRight>
              </S.LostItemMainContentBox>

              <S.LostItemMainContentBox>
                <S.LostItemMainContentLeft>
                  보관 위치
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
