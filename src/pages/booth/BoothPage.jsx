import FloatingHearts from '@/components/main/Heart';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6';

export default function BoothPage() {
  const [likes, setLikes] = useState({});
  // useEffect(() => {
  //   const eventSource = new EventSource("http://your-server-url/sse-endpoint");
  //   sseEvents.onopen = function () {
  //     // 연결 됐을 때
  //     console.log("SSE open success!");
  //   };
  //   sseEvents.onerror = function (error) {
  //     // 에러 났을 때
  //     console.log("SSE error!");
  //     eventSource.close();
  //   };
  //   sseEvents.onmessage = function (event) {
  //     // 메세지 받았을 때
  //     console.log("SSE get messages!");
  //     const newLikes = JSON.parse(event.data);
  //     setLikes((prevLikes) => [...prevLikes, newLikes]);
  //   };
  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  return (
    <>
      <h1>부스 페이지입니다!</h1>
      <FloatingHearts />
    </>
  );
}
