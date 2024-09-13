import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import arrowKeyLeft from '@/assets/webps/booth/icon/arrowKeyLeft.webp';
import arrowKeyRight from '@/assets/webps/booth/icon/arrowKeyRight.webp';
import CarouselItem from '@/components/booth/CarouselItem';
import PropTypes from 'prop-types';

export default function PubCarousel() {
  const CustomArrow = ({ className, onClick, direction }) => {
    return (
      <ArrowContainer className={className} onClick={onClick} direction={direction}>
        <Icon src={direction === 'next' ? arrowKeyRight : arrowKeyLeft} alt={`${direction} arrow`} />
      </ArrowContainer>
    );
  };

  CustomArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <StyledSlider {...settings}>
          <CarouselItem>안녕하세용</CarouselItem>
          <CarouselItem>하이하이 ㅋㅋ</CarouselItem>
          <CarouselItem>닌텐도 재밋당</CarouselItem>
        </StyledSlider>
      </CarouselContainer>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  width: 24.5rem; // 22.1rem + (1.2rem * 2) for arrows
  position: relative;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  width: 22.1rem;
  height: 40.7rem; // 38.1rem (card) + 1.8rem (gap) + 0.8rem (dots)
  margin: 0 auto;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  box-shadow: 0 0 0.13rem 0.13rem rgba(0, 0, 0, 0.12);
  border-radius: 1.2rem;
  .slick-list,
  .slick-track {
    height: 38.1rem; // Explicitly set to card height
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-slide {
    border: solid 0.1rem ${({ theme }) => theme.colors.gray20};
    border-radius: 1.2rem !important;
    /* box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.12) !important; */
    background-color: white !important;
  }

  .slick-dots {
    bottom: -2.6rem;
    height: 0.8rem;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .slick-dots li {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 0.4rem; // 양쪽으로 0.4rem씩 주어 버튼 간 간격을 0.8rem로 만듦
    padding: 0;
  }

  .slick-dots li button {
    width: 0.8rem;
    height: 0.8rem;
    padding: 0;
  }

  .slick-dots li button:before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #d9d9d9;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    font-size: 0;
  }

  .slick-dots li.slick-active button:before {
    background-color: ${({ theme }) => theme.colors.hongikBlue};
  }
`;

const Card = styled.div`
  width: 22.1rem;
  height: 38.1rem;
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const ArrowContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => (direction === 'prev' ? 'left: -3.6rem;' : 'right: -3.6rem;')}
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
