// 대동제 분실물 (제보 글 작성 페이지)
// url: /lost-and-found/add
import React from 'react';
import CameraPage from './components/Camera/CameraPage';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './outlet/ProtectedRoute';

const AddLostItem = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <CameraPage />
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default AddLostItem;
