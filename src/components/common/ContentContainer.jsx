import styled from 'styled-components';
import PropTypes from 'prop-types';

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 33.5rem;
  border-radius: 1.6rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
`;
