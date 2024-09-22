import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

FleamarketTop.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ]).isRequired,
};

export default function FleamarketTop({ item }) {
  const { marketId } = useParams();
  if (marketId === 'sangsu') {
    return (
      <TopWrapper>
        <ContentContainer>
          <TopImgWrapper $marketId={marketId}>
            {item.map((img, index) => (
              <TopImg key={index} src={img} alt="sangsu" idx={index} />
            ))}
          </TopImgWrapper>
        </ContentContainer>
      </TopWrapper>
    );
  } else if (marketId === 'hypeBoy') {
    return (
      <TopWrapper>
        <TopImgWrapper $marketId={marketId}>
          <TopImg2 src={item[0]} alt="hypeBoy" />
        </TopImgWrapper>
      </TopWrapper>
    );
  } else {
    return null;
  }
}

const TopWrapper = styled.div`
  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1.6rem;
`;

const TopImgWrapper = styled.div`
  margin: ${({ marketId }) => (marketId === 'sangsu' ? '1.2rem 1.3rem 1.2rem 1.3rem;' : '2rem 2rem 2rem 1.9rem')};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TopImg = styled.img`
  width: 30.9rem;
  height: ${({ idx }) => (idx === 1 ? '12.7rem' : '10.9rem')};
`;

const TopImg2 = styled.img`
  width: 29.6rem;
  height: 24.4rem;
`;
