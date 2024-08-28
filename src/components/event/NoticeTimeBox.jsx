import styled from 'styled-components';

const NoticeTimeBox = () => {
  return (
    <Container>
      <NoticeTime>마감까지 남은 시간</NoticeTime>
      <NoticeTime>00:00:00</NoticeTime>
    </Container>
  );
};

export default NoticeTimeBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  height: 13.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffff24 0%, #a9ff1e 100%);
`;

const NoticeTime = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
`;
