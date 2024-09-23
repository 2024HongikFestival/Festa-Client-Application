import React, { useState } from 'react';
import CameraPage from '@/components/lost-and-found/AddLostItem/Camera/CameraPage';
import Register from '@/components/lost-and-found/AddLostItem/Register/Register';

const AddLostItem = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <div>
      {capturedImage ? <Register imgSrc={capturedImage} /> : <CameraPage setCapturedImage={setCapturedImage} />}
    </div>
  );
};

export default AddLostItem;
