import dropDownV from '@/assets/svgs/lost/dropDownV.svg?react';
import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  align-self: flex-end;
`;

export const DropDownToggle = styled.button`
  position: relative;
  width: 10.2rem;
  height: 3.2rem;
  z-index: 1;

  display: inline-flex;
  padding: 0.4rem 0.8rem 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  white-space: nowrap;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 1.6rem; //3.2 - 1.6
  z-index: 0;

  left: 0;

  display: flex;
  width: 10.2rem;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 0px 0px 12px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const DropDownItem = styled.div`
  &:first-child {
    height: 4.5rem; //2.9 + 1.6
    padding-top: 2.2rem;
  }

  height: 2.9rem;

  display: flex;
  padding: 0.4rem 2.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.gray100 : theme.colors.gray30)};

  ${({ theme }) => theme.fontStyles.basic.body2Med};
  white-space: nowrap;

  background: ${({ theme }) => theme.colors.white};

  &:last-child {
    border-radius: 0px 0px 12px 12px;
    height: 3.3rem; //2.9 + 0.4
    padding-bottom: 0.4rem;
  }
`;

export const DropDownIcon = styled(dropDownV)`
  width: 2.4rem;
  height: 2.4rem;
`;
export const ItemLine = styled.div`
  width: 8.6rem;
  height: 0.1rem;
  background: #dde1e8;
`;
