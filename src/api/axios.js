import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 기본 axios 인스턴스 (baseURL만 설정)
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// presignedUrl을 받아올 때 사용하는 인스턴스
export const presigendAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

presigendAxiosInstance.interceptors.request.use((config) => {
  const lost_access_token = localStorage.getItem('lost_access_token');
  if (lost_access_token) {
    config.headers.Authorization = `Bearer ${lost_access_token}`;
  } else {
    console.log('토큰 없음');
  }
  return config;
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
    const navigate = useNavigate();
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
      alert('인증되지 않은 사용자입니다. 로그인 후 사용가능합니다.');
      window.location.href = '/admin';
      navigate(0);
    }
    return Promise.reject(error);
  }
);

// 일반 사용자 전용 axios 인스턴스: USER access token이 필요한 경우 사용
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
