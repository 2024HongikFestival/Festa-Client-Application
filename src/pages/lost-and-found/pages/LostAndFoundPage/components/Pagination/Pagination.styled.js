import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  color: #888;
  font-size: 1.4rem;

  a {
    height: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const PaginationUl = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  float: left; //추후 없애보기
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationEdgeLi = styled(Li)`
  ${({ $invisible }) =>
    $invisible &&
    css`
      visibility: hidden;
    `};

  position: relative;
  cursor: pointer;
  margin: 0 1rem;

  // 본인이 첫 번째 자식일 경우
  &:first-child {
    text-align: right; //추후 없애보기
    &::before {
      position: absolute;
      font-size: 2rem;
      padding: 0 0.7rem 0;
      content: '<';
      left: 0;
    }
  }
  &:last-child::after {
    position: absolute;
    font-size: 2rem;
    padding: 0 0.7rem 0;
    content: '>';
    right: 0;
  }

  a {
    width: 5rem;
    display: block;
    z-index: 10;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PaginationItemLi = styled(Li)``;

export const ItemLink = styled(Link)`
  margin: 0 0.5rem;
  cursor: pointer;
  width: 2.5rem;
  border-radius: 3rem;
  border: solid 1px rgba(0, 0, 0, 0);
  text-align: center;

  &:hover {
    border: solid 1px #aaa;
  }

  ${({ $active }) =>
    $active &&
    css`
      font-weight: 700;
      background: #2f5d62;
      color: white;
    `};
`;
