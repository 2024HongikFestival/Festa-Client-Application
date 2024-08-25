// 대동제 분실물 (제보 글 작성 페이지)
// url: /lost-and-found/add
import React, { useState } from 'react';
import CameraPage from './components/Camera/CameraPage';

const AddLostItem = () => {
  //url 형식의 이미지
  const [capturedImage, setCapturedImage] = useState(null);

  return <>{capturedImage ? <div>등록페이지</div> : <CameraPage setCapturedImage={setCapturedImage} />}</>;
};

export default AddLostItem;
