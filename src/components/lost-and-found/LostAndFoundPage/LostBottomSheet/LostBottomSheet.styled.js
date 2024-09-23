import error_kakao from '@/assets/svgs/lost/error_kakao.svg?react';
import KakaoLogo from '@/assets/svgs/lost/KakaoLogo.svg?react';
import kakaoBackGround from '@/assets/webps/lost/kakaoBackGround.webp';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;

  display: flex;
  justify-content: center;
`;

export const ModalBox = styled.div`
  position: absolute;

  bottom: 0;

  display: flex;
  width: 100%;
  max-width: 76.8rem;
  min-width: 37.5rem;

  height: 38.6rem;
  padding-bottom: 35rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  border-radius: var(--Corner-Extra-large, 28px) var(--Corner-Extra-large, 28px) 0px 0px;
  background: var(--Schemes-On-Primary, #fff);

  /* M3/Elevation Light/3 */
  box-shadow:
    0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px 0px rgba(0, 0, 0, 0.3);

  animation: ${({ $isClosing }) => ($isClosing ? slideDown : slideUp)} 0.3s ease-out forwards;
`;

export const ModalBoxHeader = styled.div`
  display: flex;
  width: 37.4rem;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const ModalBoxHeaderDragLine = styled.div`
  width: 3.2rem;
  height: 0.4rem;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.gray80};
`;

export const ModalBoxContent = styled.div`
  display: flex;
  width: 32.6rem;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
`;

export const ContentNoticeLayout = styled.div`
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;

  width: 100%;
`;

export const ContentNoticeTitle = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.main.headline4};
  text-align: center;
`;

export const ContentNoticeText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fontStyles.basic.body1Med};
  white-space: pre-line;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 32.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const KakaoButton = styled.button`
  display: flex;
  align-items: center;

  background-image: url(${kakaoBackGround});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body1Bold};

  width: 32.6rem;
  height: 5.9rem;
  flex-shrink: 0;
  border-radius: 10px;
`;

export const KakaoLogoIcon = styled(KakaoLogo)`
  width: 2.7rem;
  height: 2.8rem;
  flex-shrink: 0;

  margin-left: 2.8rem;
  margin-right: 1.8rem;
`;

export const KakaoBtnText = styled.span`
  width: 20rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body1Bold};
`;

export const ButtonFooterTextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ErrorIcon = styled(error_kakao)`
  width: 1.6rem;
  height: 1.6rem;
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.gray30};
  ${({ theme }) => theme.fontStyles.basic.captionMed};
  white-space: pre-line;

  color: var(--Grayscale-Gray_30, #bfc2c8);
`;
