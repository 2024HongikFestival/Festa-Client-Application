import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import * as S from '@/pages/event/main/styled';

export const ItemSlider = ({ carouselItems }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <Slider {...carouselSettings} ref={sliderRef} afterChange={(index) => setCurrentSlide(index)}>
          {carouselItems.map((item, index) => (
            <S.ImageContainer key={index}>
              <S.CarouselImage src={item.src} alt={item.alt} />
              <S.DJContainer>
                <S.DJWrapper>
                  <S.DJName>디제이 이름</S.DJName>
                </S.DJWrapper>
                <S.DJInfo>
                  국내외 페스티벌 섭외 1순위. <br />
                  아시아 시장 섭렵 <br />
                  트랜드를 이끌며 신 한류 문화가 될 <br /> K-EDM장르의 선두 DJ
                </S.DJInfo>
              </S.DJContainer>
            </S.ImageContainer>
          ))}
        </Slider>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  );
};

ItemSlider.propTypes = {
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  centerMode: false,
  variableWidth: true,
  lazyload: true,
};
