import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';

export default function PubCard() {
  return (
    <ContentContainer>
      <PubCardContainer>
        <Title>단과대학별 주점</Title>
        <MenuContainer>
          <MenuWrapper index={'1'}>
            <MenuItem>자율전공</MenuItem>
            <MenuItem>경영 / 경제</MenuItem>
            <MenuItem>미대</MenuItem>
            <MenuItem>건축도시</MenuItem>
          </MenuWrapper>

          <MenuWrapper index={'2'}>
            <MenuItem>사범대</MenuItem>
            <MenuItem>문과대</MenuItem>
            <MenuItem>공대</MenuItem>
            <MenuItem>융합</MenuItem>
            <MenuItem>총동아리연합회</MenuItem>
          </MenuWrapper>
        </MenuContainer>
      </PubCardContainer>
    </ContentContainer>
  );
}

const PubCardContainer = styled.div`
  width: 33.5rem;
  height: 61.7rem;
  margin-top: 2.4rem;
  margin-bottom: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.main.headline6}
  text-align: center;
`;

const MenuContainer = styled.div`
  width: 28.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  gap: 1.2rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ index }) => (index === '1' ? '1.6rem' : '1.8rem')};
`;

const MenuItem = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Bold};
  color: ${({ theme }) => theme.colors.gray40};
`;
