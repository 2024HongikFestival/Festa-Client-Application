import React, { useState, lazy, Suspense } from 'react';
const Register = lazy(() => import('@/components/lost-and-found/AddLostItem/Register/Register'));
const CameraPage = lazy(() => import('@/components/lost-and-found/AddLostItem/Camera/CameraPage'));

const AddLostItem = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <Suspense fallback={<></>}>
      <div>
        {capturedImage ? <Register imgSrc={capturedImage} /> : <CameraPage setCapturedImage={setCapturedImage} />}
      </div>
    </Suspense>
  );
};

export default AddLostItem;
