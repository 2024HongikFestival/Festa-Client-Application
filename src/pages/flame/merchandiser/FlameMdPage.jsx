import styled from 'styled-components';
import md1 from '@/static/image/flame/merchandiser/Frame2608705.svg';
import md2 from '@/static/image/flame/merchandiser/Frame2608708.svg';
import md3 from '@/static/image/flame/merchandiser/Frame2608707.svg';
import md4 from '@/static/image/flame/merchandiser/Frame2608702.svg';
import md5 from '@/static/image/flame/merchandiser/Frame2608704.svg';
import md6 from '@/static/image/flame/merchandiser/Frame2608720.svg';
import md7 from '@/static/image/flame/merchandiser/Frame2608721.svg';
import md8 from '@/static/image/flame/merchandiser/Frame2608701.svg';
import md9 from '@/static/image/flame/merchandiser/Frame2608703.svg';
import alertImage from '@/static/image/flame/merchandiser/alert.svg';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

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
`;

const Title = styled.h2`
  height: 4.8rem; /* 48px -> 4.8rem */
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.wdfHeadline3};
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
  flex-direction: column;
  gap: 0.4rem; /* 4px -> 0.4rem */
  align-self: stretch;
  background-color: ${(props) => props.theme.colors.gray90};
  padding: 0.8rem; /* 8px -> 0.8rem */
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.body1Bold};
`;

const SubDescription = styled.p`
  color: ${(props) => props.theme.colors.gray20};
  ${(props) => props.theme.fontStyles.body1Med};
`;

const LocationAlert = styled.div`
  display: flex;
  height: 1.8rem; /* 18px -> 1.8rem */
  color: ${(props) => props.theme.colors.gray60};
  gap: 0.8rem; /* 8px -> 0.8rem */
  ${(props) => props.theme.fontStyles.captionMed};
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
  ${(props) => props.theme.fontStyles.captionBold};
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.subHeadBold};
`;

const ProductPrice = styled.div`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.body1Med};
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 33.5rem; /* 335px -> 33.5rem */
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem; /* 12px -> 1.2rem */
`;

const NoticeTitle = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.subHeadBold};
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
  padding-left: 1.6rem; /* 10px -> 1.6rem */
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fontStyles.body2Med};

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem; /* 12px -> 1.2rem */
    color: ${(props) => props.theme.colors.gray5};
  }
`;

const HighlightedText = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray30};
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
      <Header />
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
                <AlertImage src={alertImage} />
                현장 구매만 가능합니다
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
