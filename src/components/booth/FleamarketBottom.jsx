import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ContentContainer from '@/components/common/ContentContainer';
import PropTypes from 'prop-types';

FleamarketBottom.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    hennaOtherImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    wideImgGoods: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    }),
  }).isRequired,
};

export default function FleamarketBottom({ item }) {
  const { marketId } = useParams();
  if (marketId === 'kawaii') {
    return (
      <Container $marketId={marketId}>
        <ContentContainer>
          <TextWrapper>
            이외에도 다양한 뜨개 작품들과
            <br /> 예쁜 패키지가 준비되어 있어요!
            <br /> 소중한 사람에게 마음을 전달해 보세요 💝
          </TextWrapper>
        </ContentContainer>
      </Container>
    );
  } else if (marketId === 'henna') {
    return (
      <Container $marketId={marketId}>
        <ContentContainer>
          <Henna7Img src={item.wideImgGoods.img} alt="henna" />
          <GoodsInfo>
            <Name>{item.wideImgGoods.name}</Name>
            <Price>₩{item.wideImgGoods.price.toLocaleString()}</Price>
          </GoodsInfo>
        </ContentContainer>
        <ContentContainer>
          <HennaOtherImg src={item.hennaOtherImg} alt="henna" />
          <Text>약 100종의 도안이 더 있으니 구경하러 오세요 ☺️</Text>
        </ContentContainer>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div`
  margin-top: ${({ marketId }) => (marketId === 'kawaii' ? '1.2rem' : '1.6rem')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const TextWrapper = styled.div`
  margin: 2rem 2.8rem 2rem 2.4rem;
  text-align: center;
  ${({ theme }) => theme.fontStyles.basic.body2Reg}
  color: ${({ theme }) => theme.colors.gray70};
`;

const Henna7Img = styled.img`
  width: 32.5rem;
  height: 13.1rem;
  margin-top: 3.3rem;
`;

const HennaOtherImg = styled.img`
  width: 28.5rem;
  height: 19.9rem;
  margin-top: 2rem;
`;

const Text = styled.div`
  width: 28.5rem;
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  color: ${({ theme }) => theme.colors.gray80};
  margin-top: 1rem;
`;

const GoodsInfo = styled.div`
  width: 13.6rem;
  height: 4.9rem;
  gap: 0.4rem;
  margin-right: 18.7rem;
  margin-left: 1.2rem;
`;

const Name = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const Price = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
