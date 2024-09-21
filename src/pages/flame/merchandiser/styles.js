import styled from 'styled-components';

export const MdProductsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 5.2rem;
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  align-self: stretch;
  margin-top: 2.4rem;
`;

export const Title = styled.h2`
  height: 4.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33.5rem;
  gap: 2.8rem;
`;

export const ProductLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  text-align: center;
`;

export const LocationDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: stretch;
  background-color: ${(props) => props.theme.colors.gray90};
  padding: 0.8rem;
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

export const MainDescription = styled.span`
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.gray20};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const SubDescription = styled.span`
  color: ${(props) => props.theme.colors.gray20};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const LocationAlert = styled.div`
  display: flex;
  align-items: center;
  height: 1.8rem;
  color: ${(props) => props.theme.colors.gray60};
  gap: 0.8rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
`;

export const AlertImage = styled.img`
  width: 1.58rem;
  height: 1.58rem;
  flex-shrink: 0;
`;

export const ProductCard = styled.div`
  position: relative;
  width: 100%;
  height: 33.5rem;
  border: 0.1rem solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%) 1;
  align-self: stretch;
  flex-shrink: 0;
`;

export const ImageContainer = styled.div`
  width: 33.3rem;
  height: 28rem;
  background: linear-gradient(180deg, rgba(242, 13, 13, 0.15) 0.07%, rgba(255, 255, 255, 0.01) 92.68%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0.1rem;
  right: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 0.2rem;
  background-color: ${(props) => props.theme.colors.flameSubBackgroundColor};
  backdrop-filter: blur(0.6rem);
  padding: 1.55rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
  align-self: stretch;
`;

export const ProductTag = styled.div`
  color: ${(props) => props.theme.colors.flameMainColor};
  ${(props) => props.theme.fontStyles.basic.captionBold};
`;

export const ProductName = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

export const ProductPrice = styled.div`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const NoticeContainer = styled.div`
  display: flex;
  width: 33.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 6.4rem;
`;

export const NoticeTitle = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

export const NoticeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  align-self: stretch;
`;

export const NoticeItem = styled.li`
  position: relative;
  margin-left: 1.9rem;
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fontStyles.basic.body2Med};
  line-height: 1.5;

  &::before {
    content: '•';
    position: absolute;
    left: -1.2rem;
    top: 0;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.gray5};
  }
`;

export const HighlightedText = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray30};
`;
