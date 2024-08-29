import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

export const Image = styled.img`
  width: 17.3rem;
  height: 10.6rem;
  margin-top: 4.8rem;
  margin-bottom: 3.2rem;
`;

export const FormContainer = styled.div`
  width: 33.5rem;
  border-radius: 1rem;
  padding: 2.4rem 2.4rem 7.7rem 2.4rem;
  background: ${(props) => props.theme.colors.gray100};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-bottom: 3.2rem;
`;

export const ItemSection = styled(Section)`
  gap: 1.6rem;
`;

export const SectionText = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.gray10};
  align-self: stretch;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.6rem;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  gap: 1.2rem;
`;

export const ItemCard = styled.button`
  width: 6rem;
  height: 7.2rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 0.1rem solid #7b9a27;

  img {
    display: none;
  }

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 1px solid var(--on, #cdff3f);
    background: rgba(205, 255, 63, 0.4);

    img {
      display: flex;
      width: 2rem;
      height: 1.42rem;
    }
  }
`;

export const ItemName = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed}
  color: ${(props) => props.theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 0.1rem solid #cdff3f;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fontStyles.basic.body2Reg}
  padding: 1.2rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }

  &:placeholder-shown {
    border: 0.1rem solid #7b9a27;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 12.9rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 0.1rem solid #cdff3f;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fontStyles.basic.body2Reg}
  padding: 1.2rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
  &:placeholder-shown {
    border: 0.1rem solid #7b9a27;
  }
`;

export const TextCount = styled.p`
  width: 100%;
  text-align: right;
  color: ${(props) => props.theme.colors.gray50};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EnterButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #feff24 0%, #cdff3f 100%);
  cursor: pointer;

  p {
    ${(props) => props.theme.fontStyles.basic.headline5}
    color: ${(props) => props.theme.colors.flameBackgroundColor};
    text-align: center;
  }
`;

export const DisableButton = styled(EnterButton)`
  background: ${(props) => props.theme.colors.gray60};
  color: ${(props) => props.theme.colors.gray80};
  cursor: not-allowed;

  p {
    ${(props) => props.theme.fontStyles.basic.headline5}
    color: ${(props) => props.theme.colors.gray80};
    text-align: center;
  }
`;

// 전화번호 입력 관련
export const PhoneContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: start;
  align-items: center;
`;

export const Dash = styled.div`
  width: 0.8rem;
  height: 0.1rem;
  background: var(--off, #7b9a27);
`;
