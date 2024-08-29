import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 18.8rem;
  padding-bottom: 18.8rem;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.2rem;

  h1 {
    text-align: center;
    font-family: Pretendard;
    font-size: 12rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.12px;
    color: ${(props) => props.theme.colors.gray50};
  }

  p {
    ${(props) => props.theme.fontStyles.basic.subHeadMed};
    color: ${(props) => props.theme.colors.gray60};
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6.4rem;
`;

export const TopText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${(props) => props.theme.fontStyles.basic.headline5};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${(props) => props.theme.fontStyles.basic.captionMed};
    color: ${(props) => props.theme.colors.gray40};
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 4.8rem;
  display: flex;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 5rem;
  border: 0.2rem solid ${(props) => props.theme.colors.gray40};
  background-color: ${(props) => props.theme.colors.gray90};

  p {
    ${(props) => props.theme.fontStyles.basic.body1Bold};
    color: ${(props) => props.theme.colors.white};
    max-width: 5.6rem;
  }
`;
