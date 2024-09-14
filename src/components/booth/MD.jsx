import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // i18next import
import ContentContainer from '@/components/common/ContentContainer';
import baseballUniform from '@/assets/webps/booth/md/baseballUniform.webp';
import bandana from '@/assets/webps/booth/md/bandana.webp';
import rugbyUniform from '@/assets/webps/booth/md/rugbyUniform.webp';
import stringBag from '@/assets/webps/booth/md/stringBag.webp';
import wdfSlogan from '@/assets/webps/booth/md/wdfSlogan.webp';
import wowBadge from '@/assets/webps/booth/md/wowBadge.webp';
import wowWdfSeal from '@/assets/webps/booth/md/wowWdfSeal.webp';
import wowWdfStickerPack from '@/assets/webps/booth/md/wowWdfStickerPack.webp';
import wowWdfTshirt from '@/assets/webps/booth/md/wowWdfTshirt.webp';
import wowTatto from '@/assets/webps/booth/md/wowTatto.webp';

MD.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

const imageMap = {
  baseballUniform,
  bandana,
  rugbyUniform,
  stringBag,
  wdfSlogan,
  wowBadge,
  wowWdfSeal,
  wowWdfStickerPack,
  wowWdfTshirt,
  wowTatto,
};

const imageTopMap = {
  baseballUniform: '1.2rem',
  bandana: '0.4rem',
  rugbyUniform: '1.2rem',
  stringBag: '0.2rem',
  wdfSlogan: '-3rem',
  wowBadge: '0.7rem',
  wowWdfSeal: '-1.3rem',
  wowWdfStickerPack: '-0.5rem',
  wowWdfTshirt: '0rem',
  wowTatto: '2.8rem',
};

export default function MD({ img, name, price, width, height }) {
  const formattedPrice = price.toLocaleString();
  const imageSrc = imageMap[img];
  const imageTop = imageTopMap[img];
  const { t } = useTranslation(); // useTranslation 훅 사용

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ContentContainer>
      <MdWrapper>
        <Radial>
          <Frame width={width} height={height} top={imageTop}>
            <Img src={imageSrc} alt={t(`mdPage.products.${img}`)} top={imageTop} width={width} height={height} />
          </Frame>
        </Radial>
        <Desc>
          <TextContainer>
            <Text kind={'limited'}>{t('mdPage.limitedSale')}</Text> {/* "한정판매" 번역 */}
            <Text kind={'mdName'}>{t(`mdPage.products.${img}`)}</Text> {/* 제품 이름 번역 */}
            <Text kind={'price'}>₩ {formattedPrice}</Text>
          </TextContainer>
        </Desc>
      </MdWrapper>
    </ContentContainer>
  );
}

const MdWrapper = styled.div`
  position: relative;
  width: 33.5rem;
  height: 33.5rem;
`;

const Radial = styled.div`
  width: 33.5rem;
  height: 23.6rem;
  background: radial-gradient(56.38% 56.38% at 50.08% 56.38%, rgba(24, 51, 219, 0.15) 0%, rgba(24, 51, 219, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Frame = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const Desc = styled.div`
  position: absolute;
  width: 33.5rem;
  height: 11.5rem;
  background-color: ${(props) => props.theme.colors.gray5};
  top: 22rem;
  padding: 1.6rem 2.4rem 2.4rem 1.6rem;
`;

const TextContainer = styled.div`
  width: 30rem;
  height: 7.5rem;
`;

const Text = styled.p`
  ${(props) =>
    props.kind === 'limited' &&
    css`
      color: ${props.theme.colors.hongikBlue};
      ${props.theme.fontStyles.basic.captionBold}
      margin-bottom: 0.4rem;
    `}

  ${(props) =>
    props.kind === 'mdName' &&
    css`
      ${props.theme.fontStyles.basic.subHeadBold}
      margin-bottom: 0.2rem;
    `}

    ${(props) =>
    props.kind === 'price' &&
    css`
      ${props.theme.fontStyles.basic.body1Med}
      color: ${props.theme.colors.gray50};
    `}
`;
