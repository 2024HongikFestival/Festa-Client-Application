//vite-plugin-svgr 설치 후, vite.config.js에 적절한 설정을 해준 후 아래와 같이 사용.
import error_kakao from '@/assets/svgs/lost/error_kakao.svg?react';
import kakaoAuth from '@/assets/webp/lost/kakaoAuth.webp';
import styled from 'styled-components';

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
  width: 37.4rem;
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
  gap: 4.8rem;
`;

export const ContentNoticeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  width: 100%;
`;

export const ContentNoticeTitle = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.main.headline5}; //이거 폰트에 없음 S-Core Dream 사용해야 함
`;

export const ContentNoticeText = styled.span`
  align-self: stretch; //일단 추가
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fontStyles.basic.body2Med}; //
  white-space: pre-line;

  font-size: 1.2rem;
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
  background-image: url(${kakaoAuth});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 32.6rem;
  height: 5.9rem;
  flex-shrink: 0;
  border-radius: 10px;
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
  ${({ theme }) => theme.fontStyles.captionMed};
  white-space: pre-line;
`;
