import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import * as S from './LostBottomSheet.styled';

const LostBottomSheet = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  const useOutsideClick = (ref, onClickOutside) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, onClickOutside]);
  };

  useOutsideClick(modalRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    isOpen && (
      <S.ModalWrapper onClick={() => setIsOpen(false)}>
        <S.ModalBox ref={modalRef}>
          <S.ModalBoxHeader>
            <S.ModalBoxHeaderDragLine onClick={() => setIsOpen(false)} />
          </S.ModalBoxHeader>
          <S.ModalBoxContent>
            <S.ContentNoticeLayout>
              <S.ContentNoticeTitle>분실물을 발견하셨나요?</S.ContentNoticeTitle>
              <S.ContentNoticeText>
                {`대동제를 함께한 누군가가 애타게 찾고 있는 물건일 거예요!\n홍익대학교를 벗어나기 전 소중한 물건 되찾을 수 있도록\n따뜻한 마음으로 분실물을 제보해주세요 😍`}
              </S.ContentNoticeText>
            </S.ContentNoticeLayout>
            <S.ButtonWrapper>
              <S.KakaoButton />
              <S.ButtonFooterTextBox>
                <S.ErrorIcon />
                <S.ErrorText>
                  {`무분별한 게시판 이용 방지를 위해 사용자 인증을 받고 있으며,\n모든 데이터는 축제 기간 후 안전하게 삭제됩니다.`}
                </S.ErrorText>
              </S.ButtonFooterTextBox>
            </S.ButtonWrapper>
          </S.ModalBoxContent>
        </S.ModalBox>
      </S.ModalWrapper>
    )
  );
};

LostBottomSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default LostBottomSheet;
