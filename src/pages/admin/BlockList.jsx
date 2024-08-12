import styled from 'styled-components';

const BlockList = () => {
  return (
    <ListContainer>
      <Container>
        <TitleSection>
          <SubTitle>작성자</SubTitle>
          <SubTitle>차단 일시</SubTitle>
        </TitleSection>
        <List>
          <UserId>000001</UserId>
          <BlockDate>09.25 16:30:30</BlockDate>
          <BlockBtn>차단 해제</BlockBtn>
        </List>
      </Container>
    </ListContainer>
  );
};
export default BlockList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;
const SubTitle = styled.span`
  width: 5rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.body2Bold};
  font-size: 0.875rem;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.gray80};
`;

const UserId = styled.span`
  width: 5rem;
  color: ${(props) => props.theme.colors.gray30};
  font-size: 0.875rem;
  text-decoration: line-through;
`;

const BlockDate = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 0.875rem;
  width: 8.5rem;
`;
const BlockBtn = styled.button`
  ${(props) => props.theme.fontStyles.captionBold};
  color: ${(props) => props.theme.colors.gray70};
  font-size: 0.75rem;
  text-decoration: underline;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  border-bottom: 0.063rem solid ${(props) => props.theme.colors.gray10};
`;
