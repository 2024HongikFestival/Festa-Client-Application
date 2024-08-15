import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Pagination.styled';
/*
totalItems: 총 게시물 수 (보여 줄 데이터의 총 개수)
itemCountPerPage: 페이지마다 보여줄 게시물의 개수
pageToShow: 한번에 보여줄 페이지의 개수 
currentPage: 현재 페이지
*/
const Pagination = ({ totalItems, itemCountPerPage, pageToShow, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [startPage, setStartPage] = useState(1);
  const noPrev = startPage === 1;
  const noNext = startPage + pageToShow - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === startPage + pageToShow) {
      setStartPage((startPage) => startPage + pageToShow);
    } else if (currentPage < startPage) {
      setStartPage((startPage) => startPage - pageToShow);
    }
  }, [currentPage, pageToShow, startPage]);

  return (
    <S.PaginationWrapper>
      <S.PaginationUl>
        <S.PaginationEdgeLi $invisible={noPrev}>
          <Link to={`?page=${startPage - 1}`}>이전</Link>
        </S.PaginationEdgeLi>
        {[...Array(pageToShow)].map((none, i) => (
          <>
            {startPage + i <= totalPages && (
              <S.PaginationItemLi key={i}>
                <S.ItemLink to={`?page=${startPage + i}`} $active={currentPage === startPage + i}>
                  {startPage + i}
                </S.ItemLink>
              </S.PaginationItemLi>
            )}
          </>
        ))}

        <S.PaginationEdgeLi $invisible={noNext}>
          <Link to={`?page=${startPage + pageToShow}`}>다음</Link>
        </S.PaginationEdgeLi>
      </S.PaginationUl>
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemCountPerPage: PropTypes.number.isRequired,
  pageToShow: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
