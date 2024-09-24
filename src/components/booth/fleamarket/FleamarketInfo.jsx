import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/webps/booth/icon/arrow.webp';

FleamarketInfo.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default function FleamarketInfo({ item, index }) {
  const naviagate = useNavigate();
  const moveToDetailPage = (key) => {
    naviagate(`/fleamarket/${key}`);
  };

  return (
    <MarketInfoContainer onClick={() => moveToDetailPage(item.key)}>
      <Index>{index + 1}</Index>
      <MarketTextWrapper>
        <TitleWrapper>
          <Title>{item.name}</Title>
          <Arrow src={arrow} alt="arrow" />
        </TitleWrapper>

        <Intro>
          {item.intro.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Intro>
      </MarketTextWrapper>
    </MarketInfoContainer>
  );
}

const MarketInfoContainer = styled.div`
  margin: 1.6rem 1.4rem;
  display: flex;
  gap: 1.2rem;
`;

const Index = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.gray80};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.body1Bold}
`;

const MarketTextWrapper = styled.div`
  width: 26.9rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body1Bold}
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.img`
  width: 1.92rem;
  height: 1.92rem;
`;
const Intro = styled.div`
  margin-top: 0.8rem;
  ${({ theme }) => theme.fontStyles.basic.body2Reg}
  color: ${({ theme }) => theme.colors.gray50}
`;
