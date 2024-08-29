// 대동제 분실물 (제보 글 작성 페이지)
// url: /lost-and-found/add
import CameraPage from '@/components/lost-and-found/AddLostItem/Camera/CameraPage';
import React, { useState } from 'react';
import Register from '../../../../components/lost-and-found/AddLostItem/Register/Register';

const AddLostItem = () => {
  //url 형식의 이미지
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <div>
      {capturedImage ? <Register imgSrc={capturedImage} /> : <CameraPage setCapturedImage={setCapturedImage} />}
    </div>
  );
};

export default AddLostItem;
