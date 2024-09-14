import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import arrowKeyLeft from '@/assets/webps/booth/icon/arrowKeyLeft.webp';
import arrowKeyRight from '@/assets/webps/booth/icon/arrowKeyRight.webp';
import CarouselItem from '@/components/booth/CarouselItem';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { PubList } from '@/constants/booth/pubList';
import { useState, useEffect, useRef } from 'react';

PubCarousel.propTypes = {
  menu: PropTypes.string,
};

export default function PubCarousel({ menu }) {
  const { t } = useTranslation();
  const pubList = PubList(t);
  const [currentCategory, setCurrentCategory] = useState('1');
  const sliderRef = useRef(null);

  useEffect(() => {
    const newCategory = setCategoryFunc(menu);
    setCurrentCategory(newCategory);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [menu]);

  const setCategoryFunc = (menu) => {
    switch (menu) {
      case t('booth.pub.menu.1'):
        return '1';
      case t('booth.pub.menu.2'):
        return '2';
      case t('booth.pub.menu.3'):
        return '3';
      case t('booth.pub.menu.4'):
        return '4';
      case t('booth.pub.menu.5'):
        return '5';
      case t('booth.pub.menu.6'):
        return '6';
      case t('booth.pub.menu.7'):
        return '7';
      case t('booth.pub.menu.8'):
        return '8';
      case t('booth.pub.menu.9'):
        return '9';
      case t('booth.pub.menu.10'):
        return '9';
      case t('booth.pub.menu.11'):
        return '10';
      case t('booth.pub.menu.12'):
        return '11';
      case t('booth.pub.menu.13'):
        return '12';
      case t('booth.pub.menu.14'):
        return '13';
      default:
        return '1';
    }
  };

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
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <StyledSlider ref={sliderRef} {...settings}>
          {pubList[currentCategory].map((item, index) => (
            <CarouselItem key={index} content={item} />
          ))}
        </StyledSlider>
      </CarouselContainer>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  width: 24.5rem;
  position: relative;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  width: 22.1rem;
  height: 40.7rem;
  margin: 0 auto;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  box-shadow: 0 0 0.13rem 0.13rem rgba(0, 0, 0, 0.12);
  border-radius: 1.2rem;
  .slick-list,
  .slick-track {
    height: 38.1rem;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-slide {
    border: solid 0.1rem ${({ theme }) => theme.colors.gray20};
    border-radius: 1.2rem !important;
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
    margin: 0 0.4rem;
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
