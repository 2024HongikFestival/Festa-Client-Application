import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import DropDown from '@/components/lost-and-found/LostAndFoundPage/DropDown/DropDown';
import LostBottomSheet from '@/components/lost-and-found/LostAndFoundPage/LostBottomSheet/LostBottomSheet';
import { ItemModal, LocationModal } from '@/components/lost-and-found/LostAndFoundPage/LostModal/LostModal';
import NewPagination from '@/components/lost-and-found/LostAndFoundPage/NewPagination/NewPagination';
import { axiosInstance } from '@/api/axios';
import * as S from './LostAndFoundPage.styled';

const LostAndFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //모달 관련된 state
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [itemLostId, setItemLostId] = useState(-1);

  useEffect(() => {
    document.body.style.overflow = isBottomSheetOpen || isLocationModalOpen || isItemModalOpen ? 'hidden' : 'auto';
  }, [isBottomSheetOpen, isLocationModalOpen, isItemModalOpen]);

  //드롭다운 관련된 state
  const [selectedDay, setSelectedDay] = useState('');

  //게시글 관련 state
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location]);
  const page = useMemo(() => parseInt(query.get('page')) || 1, [query]);

  const handlePage = useCallback(
    (pageNumber) => {
      navigate(`?page=${pageNumber}`);
      setCurrentPage(pageNumber);
    },
    [navigate]
  );

  const getItemsApi = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/losts', {
        params: { page: page, date: selectedDay },
      });
      setItems(response.data.data.losts);
      setTotalPages(response.data.data.totalPage);
    } catch (error) {
      //'' 값이 아닌 경우 -> 즉 전체 필터링이 아닌 경우에만 alert 띄워줌
      if (selectedDay) {
        alert(t('LostAndFound.FilterError'));
        window.location.reload();
      }
    }
  }, [page, selectedDay, t]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    getItemsApi();
  }, [currentPage]);

  useEffect(() => {
    currentPage === 1 ? getItemsApi() : handlePage(1);
  }, [selectedDay]);

  const handleClickItem = (lostId) => () => {
    setIsItemModalOpen(true);
    setItemLostId(lostId);
  };

  return (
    <>
      <S.Wrapper>
        <S.Main>
          <S.Title>{t('LostAndFound.LostAndFound')}</S.Title>

          <S.ButtonWrapper>
            <S.AddLostItemButton onClick={() => setIsBottomSheetOpen(true)}>
              {t('LostAndFound.ReportLostItems')}
            </S.AddLostItemButton>
            <S.ButtonDetailWrapper>
              <S.ButtonDetailIcon />
              <S.ButtonDetailText>
                <Trans
                  i18nKey="LostAndFound.buttonDetailText"
                  components={{ 1: <StyleSpan />, 2: <span onClick={() => setIsLocationModalOpen(true)} /> }}
                ></Trans>
              </S.ButtonDetailText>
            </S.ButtonDetailWrapper>
          </S.ButtonWrapper>

          <S.LostAndFoundSection>
            <S.LostAndFoundSectionTitle>&nbsp;&nbsp;{t('LostAndFound.FindLostItem')}</S.LostAndFoundSectionTitle>
            <S.LostAndFoundArticleLayout>
              <S.Gap8px>
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
              </S.Gap8px>

              <NewPagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </S.LostAndFoundArticleLayout>
          </S.LostAndFoundSection>
        </S.Main>

        <LostBottomSheet isOpen={isBottomSheetOpen} setIsOpen={setIsBottomSheetOpen} />
        <LocationModal isOpen={isLocationModalOpen} setIsOpen={setIsLocationModalOpen} />
        <ItemModal isOpen={isItemModalOpen} setIsOpen={setIsItemModalOpen} lostId={itemLostId} />
      </S.Wrapper>
    </>
  );
};

export default LostAndFoundPage;

const StyleSpan = styled.span`
  &::after {
    content: '';
  }
  &::before {
    content: '';
    display: inline-block;
    width: 5px;
  }
`;
