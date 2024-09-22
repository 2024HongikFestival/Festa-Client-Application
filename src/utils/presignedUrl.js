import { presigendAxiosInstance } from '@/api/axios';
import axios from 'axios';

export const getPresignedUrl = async () => {
  try {
    const response = await presigendAxiosInstance.get('/losts/up');
    const presignedUrl = response.data.data.url;
    return presignedUrl;
  } catch (err) {
    console.log(err);
  }
};

export const dataURLtoBlob = (dataUrl) => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
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
  } catch (err) {
    console.log(err);
  }
};
