// 대동제 분실물 (메인)
// url: /lost-and-found

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './LostAndFoundPage.styled';

import DropDown from '@/components/lost-and-found/LostAndFoundPage/DropDown/DropDown';
import LostBottomSheet from '@/components/lost-and-found/LostAndFoundPage/LostBottomSheet/LostBottomSheet';
import { ItemModal, LocationModal } from '@/components/lost-and-found/LostAndFoundPage/LostModal/LostModal';
import NewPagination from '@/components/lost-and-found/LostAndFoundPage/NewPagination/NewPagination';

// [...Array(totalItems)] -> totalItems의 length를 가진 빈 배열
// Array(totalItems) -> totalItems의 length를 가진 undefined가 채워진 배열
const LostAndFoundPage = () => {
  const navigate = useNavigate();
  //모달 관련된 state
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [itemLostId, setItemLostId] = useState(-1);

  useEffect(() => {
    if (isBottomSheetOpen || isLocationModalOpen || isItemModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isBottomSheetOpen, isLocationModalOpen, isItemModalOpen]);

  //드롭다운 관련된 state
  const [selectedDay, setSelectedDay] = useState('');

  //게시글 관련 state
  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemCountPerPage = 10;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1; //  string -> int 로 변환

  const handlePage = (pageNumber) => {
    navigate(`?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const getItemsApi = async () => {
    try {
      const response = await axios.get('https://api.2024hongikfestival.com/losts', {
        params: { page: page, date: selectedDay }, //date 비어있으면 losts?page=1&date= 형식으로 보내짐 -> 전체 조회
      });
      setItems(response.data.data.losts);
      setTotalItems(response.data.data.losts.length);
      setTotalPages(response.data.data.totalPage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    getItemsApi();
  }, [currentPage]);

  //드롭다운(필터링) 바뀌면 기본적으로 1페이지부터
  useEffect(() => {
    currentPage === 1 ? getItemsApi() : handlePage(1);
  }, [selectedDay]);

  const handleClickItem = (lostId) => () => {
    //navigate(`${lostId}`);
    setIsItemModalOpen(true);
    setItemLostId(lostId);
  };

  return (
    <>
      <S.Wrapper>
        <S.Main>
          <S.Title>분실물</S.Title>

          <S.ButtonWrapper>
            <S.AddLostItemButton onClick={() => setIsBottomSheetOpen(true)}>분실물 찾아주기 ✋🏻</S.AddLostItemButton>
            <S.ButtonDetailWrapper>
              <S.ButtonDetailIcon />
              <S.ButtonDetailText>
                전자기기, 카드, 지갑 등은 제보 후&nbsp;
                <span>
                  <span onClick={() => setIsLocationModalOpen(true)}>분실물 센터</span>에 보관
                </span>
                해 주세요
              </S.ButtonDetailText>
            </S.ButtonDetailWrapper>
          </S.ButtonWrapper>

          <S.LostAndFoundSection>
            <S.LostAndFoundSectionTitle>분실물 찾아가기 🧸</S.LostAndFoundSectionTitle>
            <S.LostAndFoundArticleLayout>
              <DropDown setSelectedDay={setSelectedDay} />
              <S.LostAndFoundArticle>
                {items.length > 0 &&
                  items.map((item, idx) => {
                    return (
                      <S.LostAndFoundPost
                        onClick={handleClickItem(item.lostId)}
                        key={`item_${idx}`}
                        $imgSrc={item.imageUrl}
                      />
                    );
                  })}
              </S.LostAndFoundArticle>
              <NewPagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </S.LostAndFoundArticleLayout>
          </S.LostAndFoundSection>
        </S.Main>

        {/*
          <S.FooterWrapper>
            <S.FooterLayout>
              <S.ManGaeSvg />
              <S.FooterIntroduction></S.FooterIntroduction>
            </S.FooterLayout>
          </S.FooterWrapper>
        */}

        <LostBottomSheet isOpen={isBottomSheetOpen} setIsOpen={setIsBottomSheetOpen} />
        <LocationModal isOpen={isLocationModalOpen} setIsOpen={setIsLocationModalOpen} />
        <ItemModal isOpen={isItemModalOpen} setIsOpen={setIsItemModalOpen} lostId={itemLostId} />
      </S.Wrapper>
    </>
  );
};

export default LostAndFoundPage;
