import warningIcon from '@/assets/svgs/error.svg';
import styled from 'styled-components';

export const Main = styled.main`
  width: 39.3rem;
  min-height: 49.7rem; //852 - 55
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  width: 30rem;
  height: auto;

  margin-bottom: 20px;
`;

export const AddLostItemButton = styled.button`
  width: 29.5rem;
  height: 4.7rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 9px;
`;

export const ButtonDetailWrapper = styled.div`
  width: 30rem;
  display: inline-flex;
  align-items: flex-start;
  gap: 4px;
`;
export const ButtonDetailIcon = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  background-image: url(${warningIcon});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ButtonDetailText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #a2254a;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 116.667% */
`;

//나중에 컴포넌트화 할 예정
export const FilterWrapper = styled.div``;

export const LostAndFoundSection = styled.section`
  display: flex;
  width: 37.6rem;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LostAndFoundPost = styled.article`
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
  background: #d9d9d9;
`;

//따로 뺄 예정
export const Pagenation = styled.div`
  display: inline-flex;
  padding: 3px 0px;
  align-items: center;
  gap: 15px;
`;
