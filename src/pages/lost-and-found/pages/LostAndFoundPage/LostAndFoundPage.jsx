// 대동제 분실물 (메인)
// url: /lost-and-found

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as S from './LostAndFoundPage.styled';
import LostBottomSheet from './components/LostBottomSheet/LostBottomSheet';
import Pagination from './components/Pagination/Pagination';

// [...Array(totalItems)] -> totalItems의 length를 가진 빈 배열
// Array(totalItems) -> totalItems의 length를 가진 undefined가 채워진 배열
const LostAndFoundPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState([]);
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

  const handleClickItem = (lostId) => () => {
    navigate(`${lostId}`);
  };

  return (
    <S.Wrapper>
      <Header></Header>
      <S.Main>
        <S.Title>분실물</S.Title>
        <S.ButtonWrapper>
          <S.AddLostItemButton onClick={() => setIsModalOpen(true)}>분실물 찾아주기 ✋🏻</S.AddLostItemButton>
          <S.ButtonDetailWrapper>
            <S.ButtonDetailIcon />
            <S.ButtonDetailText>
              전자기기, 카드, 지갑 등은 제보 후&nbsp;
              <span>
                <span>분실물 센터</span>에 보관
              </span>
              해 주세요
            </S.ButtonDetailText>
          </S.ButtonDetailWrapper>
        </S.ButtonWrapper>
        <S.LostAndFoundSection>
          <S.LostAndFoundSectionTitle>분실물 찾아가기 🧸</S.LostAndFoundSectionTitle>
          <S.LostAndFoundArticleLayout>
            {/*<DropDown></DropDown> */}
            <S.LostAndFoundArticle>
              {items.length > 0 &&
                items.map((item, idx) => {
                  return (
                    //현재 페이지에 렌더링 되어야 하는 item인지 판단하는 로직
                    idx >= (currentPage - 1) * itemCountPerPage &&
                    idx < currentPage * itemCountPerPage && (
                      <S.LostAndFoundPost onClick={handleClickItem(item.lostId)} key={`item_${idx}`} />
                    )
                  );
                })}
            </S.LostAndFoundArticle>
            <Pagination
              totalItems={totalItems}
              itemCountPerPage={itemCountPerPage}
              pageToShow={5}
              currentPage={currentPage}
            />
          </S.LostAndFoundArticleLayout>
        </S.LostAndFoundSection>
      </S.Main>
      <S.FooterWrapper>
        <S.FooterLayout>
          <S.ManGaeSvg />
          <S.FooterIntroduction></S.FooterIntroduction>
        </S.FooterLayout>
      </S.FooterWrapper>
      <LostBottomSheet isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </S.Wrapper>
  );
};

export default LostAndFoundPage;
