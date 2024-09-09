import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useEvent } from '@/context/AuthProvider';

// 분실물 페이지 접근 권한
const LostProtectedRoute = () => {
  const { getLostAccessToken } = useAuth();
  const hasLostToken = getLostAccessToken();

  if (!hasLostToken) {
    return <Navigate to="/lost-and-found" replace />;
  }

  return <Outlet />;
};

// 이벤트 페이지 접근 권한
const EventProtectedRoute = () => {
  const { getEventAccessToken } = useEvent();
  const hasEventToken = getEventAccessToken();

  if (!hasEventToken) {
    return <Navigate to="/event" replace />;
  }

  return <Outlet />;
};

export { LostProtectedRoute, EventProtectedRoute };
