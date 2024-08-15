// 대동제 분실물 (메인)
// url: /lost-and-found

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './LostAndFoundPage.styled';
import Pagination from './components/Pagination/Pagination';

const LostAndFoundPage = () => {
  const [totalItems, setTotalItems] = useState(100);
  const [items, setItems] = useState([...Array(totalItems)]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemCountPerPage = 10;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1; //  string -> int 로 변환

  const getItemsApi = async () => {
    try {
      //전체 데이터를 받고 싶다면 params 안 넘겨도 됨 - 필터링 구현 때 로직 구체화하기
      const response = await axios.get('https://api.2024hongikfestival.com/losts', { params: { date: '2024-08-14' } });
      setItems(response.data.data);
      setTotalItems(response.data.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItemsApi();
  }, []);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  console.log('currentPage:', currentPage);

  return (
    <>
      <S.Header></S.Header>
      <S.Main>
        <S.Title>분실물</S.Title>
        <S.ButtonWrapper>
          <S.AddLostItemButton>분실물을 주웠어요!</S.AddLostItemButton>
          <S.ButtonDetailWrapper>
            <S.ButtonDetailIcon />
            <S.ButtonDetailText>전자기기, 카드, 지갑 등은 제보 후 총학 부스에 보관해주세요</S.ButtonDetailText>
          </S.ButtonDetailWrapper>
        </S.ButtonWrapper>
        <S.LostAndFoundSection>
          {items.map((none, idx) => {
            console.log(idx);

            return (
              //현재 페이지에 렌더링 되어야 하는 item인지 판단하는 로직
              idx >= (currentPage - 1) * itemCountPerPage &&
              idx < currentPage * itemCountPerPage && <S.LostAndFoundPost key={`item_${idx}`} />
            );
          })}
        </S.LostAndFoundSection>

        <S.Pagenation>
          <Pagination
            totalItems={totalItems}
            itemCountPerPage={itemCountPerPage}
            pageToShow={5}
            currentPage={currentPage}
          />
        </S.Pagenation>
      </S.Main>
    </>
  );
};

export default LostAndFoundPage;
