import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function PageTitle({ title }) {
  return (
    <Title>
      {title.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </Title>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = styled.div`
  width: 33.5rem;
  height: auto;
  margin-top: 2.4rem;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => props.theme.fontStyles.main.headline2};
`;
