import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PropTypes from 'prop-types';

PriceTable.propTypes = {
  bottomImg: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default function PriceTable({ bottomImg }) {
  const priceData = [
    { icon: '👕', name: '티셔츠', price: '₩15,000 ~ ₩35,000' },
    { icon: '🧥', name: '맨투맨/후드', price: '₩50,000 ~ ₩150,000' },
    { icon: '🧢', name: '모자', price: '₩15,000 ~ ₩35,000' },
    { icon: '🆕', name: '새 제품', price: '구매 가격 그대로!' },
  ];

  return (
    <PriceTableContainer>
      <ContentContainer>
        <PriceWrapper>
          <Title>PRICE</Title>
          <CollectionWrapper>
            {priceData.map((item, index) => (
              <Collection key={index}>
                <ItemName>
                  {item.icon} {item.name}
                </ItemName>
                <Price>{item.price}</Price>
              </Collection>
            ))}
          </CollectionWrapper>
          <Caption>이외에도 더 많이 준비되어 있습니다~!</Caption>
        </PriceWrapper>
      </ContentContainer>
      <ContentContainer>
        <ImgWrapper>
          {bottomImg.map((img, index) => (
            <Img key={index} src={img} alt="example" />
          ))}
        </ImgWrapper>
      </ContentContainer>
    </PriceTableContainer>
  );
}

const PriceTableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.8rem;
`;

const PriceWrapper = styled.div`
  margin: 2rem 2.4rem 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.div`
  width: 28.7rem;
  ${({ theme }) => theme.fontStyles.basic.subHeadBold}
`;

const CollectionWrapper = styled.div`
  width: 28.7rem;
  height: 12.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`;

const Collection = styled.div`
  width: 28.7rem;
  height: 2.9rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray90};
`;

const ItemName = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Med}
`;

const Price = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Med}
`;

const Caption = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body1Bold}
  color: ${({ theme }) => theme.colors.gray70};
  text-align: center;
`;

const ImgWrapper = styled.div`
  margin: 2rem 1.9rem 2rem 1.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.9rem 1.7rem;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 14rem;
  height: 14rem;
`;
