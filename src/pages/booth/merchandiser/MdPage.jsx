import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // i18next import
import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/icon/error.webp';
import MD from '@/components/booth/md/MD';
import { mdList } from '@/constants/booth/mdList';
import * as S from './MdPage.styled';

export default function MdPage() {
  const { t } = useTranslation(); // useTranslation 훅 사용

  return (
    <S.Container>
      <PageTitle title={t('mdPage.title')} />
      {/* 구매 위치 및 현장 구매만 가능함 알림 컴포넌트 */}
      <ContentContainer>
        <S.InfoText>
          <S.Span>
            {t('mdPage.locationInfo')}
            <S.Highlight>{t('mdPage.span')}</S.Highlight>
          </S.Span>
          <br />
          {t('mdPage.purchaseInfo')}
        </S.InfoText>
        <S.GuideWrapper>
          <S.IconWrapper>
            <S.Icon src={error} alt="error" />
          </S.IconWrapper>
          <S.Caption>{t('mdPage.purchaseAlert')}</S.Caption>
        </S.GuideWrapper>
      </ContentContainer>
      {/* MD 컴포넌트 */}
      <S.MDContainer>
        {mdList.map((item, index) =>
          index === 0 ? (
            <MD
              key={index}
              img={item.img}
              name={t(`mdPage.products.${item.img}`)} // 번역된 제품 이름 사용
              price={item.price}
              width={item.width}
              height={item.height}
            />
          ) : (
            <div key={index} data-aos="zoom-in-up">
              <MD
                img={item.img}
                name={t(`mdPage.products.${item.img}`)} // 번역된 제품 이름 사용
                price={item.price}
                width={item.width}
                height={item.height}
              />
            </div>
          )
        )}
      </S.MDContainer>
      {/* 유의사항 컴포넌트 */}
      <div data-aos="fade-up">
        <ContentContainer>
          <S.NoteContainer>
            <S.NoteTitle>{t('mdPage.noteTitle')}</S.NoteTitle>
            <S.NoteContentWrapper>
              <S.NoteContent>{t('mdPage.noteItems.item1')}</S.NoteContent>
              <S.NoteContent>{t('mdPage.noteItems.item2')}</S.NoteContent>
              <S.NoteContent>{t('mdPage.noteItems.item3')}</S.NoteContent>
            </S.NoteContentWrapper>
          </S.NoteContainer>
        </ContentContainer>
      </div>
    </S.Container>
  );
}
