import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import night from '@/assets/webps/booth/icon/night.webp';
import wow from '@/assets/webps/booth/wow/departmentWow.webp';
import day2Night from '@/assets/webps/booth/icon/day2Night.webp';
import favorite from '@/assets/webps/booth/icon/favorite.webp';
import animationData from '@/assets/lotties/booth/like.json';
import PropTypes from 'prop-types';
import { axiosInstance } from '@/api/axios';

CarouselItem.propTypes = {
  content: PropTypes.shape({
    department: PropTypes.string,
    intro: PropTypes.string,
    food: PropTypes.string,
    event: PropTypes.string,
    wow: PropTypes.any,
    time: PropTypes.string,
  }),
  click: PropTypes.any,
  likeData: PropTypes.any,
};

export default function CarouselItem({ content, click, likeData }) {
  const [totalLikes, setTotalLikes] = useState(likeData?.totalLike || 0);
  const [animationKey, setAnimationKey] = useState(0); // 애니메이션 키 추가
  const lng = localStorage.getItem('language');
  const lottieRef = useRef(null);

  const [wowImage, setWowImage] = useState(null);

  useEffect(() => {
    if (content.wow) {
      content.wow().then((module) => {
        setWowImage(module.default); // 동적으로 로드된 이미지 설정
      });
    }
  }, [content.wow]);

  useEffect(() => {
    if (likeData && likeData.totalLike !== undefined) {
      setTotalLikes(likeData.totalLike);
    }
  }, [likeData]);

  const handleLikeClick = async (id) => {
    click();

    // 애니메이션 재생을 위해 animationKey 업데이트
    setAnimationKey((prev) => prev + 1);

    try {
      const response = await axiosInstance.post(`/booths/${id}/like`);
      if (response.status === 200) {
        console.log('좋아요수 +1 성공!');
        setTotalLikes((prevLikes) => prevLikes + 1); // 좋아요 수 증가
      }
    } catch (e) {
      console.log('좋아요수 반영 실패', e);
    }
  };

  return (
    <Container $lng={lng}>
      {content.time === 'all' ? (
        <Icon $lng={lng} src={day2Night} kind={'day2Night'} />
      ) : (
        <Icon $lng={lng} src={night} />
      )}
      <Department>
        {content.department.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Department>
      <Intro>
        {content.intro.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Intro>
      {wowImage && <Wow src={wowImage} alt="wow" width={'11.7rem'} height={'13.1rem'} />}
      <PubInfoContainer $lng={lng}>
        <TextWrapper kind="food">
          <Title>Food</Title>
          <Text>
            {content.food.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        </TextWrapper>
        {content.event && (
          <TextWrapper kind="event">
            <Title>Event</Title>
            <Text>
              {content.event.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          </TextWrapper>
        )}
      </PubInfoContainer>
      <BtnContainer>
        <LikeBtn onClick={() => handleLikeClick(likeData.boothId)} $lng={lng}>
          <HeartIcon src={favorite} alt="favorite" />
          <Count>{totalLikes}</Count>
        </LikeBtn>
      </BtnContainer>

      {/* Lottie 컴포넌트에 animationKey를 적용하여 매번 새로 렌더링되도록 함 */}

      <Lottie
        style={{
          position: 'absolute',
          width: '160%',
          height: '150%',
          pointerEvents: 'none',
          top: '44%', // 여기서 top 값을 조정합니다
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        key={animationKey}
        animationData={animationData}
        loop={false}
        autoPlay={false}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 22.1rem;
  height: ${({ $lng }) => ($lng === 'en' ? '41rem' : '38.1rem')};
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Icon = styled.img`
  width: ${({ kind }) => (kind === 'day2Night' ? '4.4rem' : '2.2rem')};
  height: 2.2rem;
  margin-top: ${({ $lng }) => ($lng === 'en' ? '1.8rem' : '1.8rem')};
`;

const Department = styled.div`
  ${({ theme }) => theme.fontStyles.main.department};
  color: ${({ theme }) => theme.colors.gray100};
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const Intro = styled.div`
  ${({ theme }) => theme.fontStyles.main.intro};
  color: ${({ theme }) => theme.colors.gray50};
  margin-bottom: 1.4rem;
  text-align: center;
`;

const Wow = styled.img`
  width: 11.7rem;
  height: 13.1rem;
  object-fit: contain;
`;

const PubInfoContainer = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ $lng }) => ($lng === 'en' ? '2.8rem' : '1.8rem')};
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.7rem;
  justify-content: flex-start;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  width: 3.3rem;
  flex-shrink: 0;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionMed};
  color: ${({ theme }) => theme.colors.gray40};
  flex: 1;
  word-break: break-word;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 11.6rem;
  text-align: start;
`;

const BtnContainer = styled.div`
  /* width: 11rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8.1rem;
`;

const LikeBtn = styled.button`
  width: 10.7rem;
  height: 3.4rem;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.colors.hongikBlue};
  margin-top: ${({ $lng }) => ($lng === 'en' ? '6rem' : '1.8rem')};
  margin-bottom: ${({ $lng }) => ($lng === 'en' ? '5rem' : '2.9rem')};
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.1s ease;
  box-shadow: 0 0.8rem 1.8rem rgb(0, 97, 211, 0.25);
  z-index: 2;

  &:active {
    box-shadow: 0px 0.3rem 0.4rem rgb(0, 97, 211, 0.25);
    background-color: rgb(0, 97, 211, 1);
    width: 11.7rem;
    height: 3.4rem;
  }
`;

const HeartIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const Count = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  color: white;
`;
