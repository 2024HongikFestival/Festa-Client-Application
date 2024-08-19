import React from 'react';
import styled from 'styled-components';

PageTitle.propTypes = {
  title: String,
};

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  width: 33.5rem;
  height: 4.8rem;
  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fontStyles.main.headline2};
`;
