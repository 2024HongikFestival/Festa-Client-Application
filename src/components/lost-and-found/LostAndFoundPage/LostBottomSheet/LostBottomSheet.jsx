import { LOSTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './LostBottomSheet.styled';

const LostBottomSheet = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleKakaoAuth = () => {
    window.location.href = LOSTS_KAKAO_AUTH_URL;
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300); // 애니메이션 시간과 맞춰줌 (0.3s)
  };

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
    if (isOpen) handleClose();
  });

  return (
    isOpen && (
      <S.ModalWrapper>
        <S.ModalBox ref={modalRef} $isClosing={isClosing}>
          <S.ModalBoxHeader>
            <S.ModalBoxHeaderDragLine onClick={handleClose} />
          </S.ModalBoxHeader>
          <S.ModalBoxContent>
            <S.ContentNoticeLayout>
              <S.ContentNoticeTitle>{t('FooterModal.DidYouFindAnyLostItems')}</S.ContentNoticeTitle>
              <S.ContentNoticeText>{t('FooterModal.SomeoneAnxiouslyLookingForIt')}</S.ContentNoticeText>
            </S.ContentNoticeLayout>
            <S.ButtonWrapper>
              <S.KakaoButton onClick={handleKakaoAuth}>
                <S.KakaoLogoIcon />
                <S.KakaoBtnText>{t('LostAndFound.KakaoBtnText')}</S.KakaoBtnText>
              </S.KakaoButton>
              <S.ButtonFooterTextBox>
                <S.ErrorIcon />
                <S.ErrorText>{t('FooterModal.UserAuthenticationRequired')}</S.ErrorText>
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
