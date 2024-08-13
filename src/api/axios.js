import axios from 'axios';

// 기본 axios 인스턴스 (baseURL만 설정)
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// 어드민 전용 axios 인스턴스
export const adminAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

adminAxiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      config.headers.accessToken = null;
      return config;
    }

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

adminAxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    // 토큰 리프레시 기능이 없기 때문에 별도에 refresh 로직은 없음
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
      alert('인증되지 않은 사용자입니다. 로그인 후 사용가능합니다.');
      // 어드민 홈으로 이동 (확정 url 나오면 코드 추가 필요)
    }
    return Promise.reject(error);
  }
);

// 일반 사용자 전용 axios 인스턴스
export const userAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

userAxiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      config.headers.accessToken = null;
      return config;
    }

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);