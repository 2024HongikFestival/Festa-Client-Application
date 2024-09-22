import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import night from '@/assets/webps/booth/icon/night.webp';
import wow from '@/assets/webps/booth/wow/departmentWow.webp';
import day2Night from '@/assets/webps/booth/icon/day2Night.webp';
import favorite from '@/assets/webps/booth/icon/favorite.webp';
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
  const [isLiked, setIsLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likeData?.totalLike || 0); // 기본값을 0으로 설정
  const lng = localStorage.getItem('language');

  useEffect(() => {
    if (likeData && likeData.totalLike !== undefined) {
      setTotalLikes(likeData.totalLike); // likeData가 로드된 후에 totalLikes 업데이트
    }
  }, [likeData]);

  const handleLikeClick = async (id) => {
    click();
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 1000); // Reset after 1 second

    try {
      const response = await axiosInstance.post(`/booths/${id}/like`);
      if (response.status === 200) {
        console.log('좋아요수 +1 성공!');
      }
    } catch (e) {
      console.log('좋아요수 반영 실패', e);
    }
  };

  return (
    <Container>
      {content.time === 'all' ? <Icon lng={lng} src={day2Night} kind={'day2Night'} /> : <Icon lng={lng} src={night} />}
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
      {content.wow ? <Wow src={content.wow} alt="wow" /> : <Wow src={wow} alt="wow" />}
      <PubInfoContainer lng={lng}>
        <TextWrapper kind="food">
          <Title>Food</Title>
          <Text>
            {/* {content.food} */}
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
            <Text>{content.event}</Text>
          </TextWrapper>
        )}
      </PubInfoContainer>
      <BtnContainer>
        {/* <Confetti src={isLiked ? after : before} alt="confetti" $isAnimating={isLiked} /> */}
        <LikeBtn onClick={() => handleLikeClick(likeData.boothId)} lng={lng}>
          <HeartIcon src={favorite} alt="favorite" />
          <Count>{totalLikes}</Count>
        </LikeBtn>
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 22.1rem;
  /* height: 38.1rem; */
  height: ${({ lng }) => (lng === 'en' ? '41rem' : '38.1rem')};
  /* height: 42rem; */
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
`;

const Icon = styled.img`
  width: ${({ kind }) => (kind === 'day2Night' ? '4.4rem' : '2.2rem')};
  height: 2.2rem;
  /* margin-top: 1.8rem; */
  margin-top: ${({ lng }) => (lng === 'en' ? '3rem' : '1.8rem')};
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
  /* width: 15.6rem; */
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ lng }) => (lng === 'en' ? '2.8rem' : '1.8rem')};
  /* margin-top: 3rem; */
`;

const TextWrapper = styled.div`
  /* width: 15.6rem; */
  /* height: 2rem; */
  width: 100%;
  display: flex;
  /* gap: ${({ kind }) => (kind === 'food' ? '1.2rem' : '0.7rem')}; */
  gap: 0.7rem;
  justify-content: flex-start;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  width: 3.3rem; // Food와 Event 텍스트를 포함할 수 있는 충분한 너비
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
  // 영어인 경우 고려
  max-width: 11.6rem;
  text-align: start;
`;

const BtnContainer = styled.div`
  width: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8.1rem;
  position: relative;
`;

const confettiAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const Confetti = styled.img`
  width: 8.6rem;
  height: 7.2rem;
  position: absolute;
  animation: ${({ $isAnimating }) => ($isAnimating ? confettiAnimation : 'none')} 0.5s ease-out;
  opacity: 1;
  transition: all 0.3s ease-out;
`;

const LikeBtn = styled.button`
  width: 10.7rem;
  height: 3.4rem;
  border-radius: 10rem;
  background-color: #9747ff;
  margin-top: ${({ lng }) => (lng === 'en' ? '6rem' : '1.8rem')};
  margin-bottom: ${({ lng }) => (lng === 'en' ? '5rem' : '2.9rem')};
  /* margin-bottom: 2.9rem; */
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.1s ease;
  box-shadow: 0 0.8rem 1.8rem rgba(89, 0, 204, 0.25);
  z-index: 2;

  &:active {
    box-shadow: 0px 0.3rem 0.4rem rgba(89, 0, 204, 0.25);
    background-color: #893dec;
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

// const Title = styled.div`
//   ${({ theme }) => theme.fontStyles.basic.captionBold};
//   width: 2.8rem;
// `;

// const Text = styled.div`
//   ${({ theme }) => theme.fontStyles.basic.captionMed};
//   color: ${({ theme }) => theme.colors.gray40};
//   max-width: 11.6rem;
// `;
