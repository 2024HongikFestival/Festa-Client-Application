// 대동제 플리마켓
// url: /fleamarket

import React from 'react';
import PageTitle from '@/components/common/PageTitle';
import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';

const Fleamarket = () => {
  return (
    <Container>
      <PageTitle title="플리마켓" />
      <ContentContainer>
        <MapTitle>플리마켓 위치</MapTitle>
        <MapImage src="src/assets/webps/booth/mapExample.webp" />
      </ContentContainer>
    </Container>
  );
};

export default Fleamarket;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MapTitle = styled.div`
  width: 33.5rem;
  height: 3.2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const MapImage = styled.img`
  width: 33.5rem;
  height: 25.2rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray30};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray30};
`;
