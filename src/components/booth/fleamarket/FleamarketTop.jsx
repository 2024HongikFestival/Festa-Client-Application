import React, { useEffect, useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ContentContainer = lazy(() => import('@/components/common/ContentContainer'));

FleamarketTop.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ]).isRequired,
};

export default function FleamarketTop({ item }) {
  const { marketId } = useParams();
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    if (Array.isArray(item)) {
      // 동적으로 이미지를 불러오기
      Promise.all(
        item.map(async (img) => {
          if (typeof img === 'function') {
            const module = await img();
            return module.default;
          }
          return img;
        })
      ).then((images) => setLoadedImages(images));
    } else if (typeof item === 'function') {
      // 단일 이미지일 경우
      item().then((module) => setLoadedImages([module.default]));
    } else {
      setLoadedImages([item]);
    }
  }, [item]);

  if (marketId === 'sangsu') {
    return (
      <TopWrapper>
        <Suspense fallback={<></>}>
          <ContentContainer>
            <TopImgWrapper $marketId={marketId}>
              {loadedImages.map((img, index) => (
                <TopImg key={index} src={img} alt="sangsu" idx={index} loading="lazy" />
              ))}
            </TopImgWrapper>
          </ContentContainer>
        </Suspense>
      </TopWrapper>
    );
  } else if (marketId === 'hypeBoy') {
    return (
      <TopWrapper>
        <TopImgWrapper $marketId={marketId}>
          {loadedImages.length > 0 && <TopImg2 src={loadedImages[0]} alt="hypeBoy" loading="lazy" />}
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
