import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
    // AOS.init({
    //   duration: 900, // 애니메이션 지속 시간 (밀리초)
    // });
  }, []);

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
          <S.Title>MD 상품</S.Title>
          <S.ProductList>
            <S.ProductLocation>
              <S.LocationDescription>
                <S.MainDescription>
                  홍문관(R동) 앞 & 아트앤디자인밸리 측면<S.Highlight>에서</S.Highlight>
                </S.MainDescription>
                <S.SubDescription>구매하실 수 있습니다!</S.SubDescription>
              </S.LocationDescription>
              <S.LocationAlert>
                <S.AlertImage src={alertImage} />
                현장 구매만 가능합니다
              </S.LocationAlert>
            </S.ProductLocation>
            <S.CardContainer>
              {products.map((product) => (
                <S.ProductCard key={product.id} data-aos="fade-up">
                  <S.ImageContainer>
                    <S.ProductImage
                      src={imageMap[product.image]}
                      alt={product.name}
                      width={product.width}
                      height={product.height}
                      top={product.imageTop}
                    />
                  </S.ImageContainer>
                  <S.ProductInfo>
                    <S.ProductDetails>
                      <S.ProductTag>한정판매</S.ProductTag>
                      <S.ProductName>{product.name}</S.ProductName>
                    </S.ProductDetails>
                    <S.ProductPrice>{product.price}</S.ProductPrice>
                  </S.ProductInfo>
                </S.ProductCard>
              ))}
            </S.CardContainer>
          </S.ProductList>
        </S.ProductsSection>
        <S.NoticeContainer>
          <S.NoticeTitle>현장 구매 시 유의 사항</S.NoticeTitle>
          <S.NoticeList>
            <S.NoticeItem>
              계좌 이체 <S.HighlightedText>및</S.HighlightedText> 현금 결제
              <S.HighlightedText>만 가능합니다.</S.HighlightedText>
            </S.NoticeItem>
            <S.NoticeItem>
              구매 완료 시 환불, 교환, 취소 불가능<S.HighlightedText>합니다.</S.HighlightedText>
            </S.NoticeItem>
            <S.NoticeItem>
              불량품
              <S.HighlightedText>
                은 현장에서 확인 후 바로 현장 관리 인원에게
                <br /> 말씀해 주시기 바랍니다.
              </S.HighlightedText>
            </S.NoticeItem>
          </S.NoticeList>
        </S.NoticeContainer>
      </S.MdProductsContainer>
    </>
  );
};

export default FlameMdPage;
