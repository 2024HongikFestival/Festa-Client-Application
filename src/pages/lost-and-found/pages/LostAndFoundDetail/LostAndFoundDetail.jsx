// 대동제 분실물 (상세)
// url: /lost-and-found/{post-id}

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LostAndFoundDetail = () => {
  const { lostId } = useParams();
  const [item, setItem] = useState({});

  const getItemApi = async () => {
    try {
      //전체 데이터를 받고 싶다면 params 안 넘겨도 됨 - 필터링 구현 때 로직 구체화하기
      const response = await axios.get(`https://api.2024hongikfestival.com/losts/${lostId}`);
      setItem(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItemApi();
  }, []);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return <div>LostAndFoundDetail</div>;
};

export default LostAndFoundDetail;
