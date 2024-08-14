// 대동제 분실물 (메인)
// url: /lost-and-found

import { LOSTS_KAKAO_AUTH_URL } from '@/auth/OAuth';

const LostAndFoundPage = () => {
  const handleKakaoAuth = () => {
    window.location.href = LOSTS_KAKAO_AUTH_URL;
  };

  return (
    <>
      <div>
        LostAndFoundPage
        {/* 테스트용으로 만들어둔 인증 버튼입니다 */}
        {/* 📢📢 분실물 게시글 생성 성공 시(POST /losts) 에 
        로컬 스토리지에서 kakao_code와 lost_access_token
        삭제해주세요!!!!!! */}
        <button
          style={{
            backgroundColor: '#FADB34',
            color: 'black',
            border: 'none',
            width: '20rem',
            height: '3rem',
          }}
          onClick={handleKakaoAuth}
        >
          카카오 인증 후 게시글 작성하기
        </button>
      </div>
    </>
  );
};

export default LostAndFoundPage;
