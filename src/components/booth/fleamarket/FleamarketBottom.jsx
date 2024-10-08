import React, { useEffect, lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContentContainer = lazy(() => import('@/components/common/ContentContainer'));

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
  const { t } = useTranslation();
  const { marketId } = useParams();
  const [wideImgGoodsSrc, setWideImgGoodsSrc] = useState('');
  const [hennaOtherImgSrc, setHennaOtherImgSrc] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-back',
    });
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      if (marketId === 'henna') {
        try {
          const wideImgModule = await item.wideImgGoods.img();
          setWideImgGoodsSrc(wideImgModule.default);

          const hennaOtherImgModule = await item.hennaOtherImg();
          setHennaOtherImgSrc(hennaOtherImgModule.default);
        } catch (error) {
          console.error('Error loading images:', error);
        }
      }
    };

    loadImages();
  }, [item, marketId]);

  if (marketId === 'kawaii') {
    return (
      <Suspense fallback={<></>}>
        <Container $marketId={marketId}>
          <div data-aos="fade-right" data-aos-delay={'500'}>
            <ContentContainer>
              <TextWrapper>
                {t('fleamarket.detail.4.bottom')
                  .split('\n')
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </TextWrapper>
            </ContentContainer>
          </div>
        </Container>
      </Suspense>
    );
  } else if (marketId === 'henna') {
    return (
      <Suspense fallback={<></>}>
        <Container $marketId={marketId}>
          <div data-aos="fade-right" data-aos-delay={'400'}>
            <ContentContainer>
              {wideImgGoodsSrc && <Henna7Img src={wideImgGoodsSrc} alt="henna" />}
              <GoodsInfo>
                <Name>{item.wideImgGoods.name}</Name>
                <Price>₩{item.wideImgGoods.price.toLocaleString()}</Price>
              </GoodsInfo>
            </ContentContainer>
          </div>
          <div data-aos="fade-right" data-aos-delay={'500'}>
            <ContentContainer>
              {hennaOtherImgSrc && <HennaOtherImg src={hennaOtherImgSrc} alt="henna" />}
              <Text>{t('fleamarket.detail.5.bottom')}</Text>
            </ContentContainer>
          </div>
        </Container>
      </Suspense>
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
  margin-bottom: 2rem;
  text-align: center;
`;

const GoodsInfo = styled.div`
  width: 13.6rem;
  height: 4.9rem;
  gap: 0.4rem;
  margin-right: 18.7rem;
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
`;

const Name = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const Price = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
