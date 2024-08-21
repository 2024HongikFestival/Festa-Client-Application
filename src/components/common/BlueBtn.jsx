import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function BlueBtn({ text }) {
  return <Btn>{text}</Btn>;
}

BlueBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

const Btn = styled.button`
  width: 33.5rem;
  height: 6.4rem;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.main.headline5};
  border-radius: 1.2rem;
  color: white;
`;
