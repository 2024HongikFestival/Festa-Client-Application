import styled from 'styled-components';
import PropTypes from 'prop-types';

const GaehwaCard = ({ name, department, role }) => {
  return (
    <GaehwaCardLayout>
      <Name>{name}</Name>
      <Department name={name}>
        <span>{department}</span>
      </Department>
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
  padding: ${(props) => (props.name === '맹지수' ? '0.55rem 0.8rem' : '0.4rem 0.8rem')};

  width: auto;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.gray50} inset;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.gray50};

  span {
    ${(props) =>
      props.name === '맹지수' ? props.theme.fontStyles.basic.captionMed : props.theme.fontStyles.basic.body2Med};
  }
`;

const Role = styled.p`
  margin-top: 0.8rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray50};
`;
