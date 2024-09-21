import React from 'react';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';
import * as S from './styles';

import md1 from '@/assets/webps/wdfMD/md1.webp';
import md2 from '@/assets/webps/wdfMD/md2.webp';
import md3 from '@/assets/webps/wdfMD/md3.webp';
import md4 from '@/assets/webps/wdfMD/md4.webp';
import md5 from '@/assets/webps/wdfMD/md5.webp';
import md6 from '@/assets/webps/wdfMD/md6.webp';
import md7 from '@/assets/webps/wdfMD/md7.webp';
import md8 from '@/assets/webps/wdfMD/md8.webp';
import md9 from '@/assets/webps/wdfMD/md9.webp';
import md10 from '@/assets/webps/wdfMD/md10.webp';
import alertImage from '@/assets/webps/wdfMD/error.webp';
import productsData from '@/constants/wdfMD/data.json';

const FlameMdPage = () => {
  const { t } = useTranslation();

  const imageMap = {
    md1: md1,
    md2: md2,
    md3: md3,
    md4: md4,
    md5: md5,
    md6: md6,
    md7: md7,
    md8: md8,
    md9: md9,
    md10: md10,
  };

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
                        src={imageMap[product.image]}
                        alt={t(`flameMdPage.products.${product.name}`)}
                        width={product.width}
                        height={product.height}
                        top={product.imageTop}
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
