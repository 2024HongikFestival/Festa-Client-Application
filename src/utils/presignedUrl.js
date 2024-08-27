import { presigendAxiosInstance } from '@/api/axios';
import axios from 'axios';

export const getPresignedUrl = async () => {
  try {
    const response = await presigendAxiosInstance.get('/losts/up');
    console.log(response);
    const presignedUrl = response.data.data.url;
    return presignedUrl;
  } catch (err) {
    console.log(err);
  }
};

//Base64 인코딩 값
//-> atob를 통해 이진 데이터로 디코딩(JS에서는 이진 데이터를 1Byte 문자열로 나타냄)
//-> 이를 유니코드값(a:65, b: 66 등등)으로 변경
export const dataURLtoBlob = (dataUrl) => {
  //MIME 타입과 Base64로 인코딩된 실제 데이터 분리
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]); //ASCII to Binary

  let n = bstr.length;
  const u8arr = new Uint8Array(n); //unsigned int 8bit arr

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  //Blob 객체로 만듬(preSignedUrl에 저장할 형식)
  return new Blob([u8arr], { type: mime });
};

export const putPresignedUrl = async (url, imgSrc) => {
  try {
    const blob = dataURLtoBlob(imgSrc);
    await axios.put(url, blob, {
      headers: {
        'Content-Type': blob.type,
      },
    });
    console.log('이미지 업로드 성공');
  } catch (err) {
    console.log(err);
  }
};
