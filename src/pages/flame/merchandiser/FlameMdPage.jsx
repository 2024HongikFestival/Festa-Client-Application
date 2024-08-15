import styled from 'styled-components';
import md1 from '@/assets/webps/wdfMD/frame_2608705.webp';
import md2 from '@/assets/webps/wdfMD/frame_2608708.webp';
import md3 from '@/assets/webps/wdfMD/frame_2608707.webp';
import md4 from '@/assets/webps/wdfMD/frame_2608702.webp';
import md5 from '@/assets/webps/wdfMD/frame_2608704.webp';
import md6 from '@/assets/webps/wdfMD/frame_2608720.webp';
import md7 from '@/assets/webps/wdfMD/frame_2608721.webp';
import md8 from '@/assets/webps/wdfMD/frame_2608701.webp';
import md9 from '@/assets/webps/wdfMD/frame_2608703.webp';
import alertImage from '@/assets/webps/wdfMD/error.webp';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { useEffect, useState } from 'react';
import productsData from '@/assets/static/wdfMD/data.json';

const MdProductsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 5.2rem; /* 52px -> 5.2rem */
`;

const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem; /* 28px -> 2.8rem */
  align-self: stretch;
  margin-top: 2.4rem;
`;

const Title = styled.h2`
  height: 4.8rem; /* 48px -> 4.8rem */
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33.5rem; /* 335px -> 33.5rem */
  gap: 2.8rem; /* 28px -> 2.8rem */
`;

const ProductLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem; /* 8px -> 0.8rem */
  align-self: stretch;
  text-align: center;
`;

const LocationDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem; /* 4px -> 0.4rem */
  align-self: stretch;
  background-color: ${(props) => props.theme.colors.gray90};
  padding: 0.8rem; /* 8px -> 0.8rem */
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  letter-spacing: -0.1rem;
`;

const MainDescription = styled.span`
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  letter-spacing: -0.1rem;
`;

const Highlight = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med}; /* "에서"에 적용될 스타일 */
`;

const SubDescription = styled.span`
  color: ${(props) => props.theme.colors.gray20};
  ${(props) => props.theme.fontStyles.basic.body1Med};
  letter-spacing: -0.1rem;
`;

const LocationAlert = styled.div`
  display: flex;
  height: 1.8rem; /* 18px -> 1.8rem */
  color: ${(props) => props.theme.colors.gray60};
  gap: 0.8rem; /* 8px -> 0.8rem */
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;

const AlertImage = styled.img`
  width: 1.536rem; /* 15.36px -> 1.536rem */
  height: 1.536rem; /* 15.36px -> 1.536rem */
  flex-shrink: 0;
  opacity: 0.5;
`;

const ProductCard = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  align-self: stretch;
  flex-shrink: 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 1.6px;
  right: 1.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 0.2rem; /* 2px -> 0.2rem */
  background-color: ${(props) => props.theme.colors.flameSubBackgroundColor};
  backdrop-filter: blur(0.6rem); /* 6px -> 0.6rem */
  padding: 1.6rem; /* 16px -> 1.6rem */
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem; /* 4px -> 0.4rem */
  align-self: stretch;
`;

const ProductTag = styled.div`
  color: ${(props) => props.theme.colors.flameMainColor};
  ${(props) => props.theme.fontStyles.basic.captionBold};
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

const ProductPrice = styled.div`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 33.5rem; /* 335px -> 33.5rem */
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem; /* 12px -> 1.2rem */
  margin-bottom: 6.4rem;
`;

const NoticeTitle = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

const NoticeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem; /* 4px -> 0.4rem */
  align-self: stretch;
`;

const NoticeItem = styled.li`
  position: relative;
  margin-left: 1.9rem;
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fontStyles.basic.body2Med};

  &::before {
    content: '•';
    position: absolute;
    left: -1.2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem; /* 12px -> 1.2rem */
    color: ${(props) => props.theme.colors.gray5};
  }
`;

const HighlightedText = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  letter-spacing: -0.1rem;
  color: ${(props) => props.theme.colors.gray30};
`;

const FlameMdPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
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
  };

  return (
    <>
      <Header />
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
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={imageMap[product.image]} alt={product.name} />
                <ProductInfo>
                  <ProductDetails>
                    <ProductTag>한정판매</ProductTag>
                    <ProductName>{product.name}</ProductName>
                  </ProductDetails>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
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
              <HighlightedText>은 현장에서 확인 후 바로 현장 관리 인원에게 말씀해 주시기 바랍니다.</HighlightedText>
            </NoticeItem>
          </NoticeList>
        </NoticeContainer>
      </MdProductsContainer>
      <Footer />
    </>
  );
};

export default FlameMdPage;
