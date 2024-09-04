import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MdProductsContainer,
  ProductsSection,
  Title,
  ProductList,
  ProductLocation,
  LocationDescription,
  MainDescription,
  Highlight,
  SubDescription,
  LocationAlert,
  CardContainer,
  AlertImage,
  ProductCard,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductTag,
  ProductName,
  ProductPrice,
  NoticeContainer,
  NoticeTitle,
  NoticeList,
  NoticeItem,
  HighlightedText,
} from './styles';

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
import productsData from '@/assets/static/wdfMD/data.json';

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
      <MdProductsContainer>
        <ProductsSection>
          <Title>MD 상품</Title>
          <ProductList>
            <ProductLocation>
              <LocationDescription>
                <MainDescription>
                  홍문관(R동) 앞 & 아트앤디자인밸리 측면<Highlight>에서</Highlight>
                </MainDescription>
                <SubDescription>구매하실 수 있습니다!</SubDescription>
              </LocationDescription>
              <LocationAlert>
                <AlertImage src={alertImage} />
                현장 구매만 가능합니다
              </LocationAlert>
            </ProductLocation>
            <CardContainer>
              {products.map((product) => (
                <ProductCard key={product.id} data-aos="fade-up">
                  <ImageContainer>
                    <ProductImage
                      src={imageMap[product.image]}
                      alt={product.name}
                      width={product.width}
                      height={product.height}
                      top={product.imageTop}
                    />
                  </ImageContainer>
                  <ProductInfo>
                    <ProductDetails>
                      <ProductTag>한정판매</ProductTag>
                      <ProductName>{product.name}</ProductName>
                    </ProductDetails>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductInfo>
                </ProductCard>
              ))}
            </CardContainer>
          </ProductList>
        </ProductsSection>
        <NoticeContainer>
          <NoticeTitle>현장 구매 시 유의 사항</NoticeTitle>
          <NoticeList>
            <NoticeItem>
              계좌 이체 <HighlightedText>및</HighlightedText> 현금 결제<HighlightedText>만 가능합니다.</HighlightedText>
            </NoticeItem>
            <NoticeItem>
              구매 완료 시 환불, 교환, 취소 불가능<HighlightedText>합니다.</HighlightedText>
            </NoticeItem>
            <NoticeItem>
              불량품
              <HighlightedText>
                은 현장에서 확인 후 바로 현장 관리 인원에게
                <br /> 말씀해 주시기 바랍니다.
              </HighlightedText>
            </NoticeItem>
          </NoticeList>
        </NoticeContainer>
      </MdProductsContainer>
    </>
  );
};

export default FlameMdPage;
