import { styled, css } from 'styled-components';
import wow from '@/assets/webps/booth/ranking/wow.webp';
import first from '@/assets/svgs/booth/1st.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';

export default function Kind111() {
  return (
    <PodiumWrapper>
      <Podium1>
        <WowImgWrapper rank="1st" r>
          <Wow src={wow} alt="wow" />
        </WowImgWrapper>
        <Box width="1st" direction="left">
          <Badge src={first} alt="1st" rank="1st" direction="left" />
          <Department rank="1st">
            기계 시스템
            <br />
            디자인공학과
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+9999</Count>
          </CountWrapper>
        </Box>
      </Podium1>
      <Podium2>
        <WowImgWrapper rank="1st">
          <Wow src={wow} alt="wow" />
        </WowImgWrapper>
        <Box width="1st" direction="mid">
          <Badge src={first} alt="1st" rank="1st" direction="mid" />
          <Department rank="1st">
            기계 시스템
            <br />
            디자인공학과
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+9999</Count>
          </CountWrapper>
        </Box>
      </Podium2>
      <Podium3>
        <WowImgWrapper rank="1st">
          <Wow src={wow} alt="wow" />
        </WowImgWrapper>
        <Box width="1st" direction="right">
          <Badge src={first} alt="1st" rank="1st" direction="right" />
          <Department rank="1st">
            기계 시스템
            <br />
            디자인공학과
          </Department>
          <CountWrapper>
            <HeartIcon src={heart} alt="heart" />
            <Count>+9999</Count>
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
  width: 6.3rem;
  height: 7.036rem;
`;

const Box = styled.div`
  background: linear-gradient(180deg, #d7dcff 0%, #f1f3ff 50.04%, #fbfcff 100.08%);
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
    props.rank === '1st' &&
    (props.direction === 'left' || props.direction === 'right') &&
    css`
      width: 2.907rem;
      height: 4.5rem;
      visibility: hidden;
    `}

  ${(props) =>
    props.rank === '1st' &&
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
    props.rank === '1st' &&
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
  width: 3.9rem;
  height: 1.8rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  color: ${({ theme }) => theme.colors.gray50}
`;
