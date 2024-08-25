import { axiosInstance } from '@/api/axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectLosts = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  localStorage.setItem('kakao_code', code);

  const navigate = useNavigate();

  const getLostsToken = async () => {
    try {
      const response = await axiosInstance.post('/losts/token', {
        code: localStorage.getItem('kakao_code'),
      });
      console.log(response.data.message);
      // 분실물 토큰 저장
      localStorage.setItem('lost_access_token', response.data.data.accessToken);
      // 성공 시 분실물 게시글 작성 페이지로 이동
      navigate('/lost-and-found/add');
    } catch (error) {
      // 세부 에러 처리 필요 시 추가
      if (error.response.status === 400) {
        console.log('요청 양식 불량 및 차단된 사용자');
      } else if (error.response.status === 401) {
        console.log('일반 사용자 인증 실패');
      } else {
        console.log('알 수 없는 오류');
      }
      navigate('/lost-and-found');
    }
  };
  useEffect(() => {
    getLostsToken();
  }, []);
};

export default RedirectLosts;
