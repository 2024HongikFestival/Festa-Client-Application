import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import * as S from '@/pages/event/main/styled';

export const ItemSlider = ({ carouselItems }) => {
  // const sliderRef = useRef(null);
  // const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <Slider {...carouselSettings}>
          {/*  ref={sliderRef} afterChange={(index) => setCurrentSlide(index)} 삭제 */}
          {carouselItems.map((item, index) => (
            <S.ImageContainer key={index}>
              <S.CarouselImage src={item.src} alt={item.alt} />
              <S.ItemInfoSection>
                <S.ItemName>상품명</S.ItemName>
                <S.ItemPrice>99,000원</S.ItemPrice>
                <S.RafflePrice>
                  <span>100%</span>
                  <span id="zero">0원</span>
                </S.RafflePrice>
              </S.ItemInfoSection>
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
