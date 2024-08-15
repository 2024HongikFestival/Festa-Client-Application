// 대동제 분실물 (메인)
// url: /lost-and-found

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './LostAndFoundPage.styled';
import Pagination from './components/Pagination/Pagination';

const LostAndFoundPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [data, setData] = useState({});

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get('page') || 1; // api 요청 0 페이지부터 온다던거 같은데 확인해보기

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

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
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
          <S.LostAndFoundPost />
        </S.LostAndFoundSection>
        <S.Pagenation>
          <Pagination
            totalItems={totalItems}
            itemCountPerPage={10}
            pageToShow={5}
            currentPage={page & (parseInt(page) > 0) ? parseInt(page) : 1}
          />
        </S.Pagenation>
      </S.Main>
    </>
  );
};

export default LostAndFoundPage;
