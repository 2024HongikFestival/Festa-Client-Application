import styled from 'styled-components';

export const PhoneNumCard = () => {
  return <Card maxLength={1} type="text"></Card>;
};

const PhoneNumBox = () => {
  return (
    <BoxContainer>
      <PhoneNumCard />
      <PhoneNumCard />
      <PhoneNumCard />
      <Slash />
      <PhoneNumCard />
      <PhoneNumCard />
      <PhoneNumCard />
      <PhoneNumCard />
      <Slash />
      <PhoneNumCard />
      <PhoneNumCard />
      <PhoneNumCard />
      <PhoneNumCard />
    </BoxContainer>
  );
};

export default PhoneNumBox;

const Card = styled.input`
  width: 2rem;
  height: 3.2rem;
  display: flex;
  padding: 0.5rem 0.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.4rem;
  border: 0.1rem solid #cdff3f;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray5};

  &:placeholder-shown {
    border: 0.1rem solid #7b9a27;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: start;
  align-items: center;
`;

const Slash = styled.div`
  width: 0.8rem;
  height: 0.1rem;
  background-color: #7b9a27;
`;
