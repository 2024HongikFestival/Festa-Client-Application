// 와디페 MD 상품
// url: /flame/md

import theme from '@/styles/theme';
import styled from 'styled-components';
import md1 from '@/image/flame/merchandiser/Frame2608705.svg';
import md2 from '@/image/flame/merchandiser/Frame2608708.svg';
import md3 from '@/image/flame/merchandiser/Frame2608707.svg';
import md4 from '@/image/flame/merchandiser/Frame2608702.svg';
import md5 from '@/image/flame/merchandiser/Frame2608704.svg';
import md6 from '@/image/flame/merchandiser/Frame2608720.svg';
import md7 from '@/image/flame/merchandiser/Frame2608721.svg';
import md8 from '@/image/flame/merchandiser/Frame2608701.svg';
import md9 from '@/image/flame/merchandiser/Frame2608703.svg';
import alertImage from '@/image/flame/merchandiser/alert.svg';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const MdProductsContainer = styled.div`
  width: 100%;
  /* background-color: #010304; */
  background-color: ${theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem; /* 52px -> 3.25rem */
`;

const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem; /* 28px -> 1.75rem */
  align-self: stretch;
`;

const Title = styled.h2`
  height: 3rem; /* 48px -> 3rem */
  text-align: center;
  color: ${theme.colors.white};
  font: ${theme.fontStyles.flameHeadline3.font};
  letter-spacing: ${theme.fontStyles.flameHeadline3.letterSpacing};
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20.9375rem; /* 335px -> 20.9375rem */
  gap: 1.75rem; /* 28px -> 1.75rem */
`;

const ProductLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* 8px -> 0.5rem */
  align-self: stretch;
  text-align: center;
`;
const LocationDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px -> 0.25rem */
  align-self: stretch;
  background-color: ${theme.colors.gray_90};
  padding: 0.5rem; /* 8px -> 0.5rem */
  color: ${theme.colors.gray_10};
  /* Body/Body_1_bold */
  font: ${theme.fontStyles.body_1_bold.font};
  letter-spacing: ${theme.fontStyles.body_1_bold.letterSpacing};
`;
const SubDescription = styled.p`
  color: ${theme.colors.gray_20};
  /* Body/Body_1_med */
  font: ${theme.fontStyles.body_1_med.font};
  letter-spacing: ${theme.fontStyles.body_1_med.letterSpacing};
`;
const LocationAlert = styled.div`
  display: flex;
  height: 1.125rem; /* 18px -> 1.125rem */
  color: ${theme.colors.gray_60};
  gap: 0.5rem; /* 8px -> 0.5rem */
  /* Caption/Caption_med */
  font: ${theme.fontStyles.caption_med.font};
  letter-spacing: ${theme.fontStyles.caption_med.letterSpacing};
`;
const AlertImage = styled.img`
  width: 0.96rem; /* 15.36px -> 0.96rem */
  height: 0.96rem; /* 15.36px -> 0.96rem */
  flex-shrink: 0;
  opacity: 0.5;
`;

const ProductCard = styled.div`
  position: relative;
  width: 100%;
  /* height: 20.9375rem; */
  border: 1px solid transparent;
  /* border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0) 100%) 1; */
  align-self: stretch;
  flex-shrink: 0;
  /* box-shadow: 0rem 0rem 0.5rem 0rem rgba(255, 255, 255, 0.25); */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 0.125rem; /* 2px -> 0.125rem */
  background-color: ${theme.colors.flameSubBackgroundColor};
  backdrop-filter: blur(0.375rem); /* 6px -> 0.375rem */
  padding: 1rem; /* 16px -> 1rem */
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem; /* 4px -> 0.25rem */
  align-self: stretch;
`;

const ProductTag = styled.div`
  color: ${theme.colors.flameMainColor};
  /* Caption/Caption_bold */
  font: ${theme.fontStyles.caption_bold.font};
  letter-spacing: ${theme.fontStyles.caption_bold.letterSpacing};
`;

const ProductName = styled.div`
  color: ${theme.colors.white};
  /* Subhead/Subhead_bold */
  font: ${theme.fontStyles.subhead_bold.font};
  letter-spacing: ${theme.fontStyles.subhead_bold.letterSpacing};
`;

const ProductPrice = styled.div`
  color: ${theme.colors.gray_50};
  /* Body/Body_1_med */
  font: ${theme.fontStyles.body_1_med.font};
  letter-spacing: ${theme.fontStyles.body_1_med.letterSpacing};
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 20.9375rem; /* 335px -> 20.9375rem */
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem; /* 12px -> 0.75rem */
`;

const NoticeTitle = styled.div`
  align-self: stretch;
  color: ${theme.colors.white};
  /* Subhead/Subhead_bold */
  font: ${theme.fontStyles.subhead_bold.font};
  letter-spacing: ${theme.fontStyles.subhead_bold.letterSpacing};
`;

const NoticeList = styled.ul`
  list-style: none; /* 기본 리스트 스타일 제거 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem; /* 4px -> 0.25rem */
  align-self: stretch;
`;

const NoticeItem = styled.li`
  position: relative;
  padding-left: 1rem;
  color: ${theme.colors.gray_5};
  /* Body/Body_2_med */
  font: ${theme.fontStyles.body_2_med.font};
  letter-spacing: ${theme.fontStyles.body_2_med.letterSpacing};

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem; /* 동그라미 크기 조절 */
    color: ${theme.colors.gray_5};
  }
`;
const HighlightedText = styled.span`
  /* Body/Body_2_med */
  font: ${theme.fontStyles.body_2_med.font};
  letter-spacing: ${theme.fontStyles.body_2_med.letterSpacing};
  color: ${theme.colors.gray_30};
`;

const FlameMdPage = () => {
  const products = [
    { id: 1, name: '와디페 슬로건타올', price: 'W 6,000', image: md1 },
    {
      id: 2,
      name: 'WOW DJ FESTIVAL 띠부씰 2EA (랜덤)',
      price: 'W 1,000',
      image: md2,
    },
    {
      id: 3,
      name: 'WOW DJ FESTIVAL 스티커 패키지',
      price: 'W 4,000',
      image: md3,
    },
    { id: 4, name: '와우 금속 뱃지', price: 'W 6,000', image: md4 },
    { id: 5, name: 'WOW DJ FESTIVAL 티셔츠', price: 'W 9,000', image: md5 },
    { id: 6, name: 'WOW DJ FESTIVAL 스트링백', price: 'W 8,000', image: md6 },
    { id: 7, name: '야구 유니폼', price: 'W 38,000', image: md7 },
    { id: 8, name: '럭비 유니폼', price: 'W 39,000', image: md8 },
    { id: 9, name: '반다나', price: 'W 5,000', image: md9 },
  ];

  return (
    <>
      <Header></Header>
      <MdProductsContainer>
        <ProductsSection>
          <Title>MD 상품</Title>
          <ProductList>
            <ProductLocation>
              <LocationDescription>
                홍문관(R동) 앞 & 아트앤디자인밸리 측면
                <SubDescription>에서 구매하실 수 있습니다!</SubDescription>
              </LocationDescription>
              <LocationAlert>
                <AlertImage src={alertImage}></AlertImage>현장 구매만 가능합니다
              </LocationAlert>
            </ProductLocation>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} />
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
      <Footer></Footer>
    </>
  );
};

export default FlameMdPage;
