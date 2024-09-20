import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productsData from '@/constants/wdfPromotion/data.json';

import img1 from '@/assets/webps/wdfPromotion/예거마이스터.webp';
import img2 from '@/assets/webps/wdfPromotion/인테이크.webp';
import img3 from '@/assets/webps/wdfPromotion/금군양조.webp';
import img4 from '@/assets/webps/wdfPromotion/프루팁스.webp';

const PromotionContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 4.8rem;
  gap: 4.8rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
`;

const Promotion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 30.7rem;
  border: 0.1rem solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%) 1;
  align-self: stretch;
  flex-shrink: 0;
`;

const ImageContainer = styled.div`
  width: 33.3rem;
  height: 23.6rem;
  background: linear-gradient(180deg, rgba(242, 13, 13, 0.25) 0.07%, rgba(255, 255, 255, 0.02) 112.68%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Description = styled.div`
  height: 8.7rem;
  position: absolute;
  bottom: 0;
  left: 0.1rem;
  right: 0.1rem;
  background-color: ${(props) => props.theme.colors.flameSubBackgroundColor};
  backdrop-filter: blur(0.6rem);
  padding: 1.6rem 0;
  padding-left: 1.6rem;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

const FlamePromotionPage = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setProducts(productsData.products);
    AOS.init({ duration: 1000 });
  }, []);

  const imageMap = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
  };

  return (
    <PromotionContainer>
      <Title>{t('flamePromotionPage.title')}</Title>
      <Promotion>
        {products.map((product, index) => {
          let animationType = '';

          // 첫 번째 요소는 애니메이션 없음
          if (index === 0) {
            animationType = '';
          } else {
            animationType = 'zoom-in-up';
          }

          return (
            <Card key={product.id} data-aos={animationType}>
              <ImageContainer>
                <Image
                  src={imageMap[product.image]}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  top={product.imageTop}
                />
              </ImageContainer>
              <Description>
                <Text>{t(`flamePromotionPage.products.${product.name}`)}</Text>
              </Description>
            </Card>
          );
        })}
      </Promotion>
    </PromotionContainer>
  );
};

export default FlamePromotionPage;
