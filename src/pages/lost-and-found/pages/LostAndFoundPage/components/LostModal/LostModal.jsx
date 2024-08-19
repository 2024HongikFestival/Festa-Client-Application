import PropTypes from 'prop-types';
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

export const ItemModal = ({ isOpen, setIsOpen }) => {
  <LostModal top={'7.9rem'} gap={'7.5rem'} isOpen={isOpen} setIsOpen={setIsOpen}>
    <S.LostItemWrapper>
      <S.LostItemDateBox>
        <S.LostItemDay>25일</S.LostItemDay>
        <S.LostItemTime>11:23</S.LostItemTime>
      </S.LostItemDateBox>
      <S.LostItemLayout>
        <S.LostItemImg src />
        <S.LostItemContentWrapper>
          <S.LostItemMainContentLayout>
            <S.LostItemMainContentBox>
              <S.LostItemMainContentLeft>
                발견 위치
                <S.BlueLine />
              </S.LostItemMainContentLeft>
              <S.LostItemMainContentRight>학생 회관 앞</S.LostItemMainContentRight>
            </S.LostItemMainContentBox>

            <S.LostItemMainContentBox>
              <S.LostItemMainContentLeft>
                보관 위치
                <S.BlueLine />
              </S.LostItemMainContentLeft>
              <S.LostItemMainContentRight>총학 부스</S.LostItemMainContentRight>
            </S.LostItemMainContentBox>
          </S.LostItemMainContentLayout>
          <S.ThreeLineTextContent>엄청 큰 가방 학생회관 앞에서 주웠는데 총학 부스에 맡겼습니다~</S.ThreeLineTextContent>
        </S.LostItemContentWrapper>
      </S.LostItemLayout>
    </S.LostItemWrapper>
  </LostModal>;
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
};
