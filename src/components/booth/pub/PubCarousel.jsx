import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import arrowKeyLeft from '@/assets/webps/booth/icon/arrowKeyLeft.webp';
import arrowKeyRight from '@/assets/webps/booth/icon/arrowKeyRight.webp';
import CarouselItem from '@/components/booth/pub/CarouselItem';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { PubList } from '@/constants/booth/pubList';
import { useState, useEffect, useRef } from 'react';
import { setCategoryFunc } from '@/utils/booth/setCategoryFunc';

PubCarousel.propTypes = {
  menu: PropTypes.string,
  click: PropTypes.any,
  likeData: PropTypes.any,
};

export default function PubCarousel({ menu, click, likeData }) {
  const { t } = useTranslation();
  const pubList = PubList(t);
  const [currentCategory, setCurrentCategory] = useState('1');
  const sliderRef = useRef(null);
  const lng = localStorage.getItem('language');

  useEffect(() => {
    const newCategory = setCategoryFunc(menu);
    setCurrentCategory(newCategory);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [menu, t]);

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
    autoplaySpeed: 4000,
    prevArrow: likeData?.length > 1 ? <CustomArrow direction="prev" /> : null,
    nextArrow: likeData?.length > 1 ? <CustomArrow direction="next" /> : null,
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <StyledSlider ref={sliderRef} {...settings} lng={lng}>
          {pubList[currentCategory].map((item, index) => {
            // likeData에서 해당 index에 해당하는 데이터를 순서대로 매칭
            const relatedLikeData = likeData?.[index];
            return (
              <CarouselItem
                key={index}
                content={item}
                click={click}
                likeData={relatedLikeData} // 순서대로 매칭된 likeData를 CarouselItem에 전달
              />
            );
          })}
        </StyledSlider>
      </CarouselContainer>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  width: 24.5rem;
  position: relative;
  margin: 0 auto;
  z-index: 10;
`;

const CarouselContainer = styled.div`
  width: 22.1rem;
  height: 40.7rem;
  margin: 0 auto;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  box-shadow: 0 0 0.8rem 0rem rgba(0, 0, 0, 0.08);
  border-radius: 1.2rem;

  .slick-list,
  .slick-track {
    height: ${({ lng }) => (lng === 'en' ? '41rem' : '38.1rem')};
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
