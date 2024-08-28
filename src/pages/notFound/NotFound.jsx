import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const onClickMain = () => {
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.Title>
        <h1>404</h1>
        <p>Page Not Found!</p>
      </S.Title>
      <S.Text>
        <S.TopText>
          <p>죄송합니다</p>
          <p>현재 원하시는 페이지를 찾을 수 없습니다</p>
        </S.TopText>
        <S.BottomText>
          <p>
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            주소의 변경 삭제로 인해 사용하실 수 없습니다
          </p>
        </S.BottomText>
      </S.Text>
      <S.Button onClick={onClickMain}>
        <p>메인으로</p>
      </S.Button>
    </S.Wrapper>
  );
}
