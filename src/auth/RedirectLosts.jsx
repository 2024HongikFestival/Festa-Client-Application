import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/api/axios';

const RedirectLosts = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  localStorage.setItem('kakao_code', code);

  const navigate = useNavigate();

  const getLostsToken = async () => {
    try {
      const response = await axiosInstance.post('/losts/token', {
        code: localStorage.getItem('kakao_code'),
      });
      localStorage.setItem('lost_access_token', response.data.data.accessToken);
      navigate('/lost-and-found/add');
    } catch (error) {
      if (error.response.status === 400) {
        alert('⚠️ 부적절한 게시판 활용으로 인해 게시판 이용이 제한되었습니다');
      } else if (error.response.status === 401) {
        //console.log('일반 사용자 인증 실패');
      } else {
        //console.log(error);
      }
      navigate('/lost-and-found');
    }
  };
  useEffect(() => {
    getLostsToken();
  }, []);
};

export default RedirectLosts;
