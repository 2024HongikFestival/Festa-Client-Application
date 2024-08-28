import { useEffect, useState } from 'react';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import * as S from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import raffle from '@/assets/webps/event/raffle.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';
import kakaoLogo from '@/assets/svgs/kakaoLogo.svg';
import { ItemSlider } from '@/components/event/ItemSlider';
import { axiosInstance } from '@/api/axios';
import NoticeTimeBox from '@/components/event/NoticeTimeBox';

const EventPage = () => {
  // dummy item data
  const carouselItems = [
    { src: raffle, alt: 'Image 1' },
    { src: raffle, alt: 'Image 2' },
    { src: raffle, alt: 'Image 3' },
    { src: raffle, alt: 'Image 4' },
    { src: raffle, alt: 'Image 5' },
    { src: raffle, alt: 'Image 6' },
  ];
  const [stateData, setStateData] = useState();
  const [currentUrl, setCurrentUrl] = useState('');
  //const [carouselItems, setCarouselItems] = useState([]);

  const handleRandomState = () => {
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    setStateData(array[0]);
  };

  // 소셜 공유 기능 추가 예정
  const handleShare = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('링크가 복사되었습니다!');
    });
  };

  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL + `&state=${stateData}`;
  };

  // 응모 상품 리스트
  // const getEventItems = async () => {
  //   try {
  //     const response = await axiosInstance.get('/entries/prizes');
  //     console.log(response.data.message);
  //     setCarouselItems(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    handleRandomState();
    //getEventItems();
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <S.Wrapper>
      <S.Title>
        2024{' '}
        <span>
          홍익&nbsp;<span id="highlight">대동제 래플</span>
        </span>
      </S.Title>
      <div>
        <img src={raffle} alt="raffle" height={184} />
      </div>
      <S.NoticeText>
        매일 <span>오전 10시</span> 응모권 1장 부여
      </S.NoticeText>
      <NoticeTimeBox />
      <S.QNABox>
        <S.QText>Q. 홍익 래플이 뭐예요?</S.QText>
        <S.AText>A. 응모자 추첨을 통해 경품을 지급하는 이벤트입니다.</S.AText>
      </S.QNABox>

      <ItemSlider carouselItems={carouselItems} />

      <S.NoticeDetail>
        <S.DetailSection>
          <S.DetailTitle>응모 대상</S.DetailTitle>
          <S.DetailDescription>
            지금 ‘홍익대학교 내에서’ 축제를 즐기고 있다면 재학생 외부인 상관없이 누구나
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 조건</S.DetailTitle>
          <S.DetailDescription>현재 위치가 홍익대학교로 확인된 응모자</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 기간</S.DetailTitle>
          <S.DetailDescription>9월 25일 09:00 ~ 9월 27일 24:00 매일 오전 10시 응모권 1장 제공</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>당첨 발표</S.DetailTitle>
          <S.DetailDescription>9월 28일 14:00 총학 인스타 스토리</S.DetailDescription>
        </S.DetailSection>
      </S.NoticeDetail>
      <S.ShareButton onClick={handleShare}>
        <S.ShareIcon src={shareIcon} alt="shareIcon" />
        <p>이벤트 공유</p>
      </S.ShareButton>
      <S.KakaoAuthButton onClick={handleKakaoAuth}>
        <img src={kakaoLogo} alt="kakaoLogo" />
        <p>카카오 인증 후 응모하기</p>
      </S.KakaoAuthButton>
    </S.Wrapper>
  );
};

export default EventPage;
