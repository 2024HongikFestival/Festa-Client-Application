import styled from 'styled-components';

const GaehwaCard = () => {
  return (
    <GaehwaCardLayout>
      <Name>곽도현</Name>
      <Department>법학부 21</Department>
      <Role>학생회장</Role>
    </GaehwaCardLayout>
  );
};

export default GaehwaCard;

const GaehwaCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h5`
  ${(props) => props.theme.fontStyles.flame.Headline5};
  color: ${(props) => props.theme.colors.white};
`;

const Department = styled.div`
  margin-top: 0.8rem;
  width: 10.9rem;
  height: 2.9rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray50};
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray50};
`;

const Role = styled.p`
  margin-top: 0.8rem;
  ${(props) => props.theme.fontStyles.captionMed};
  color: ${(props) => props.theme.colors.gray50};
`;
