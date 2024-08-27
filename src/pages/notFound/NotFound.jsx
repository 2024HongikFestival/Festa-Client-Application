import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const onClickMain = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>
        <h1>404</h1>
        <p>Page Not Found!</p>
      </Title>
      <Text>
        <TopText>
          <p>죄송합니다</p>
          <p>현재 원하시는 페이지를 찾을 수 없습니다</p>
        </TopText>
        <BottomText>
          <p>
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            주소의 변경 삭제로 인해 사용하실 수 없습니다
          </p>
        </BottomText>
      </Text>
      <Button onClick={onClickMain}>
        <p>메인으로</p>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 18.8rem;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.2rem;

  h1 {
    text-align: center;
    font-family: Pretendard;
    font-size: 12rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.12px;
    color: ${(props) => props.theme.colors.gray50};
  }

  p {
    ${(props) => props.theme.fontStyles.basic.subHeadMed};
    color: ${(props) => props.theme.colors.gray60};
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6.4rem;
`;

const TopText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${(props) => props.theme.fontStyles.basic.headline5};
    color: ${(props) => props.theme.colors.black};
  }
`;

const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${(props) => props.theme.fontStyles.basic.captionMed};
    color: ${(props) => props.theme.colors.gray40};
  }
`;

const Button = styled.button`
  width: 12rem;
  height: 4.8rem;
  display: flex;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 5rem;
  border: 0.2rem solid ${(props) => props.theme.colors.gray50};
  background-color: ${(props) => props.theme.colors.gray5};

  p {
    ${(props) => props.theme.fontStyles.basic.body1Bold};
    color: ${(props) => props.theme.colors.gray70};
    max-width: 5.6rem;
  }
`;
