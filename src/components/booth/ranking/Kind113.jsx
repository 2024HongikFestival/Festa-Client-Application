import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';
import first from '@/assets/svgs/booth/icon/1st.svg';
import third from '@/assets/svgs/booth/icon/3rd.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DepartmentList } from '@/constants/booth/departmentList';

Kind113.propTypes = {
  data: PropTypes.any.isRequired,
};

export default function Kind113({ data }) {
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
      setWowImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = null;
        return updatedImages;
      });
    }
  };

  useEffect(() => {
    data.forEach((item, index) => {
      loadWowImage(item.boothId, index);
    });
  }, [data]);

  return (
    <PodiumWrapper>
      <Podium1>
        <WowImgWrapper $rank="1st">
          {wowImages[0] ? <Wow src={wowImages[0]} alt="wow" /> : <div>Loading...</div>}
          {wowImages[1] ? <Wow src={wowImages[1]} alt="wow" /> : <div>Loading...</div>}
        </WowImgWrapper>
        <Box width="1st">
          <Badge src={first} alt="1st" $rank="1st" />
          <DepartmentWrapper>
            <Department $rank="1st">
              {departments[data[0].boothId].split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Department>
            <Department $rank="1st">
              {departments[data[1].boothId].split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Department>
          </DepartmentWrapper>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>{data[0].totalLike > 9999 ? '9999+' : data[0].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium1>

      <Podium3>
        <WowImgWrapper $rank="3rd">
          {wowImages[2] ? <Wow src={wowImages[2]} alt="wow" /> : <div>Loading...</div>}
        </WowImgWrapper>
        <Box width="3rd">
          <Badge src={third} alt="3rd" $rank="3rd" />
          <Department $rank="3rd">
            {departments[data[2].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>

          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>{data[2].totalLike > 9999 ? '9999+' : data[2].totalLike}</Count>
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
  width: 20.4rem;
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
  gap: 3.75rem;

  ${(props) =>
    props.$rank === '1st' &&
    css`
      margin-bottom: 1.564rem;
    `}

  ${(props) =>
    props.$rank === '3rd' &&
    css`
      margin-bottom: 2.734rem;
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
    css`
      height: 18.5rem;
      border-radius: 1.08rem 1.08rem 0 0;
      padding: 1.2rem 1.5rem 0.4rem 1.5rem;
    `}

  ${(props) =>
    props.width === '3rd' &&
    css`
      height: 9.5rem;
      border-radius: 0 1.08rem 0 0;
      padding: 0.8rem 1.18rem 0.371rem 1.22rem;
    `}
`;

const Badge = styled.img`
  ${(props) =>
    props.$rank === '1st' &&
    css`
      width: 2.907rem; !important;
      height: 4.5rem;
      margin-bottom: 1.599rem;
    `}

  ${(props) =>
    props.$rank === '3rd' &&
    css`
      width: 1.44rem;
      height: 2.229rem;
    `}
`;

const DepartmentWrapper = styled.div`
  width: 17.4rem;
  height: 4.2rem;
  display: flex;
  gap: 1.6rem;
  margin-bottom: 4.8rem;
`;

const Department = styled.div`
  ${({ theme }) => theme.colors.gray100}
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  text-align: center;

  ${(props) =>
    props.$rank === '1st' &&
    css`
      width: 7.9rem;
      height: 4.2rem;
      ${({ theme }) => theme.fontStyles.basic.body2Bold}
    `}

  ${(props) =>
    props.$rank === '3rd' &&
    css`
      margin-top: 0.4rem;
      margin-bottom: 0.3rem;
      width: 7.7rem;
      height: 3.6rem;
      ${({ theme }) => theme.fontStyles.basic.captionBold}
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
  /* width: 3.9rem; */
  height: 1.8rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  color: ${({ theme }) => theme.colors.gray50}
`;
