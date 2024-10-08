import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';
import first from '@/assets/svgs/booth/icon/1st.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';
import { useTranslation } from 'react-i18next';
import { DepartmentList } from '@/constants/booth/departmentList';
import PropTypes from 'prop-types';

Kind111.propTypes = {
  data: PropTypes.any,
};

export default function Kind111({ data }) {
  const { t } = useTranslation();
  const departments = DepartmentList(t);
  const [wowImages, setWowImages] = useState([null, null, null]);

  const loadWowImage = async (boothId, index) => {
    try {
      const image = await import(`@/assets/webps/booth/wow/${boothId}.webp`);
      setWowImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = image.default;
        return updatedImages;
      });
    } catch (error) {
      console.error('이미지 로드 실패:', error);
      // 로드 실패 시 기본 이미지로 설정할 수도 있습니다.
      setWowImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = null;
        return updatedImages;
      });
    }
  };

  useEffect(() => {
    // 각 부스의 이미지를 비동기로 로드
    data.forEach((item, index) => {
      loadWowImage(item.boothId, index);
    });
  }, [data]);

  return (
    <PodiumWrapper>
      <Podium1>
        <WowImgWrapper $rank="1st">
          {wowImages[0] ? <Wow src={wowImages[0]} alt="wow" /> : <div>Loading...</div>}
        </WowImgWrapper>
        <Box width="1st" direction="left">
          <Badge src={first} alt="1st" $rank="1st" direction="left" />
          <Department $rank="1st">
            {departments[data[0].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>

          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>{data[0].totalLike > 99999 ? '99999+' : data[0].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium1>
      <Podium2>
        <WowImgWrapper $rank="1st">
          {wowImages[1] ? <Wow src={wowImages[1]} alt="wow" /> : <div>Loading...</div>}
        </WowImgWrapper>
        <Box width="1st" direction="mid">
          <Badge src={first} alt="1st" $rank="1st" direction="mid" />
          <Department $rank="1st">
            {departments[data[1].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>{data[1].totalLike > 99999 ? '99999+' : data[1].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium2>
      <Podium3>
        <WowImgWrapper $rank="1st">
          {wowImages[2] ? <Wow src={wowImages[2]} alt="wow" /> : <div>Loading...</div>}
        </WowImgWrapper>
        <Box width="1st" direction="right">
          <Badge src={first} alt="1st" $rank="1st" direction="right" />
          <Department $rank="1st">
            {departments[data[2].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>{data[2].totalLike > 99999 ? '99999+' : data[2].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium3>
    </PodiumWrapper>
  );
}

const PodiumWrapper = styled.div`
  width: 30.5rem;
  height: 27.1rem;
  margin-top: 3.6rem;
  display: flex;
`;

const Podium1 = styled.div`
  width: 10.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Podium2 = styled.div`
  width: 10.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Podium3 = styled.div`
  width: 10.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const WowImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$rank === '1st' &&
    css`
      margin-bottom: 1.564rem;
    `}
`;

const Wow = styled.img`
  height: 7.036rem;
  object-fit: contain;
`;

const Box = styled.div`
  background: linear-gradient(to bottom, #d4edff 0%, #eaf6ff 50%, #fbfcff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.width === '1st' &&
    props.direction === 'mid' &&
    css`
      height: 18.5rem;
      padding: 1.2rem 1.2rem 0.4rem 1.2rem;
    `}

  ${(props) =>
    props.width === '1st' &&
    props.direction === 'left' &&
    css`
      height: 18.5rem;
      border-radius: 1.08rem 0 0 0;
      padding: 1.2rem 1.2rem 0.4rem 1.2rem;
    `}

    ${(props) =>
    props.width === '1st' &&
    props.direction === 'right' &&
    css`
      height: 18.5rem;
      border-radius: 0 1.08rem 0 0;
      padding: 1.2rem 1.2rem 0.4rem 1.2rem;
    `}
`;

const Badge = styled.img`
  ${(props) =>
    props.$rank === '1st' &&
    (props.direction === 'left' || props.direction === 'right') &&
    css`
      width: 2.907rem;
      height: 4.5rem;
      visibility: hidden;
    `}

  ${(props) =>
    props.$rank === '1st' &&
    props.direction === 'mid' &&
    css`
      width: 2.907rem;
      height: 4.5rem;
    `}
`;

const Department = styled.div`
  ${({ theme }) => theme.colors.gray100}
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  text-align: center;

  ${(props) =>
    props.$rank === '1st' &&
    css`
      margin-top: 1.6rem;
      margin-bottom: 4.8rem;
      width: 7.9rem;
      height: 4.2rem;
      ${({ theme }) => theme.fontStyles.basic.body2Bold}
    `}
`;

const CountWrapper = styled.div`
  width: 5.5rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeartIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const Count = styled.div`
  height: 1.8rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  color: ${({ theme }) => theme.colors.gray50}
`;
