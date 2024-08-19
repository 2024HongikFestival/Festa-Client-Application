// 대동제 분실물 (메인)
// url: /lost-and-found

import React from 'react';
import * as S from './LostAndFoundPage.styled';

const LostAndFoundPage = () => {
  return (
    <>
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
        <S.Pagenation></S.Pagenation>
      </S.Main>
    </>
  );
};

export default LostAndFoundPage;
