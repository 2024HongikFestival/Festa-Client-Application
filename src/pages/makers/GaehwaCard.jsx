import styled from 'styled-components';
import PropTypes from 'prop-types';

const GaehwaCard = ({ name, department, role }) => {
  return (
    <GaehwaCardLayout>
      <Name>{name}</Name>
      <Department>{department}</Department>
      <Role>{role}</Role>
    </GaehwaCardLayout>
  );
};

export default GaehwaCard;

GaehwaCard.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

const GaehwaCardLayout = styled.div`
  width: 10.9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h5`
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.white};
`;

const Department = styled.div`
  margin-top: 0.8rem;
  padding: 0.3rem 0.7rem;
  width: auto;
  text-align: center;
  white-space: nowrap;
  border: 0.1rem solid ${(props) => props.theme.colors.gray50};
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray50};
`;

const Role = styled.p`
  margin-top: 0.8rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray50};
`;
