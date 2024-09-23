import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { djData } from '@/constants/wdfMain/djData.js';
import { djLogos } from '@/constants/wdfMain/djLogo.js';
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';
import { useTranslation } from 'react-i18next';

const FlameLineupPage = () => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState('Day1');
  const [images, setImages] = useState([]);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지뷰 이벤트 발송
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Flame LineUp Page',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const loadImagesAndLogos = async () => {
      setLoading(true);
      try {
        if (djData[selectedDay] && djLogos[selectedDay]) {
          const imagePromises = djData[selectedDay].map(async (image) => {
            const module = await image.loadImage();
            return {
              src: module.default || module,
              width: image.width,
            };
          });
          const logoPromises = djLogos[selectedDay].map(async (logo) => {
            const module = await logo.loadLogo();
            return {
              src: module.default || module,
              width: logo.width,
              height: logo.height,
              name: logo.name,
            };
          });

          const loadedImages = await Promise.all(imagePromises);
          const loadedLogos = await Promise.all(logoPromises);

          setImages(loadedImages);
          setLogos(loadedLogos);
        }
      } catch (error) {
        console.error('Error loading images or logos', error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          AOS.refresh(); // DOM 업데이트 이후 AOS 새로고침
        }, 100);
      }
    };

    loadImagesAndLogos();
  }, [selectedDay]);

  const dayKey = selectedDay.toLowerCase();

  const dayDjData = useMemo(() => images[dayKey], [dayKey]);
  const dayDjLogos = useMemo(() => logos[dayKey], [dayKey]);

  const renderCards = () =>
    images.map((event, index) => (
      <S.Card key={`card-${event.src}-${index}`} data-aos={index === 0 ? '' : 'fade-up'}>
        <S.CardImageContainer>
          <S.DjImage
            src={images[index]?.src} // 이미지 배열에서 가져온 값 사용
            alt={event.alt}
            style={{ width: images[index].width }}
            loading="lazy"
          />
          <S.GradientOverlay />
          <S.LogoImage
            src={logos[index]?.src} // 로고 배열에서 가져온 값 사용
            alt={`${event.name} logo`}
            style={{
              width: logos[index]?.width,
              height: logos[index]?.height,
            }}
            loading="lazy"
          />
        </S.CardImageContainer>
        <S.CardDescriptionContainer>
          <S.DjProfile>
            <S.Name>{logos[index].name}</S.Name>
          </S.DjProfile>
        </S.CardDescriptionContainer>
      </S.Card>
    ));

  return (
    <>
      <S.Container key={selectedDay}>
        <S.Title>{t('flameLineupPage.title')}</S.Title>
        <S.DayContainer>
          <S.DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
            <span>DAY 1</span>
            <span>{t('flameLineupPage.day1')}</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
            <span>DAY 2</span>
            <span>{t('flameLineupPage.day2')}</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
            <span>DAY 3</span>
            <span>{t('flameLineupPage.day3')}</span>
          </S.DayButton>
        </S.DayContainer>
        <S.CardContainer>{renderCards()}</S.CardContainer>
      </S.Container>
    </>
  );
};

export default FlameLineupPage;
