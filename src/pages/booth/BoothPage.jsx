// import FloatingHearts from '@/components/main/Heart';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { axiosInstance } from '@/api/axios';
import styled from 'styled-components';

export default function BoothPage() {
  const [likes, setLikes] = useState({});
  const [computerLikes, setComputerLikes] = useState(0);
  const [businessLikes, setBuisinessLikes] = useState(0);
  const [electronicLikes, setElectronicLikes] = useState(0);
  const [industrialLikes, setIndustrialLikes] = useState(0);
  const [mathLikes, setMathLikes] = useState(0);

  const sseUrl = import.meta.env.VITE_SSE_URL;

  const onClickLikes = async (id) => {
    try {
      console.log(id, '좋아요 +1!');
      const response = await axiosInstance.post(`/booths/${id}/like`);
      if (response.status === 200) {
        console.log('좋아요수 +1 성공!');
      }
    } catch (e) {
      console.log('좋아요수 반영 실패', e);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(sseUrl);
    eventSource.onopen = function () {
      // 연결 됐을 때
      console.log('SSE open success!');
    };
    eventSource.onerror = function (error) {
      // 에러 났을 때
      console.log('SSE error!');
      console.log(error);
      eventSource.close();
    };
    eventSource.onmessage = function (event) {
      // 메세지 받았을 때

      console.log('SSE get message:', event.data);
      const data = JSON.parse(event.data);
      setComputerLikes(data[0].totalLike);
      setBuisinessLikes(data[1].totalLike);
      setMathLikes(data[2].totalLike);
      setElectronicLikes(data[3].totalLike);
      setIndustrialLikes(data[4].totalLike);
      console.log(data);
      console.log('Event received at:', new Date().toISOString());
      // const newLikes = JSON.parse(event.data);
      // setLikes((prevLikes) => [...prevLikes, newLikes]);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PageName>Booth Page</PageName>
        <Btn onClick={() => onClickLikes(1)}>컴퓨터공학과 주점 좋아요 ❤️ {computerLikes}</Btn>
        <Btn onClick={() => onClickLikes(2)}>경영학과 주점 좋아요 ❤️ {businessLikes}</Btn>
        <Btn onClick={() => onClickLikes(3)}>수학교육과 주점 좋아요 ❤️ {mathLikes}</Btn>
        <Btn onClick={() => onClickLikes(4)}>전자전기공학과 주점 좋아요 ❤️ {electronicLikes}</Btn>
        <Btn onClick={() => onClickLikes(5)}>산업공학과 주점 좋아요 ❤️ {industrialLikes}</Btn>
      </div>
    </>
  );
}

const PageName = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const Btn = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 25rem;
  height: 3rem;
  background-color: lightpink;
  border-radius: 1rem;
  border: solid 0.1rem gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
