import React from 'react';
import * as S from './DropDown.styled';

//바뀔 일 없으니 하드코딩
const DropDown = () => {
  return (
    <S.DropDownContainer>
      <S.DropDownToggle>
        전체 기간
        <S.DropDownIcon />
      </S.DropDownToggle>
      <S.DropDownMenu>
        <S.DropDownItem>전체 기간</S.DropDownItem>
        <S.ItemLine />
        <S.DropDownItem>9월 25일</S.DropDownItem>
        <S.ItemLine />
        <S.DropDownItem>9월 26일</S.DropDownItem>
        <S.ItemLine />
        <S.DropDownItem>9월 27일</S.DropDownItem>
      </S.DropDownMenu>
    </S.DropDownContainer>
  );
};

export default DropDown;
