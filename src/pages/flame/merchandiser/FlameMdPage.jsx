import React from 'react';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';
import * as S from './styles';
import { productsData } from '@/constants/wdfMD/data';
import alertImage from '@/assets/webps/wdfMD/error.webp';

const FlameMdPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.MdProductsContainer>
        <S.ProductsSection>
          <S.Title>{t('flameMdPage.title')}</S.Title>
          <S.ProductList>
            <S.ProductLocation>
              <S.LocationDescription>
                <S.MainDescription>
                  {t('flameMdPage.locationDescription')}
                  <S.Highlight>{t('flameMdPage.span')}</S.Highlight>
                  <br />
                  <S.Highlight>{t('flameMdPage.locationSubDescription')}</S.Highlight>
                </S.MainDescription>
              </S.LocationDescription>
              <S.LocationAlert>
                <S.AlertImage src={alertImage} />
                {t('flameMdPage.locationAlert')}
              </S.LocationAlert>
            </S.ProductLocation>
            <S.CardContainer>
              {productsData.products.map((product, index) => {
                return (
                  <S.ProductCard key={product.id} data-aos={index === 0 ? '' : 'zoom-in-up'}>
                    <S.ImageContainer>
                      <S.ProductImage
                        src={product.image}
                        alt={t(`flameMdPage.products.${product.name}`)}
                        width={product.width}
                        height={product.height}
                        $top={product.imageTop}
                      />
                    </S.ImageContainer>
                    <S.ProductInfo>
                      <S.ProductDetails>
                        <S.ProductTag>{t('flameMdPage.limitedSale')}</S.ProductTag>
                        <S.ProductName>{t(`flameMdPage.products.${product.name}`)}</S.ProductName>
                      </S.ProductDetails>
                      <S.ProductPrice>{product.price}</S.ProductPrice>
                    </S.ProductInfo>
                  </S.ProductCard>
                );
              })}
            </S.CardContainer>
          </S.ProductList>
        </S.ProductsSection>
        <S.NoticeContainer data-aos="fade-up">
          <S.NoticeTitle>{t('flameMdPage.noticeTitle')}</S.NoticeTitle>
          <S.NoticeList>
            <S.NoticeItem>{t('flameMdPage.noticeList.item1')}</S.NoticeItem>
            <S.NoticeItem>{t('flameMdPage.noticeList.item2')}</S.NoticeItem>
            <S.NoticeItem>
              <Trans i18nKey="flameMdPage.noticeList.item3" components={{ br: <br /> }} />
            </S.NoticeItem>
          </S.NoticeList>
        </S.NoticeContainer>
      </S.MdProductsContainer>
    </>
  );
};

export default FlameMdPage;
