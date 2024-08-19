import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// height는 자식 요소가 결정합니다.

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 33.5rem;
  border-radius: 1.2rem;
  box-shadow: 0px 0px 0.8rem 0.8rem rgba(0, 0, 0, 0.12);
`;