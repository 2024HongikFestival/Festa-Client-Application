// 대동제 분실물 (메인)
// url: /lost-and-found

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
  const page = parseInt(query.get('page')) || 1; // 쿼리파라미터 미존재 시 기본적으로 1페이지.

  useEffect(() => {
    setCurrentPage(page);
    //API 요청으로 items(데이터), totalItems(총 데이터 개수) 가져오기
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
          {items.map(
            (none, idx) =>
              idx + 1 >= currentPage * itemCountPerPage &&
              idx + 1 <= (currentPage + 1) * itemCountPerPage && <S.LostAndFoundPost key={idx} />
          )}
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
