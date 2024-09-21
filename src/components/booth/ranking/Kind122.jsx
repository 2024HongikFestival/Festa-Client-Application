import React from 'react';
import { styled, css } from 'styled-components';
import first from '@/assets/svgs/booth/icon/1st.svg';
import second from '@/assets/svgs/booth/icon/2nd.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';
import PropTypes from 'prop-types';
import { DepartmentList } from '@/constants/booth/departmentList';
import { useTranslation } from 'react-i18next';
import { WowList } from '@/constants/booth/wowList';

Kind122.propTypes = {
  data: PropTypes.any,
};

export default function Kind122({ data }) {
  const { t } = useTranslation();
  const departments = DepartmentList(t);

  return (
    <PodiumWrapper>
      <Podium1>
        <WowImgWrapper rank="2nd">
          <Wow src={WowList[data[1].boothId]} alt="wow" />
        </WowImgWrapper>
        <Box width="2nd" direction="left">
          <Badge src={second} alt="2nd" rank="2nd" />
          <Department rank="2nd">
            {/* {departments[data[1].boothId]} */}
            {departments[data[1].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+{data[1].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium1>
      <Podium2>
        <WowImgWrapper rank="1st">
          <Wow src={WowList[data[0].boothId]} alt="wow" />
        </WowImgWrapper>
        <Box width="1st" direction="">
          <Badge src={first} alt="1st" rank="1st" />
          <Department rank="1st">
            {departments[data[0].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+{data[0].totalLike}</Count>
          </CountWrapper>
        </Box>
      </Podium2>
      <Podium3>
        <WowImgWrapper rank="2nd">
          <Wow src={WowList[data[2].boothId]} alt="wow" />
        </WowImgWrapper>
        <Box width="2nd" direction="right">
          <Badge src={second} alt="2nd" rank="2nd" />
          <Department rank="2nd">
            {departments[data[2].boothId].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+{data[2].totalLike}</Count>
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
    props.rank === '1st' &&
    css`
      margin-bottom: 1.564rem;
    `}

  ${(props) =>
    props.rank === '2nd' &&
    css`
      margin-bottom: 2.454rem;
    `}

    ${(props) =>
    props.rank === '3rd' &&
    css`
      margin-bottom: 2.734rem;
    `}
`;

const Wow = styled.img`
  /* width: 6.3rem;
  height: 7.036rem; */
  /* width: 6.7rem; */
  height: 7.036rem;
`;

const Box = styled.div`
  /* background: linear-gradient(180deg, #d7dcff 0%, #f1f3ff 50.04%, #fbfcff 100.08%); */
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
      padding: 1.2rem 1.2rem 0.4rem 1.2rem;
    `}

  ${(props) =>
    props.width === '2nd' &&
    props.direction === 'left' &&
    css`
      height: 12.3rem;
      border-radius: 1.08rem 0 0 0;
      padding: 0.8rem 1.2rem 0.357rem 1.2rem;
    `}

    ${(props) =>
    props.width === '2nd' &&
    props.direction === 'right' &&
    css`
      height: 12.3rem;
      border-radius: 0 1.08rem 0 0;
      padding: 0.8rem 1.2rem 0.357rem 1.2rem;
    `}
`;

const Badge = styled.img`
  ${(props) =>
    props.rank === '1st' &&
    css`
      width: 2.907rem;
      height: 4.5rem;
    `}

  ${(props) =>
    props.rank === '2nd' &&
    css`
      width: 2.16rem;
      height: 3.343rem;
    `}

    ${(props) =>
    props.rank === '3rd' &&
    css`
      width: 1.44rem;
      height: 2.229rem;
    `}
`;

const Department = styled.div`
  ${({ theme }) => theme.colors.gray100}
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  text-align: center;

  ${(props) =>
    props.rank === '1st' &&
    css`
      margin-top: 1.6rem;
      margin-bottom: 4.8rem;
      width: 7.9rem;
      height: 4.2rem;
      ${({ theme }) => theme.fontStyles.basic.body2Bold}
    `}

  ${(props) =>
    props.rank === '2nd' &&
    css`
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
      width: 7.7rem;
      height: 3.6rem;
      ${({ theme }) => theme.fontStyles.basic.captionBold}
    `}

    ${(props) =>
    props.rank === '3rd' &&
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
