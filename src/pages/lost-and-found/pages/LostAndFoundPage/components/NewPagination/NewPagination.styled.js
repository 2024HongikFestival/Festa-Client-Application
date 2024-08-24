import arrow_back from '@/assets/svgs/lost/arrow_back.svg?react';
import arrow_front from '@/assets/svgs/lost/arrow_front.svg?react';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const LeftPageButton = styled(arrow_back)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const RightPageButton = styled(arrow_front)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const CurrentPageNumber = styled.div`
  display: flex;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.8rem 1.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray10};

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.main.headline6};
`;

export const TotalPagesNumber = styled.span`
  color: ${({ theme }) => theme.colors.gray30};
  ${({ theme }) => theme.fontStyles.basic.body1Med};
  text-align: center;
`;
