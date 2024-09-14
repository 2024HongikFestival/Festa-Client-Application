import warningIcon from '@/assets/svgs/lost/error.svg';
import Mangae from '@/assets/svgs/lost/Mangae.svg?react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 7rem;
`;

export const Main = styled.main`
  width: 37.5rem;
  min-height: 49.7rem; //852 - 55
  //margin-top: 5.6rem;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.main.headline2};

  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33.6rem;
  height: auto;

  margin-bottom: 2.4rem;
`;

export const AddLostItemButton = styled.button`
  display: flex;
  width: 33.5rem;
  height: 5.2rem;
  padding: 2.4rem 4.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.hongikBlue}; //아직 theme에 없어서 하드 코딩 hongikBlue
  box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.8);

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.basic.subHeadBold};
  text-align: center;

  margin-bottom: 0.8rem;

  @keyframes shadowBlink {
    0% {
      box-shadow: 0 0 2rem 1.5rem rgba(255, 255, 255, 0.8);
    }
    50% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 2rem 1.5rem rgba(255, 255, 255, 0.8);
    }
  }

  animation: shadowBlink 1.5s infinite;
`;

export const ButtonDetailWrapper = styled.div`
  min-width: 32rem;
  display: inline-flex;
  justify-content: center;
  gap: 4px;
`;
export const ButtonDetailIcon = styled.div`
  min-width: 1.5rem;
  min-height: 1.5rem;
  background-image: url(${warningIcon});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ButtonDetailText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 29.2rem;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fontStyles.basic.captionMed};

  span {
    ${({ theme }) => theme.fontStyles.basic.captionBold};
    color: ${({ theme }) => theme.colors.gray100};

    text-underline-offset: 4px;

    span {
      text-decoration: underline;
    }
  }
`;

//나중에 컴포넌트화 할 예정
export const FilterWrapper = styled.div``;

export const LostAndFoundSection = styled.section`
  display: flex;
  width: 33.5rem;
  padding: 2.4rem 1.7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};

  /* 대동제 요소 그림자 */
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const LostAndFoundSectionTitle = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;

  ${({ theme }) => theme.fontStyles.main.headline6};
  margin-bottom: 0.8rem;
`;

export const LostAndFoundArticleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  align-self: stretch;
`;

export const Gap8px = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LostAndFoundArticle = styled.article`
  display: grid;
  min-width: 30.1rem;
  grid-template-columns: repeat(3, 1fr);

  row-gap: 1.2rem;
  column-gap: 0.8rem;
`;

export const LostAndFoundPost = styled.article`
  width: 9.5rem;
  height: 9.5rem;

  border-radius: 4px;
  background: #d9d9d9;
  background-image: url(${({ $imgSrc }) => $imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FooterWrapper = styled.footer`
  margin-top: 5.6rem;

  display: flex;
  height: 34.9rem;
  padding: 2.8rem 2rem 0 2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const FooterLayout = styled.div`
  display: flex;
  width: 33.5rem;
  height: 32.1rem;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
`;

export const ManGaeSvg = styled(Mangae)`
  width: 10.1rem;
  height: 4.06rem;
  background-color: black; //임시
`;

export const FooterIntroduction = styled.div`
  display: flex;
  height: 24.4rem;
  padding-bottom: 6.4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 8rem;
  flex-shrink: 0;
  align-self: stretch;
`;
