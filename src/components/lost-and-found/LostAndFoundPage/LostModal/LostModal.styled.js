import lostCenterLocation from '@/assets/webp/lost/lostCenterLocation.webp';
import styled from 'styled-components';

/*
  공통 컴포넌트 작성
*/
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

export const ModalLayout = styled.div`
  position: fixed;
  top: ${({ $top }) => $top};

  display: flex;
  width: 33.5rem;
  padding-top: 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ $gap }) => $gap};

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};

  /* 대동제 요소 그림자 */
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const BlueButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  display: flex;
  padding: 2.4rem 4.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  border-radius: 0px 0px 16px 16px;
  background: ${({ theme }) => theme.colors.hongikBlue};
  box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.8);

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.basic.subHeadBold};
`;

/*
  개별 컴포넌트 작성
*/

//Location Modal
export const LostCenterLayout = styled.div`
  display: flex;
  width: 33.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const LostCenterTitle = styled.span`
  align-self: stretch;
  color: var(--Grayscale-Gray_100, ${({ theme }) => theme.colors.hongikBlue});
  text-align: center;
  ${({ theme }) => theme.fontStyles.main.headline6};

  span {
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fontStyles.main.headline6};
  }
`;

export const LostCenterMap = styled.div`
  background-image: url(${lostCenterLocation});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 33.5rem;
  height: 25.2rem;

  box-shadow: 0px 0px 40px 0px rgba(132, 132, 132, 0.2);
`;

export const LostCenterContent = styled.span`
  width: 28.7rem;
  height: 4.8rem;
  align-self: center;

  ${({ theme }) => theme.fontStyles.basic.body1Med};
  color: ${({ theme }) => theme.colors.gray70};

  span {
    ${({ theme }) => theme.fontStyles.basic.body1Med};
    color: ${({ theme }) => theme.colors.black};
  }
`;

//ItemModal
export const LostItemWrapper = styled.div`
  display: flex;
  width: 28.7rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const LostItemDateBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const LostItemDay = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;

  ${({ theme }) => theme.fontStyles.basic.subHeadBold};
`;

export const LostItemTime = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;

  ${({ theme }) => theme.fontStyles.basic.subHeadBold};
`;

export const LostItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  align-self: stretch;
`;

export const LostItemImg = styled.img`
  width: 28.7rem;
  height: 28.7rem;
  //src: url(${({ $src }) => $src});

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: #d9d9d9;
`;

export const LostItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  align-self: stretch;
`;

export const LostItemMainContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  align-self: stretch;
`;

export const LostItemMainContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  align-self: stretch;
`;

export const LostItemMainContentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  white-space: nowrap;
  color: ${({ theme }) => theme.colors.hongikBlue};
  ${({ theme }) => theme.fontStyles.basic.body1Bold};
`;

export const BlueLine = styled.div`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.hongikBlue};
`;

export const LostItemMainContentRight = styled.span`
  width: 208px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body1Med};
`;

export const ThreeLineTextContent = styled.span`
  height: 4.8rem;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray50};
  ${({ theme }) => theme.fontStyles.basic.body1Med};
`;
