const CLIENT_ID = import.meta.env.VITE_API_KEY;

// 현재 전체 로컬 주소로 설정되어 있음
const EVENTS_REDIRECT_URI = import.meta.env.VITE_EVENTS_REDIRECT_URI_LOCAL;
const LOSTS_REDIRECT_URI = import.meta.env.VITE_LOSTS_REDIRECT_URI_LOCAL;

export const EVENTS_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${EVENTS_REDIRECT_URI}&scope=openid`;
export const LOSTS_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${LOSTS_REDIRECT_URI}&scope=openid`;
