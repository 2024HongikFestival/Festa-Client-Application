import { styled, css, keyframes } from 'styled-components';
import arrow from '@/assets/webps/main/arrowRight.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70.7rem;
`;

export const LottieWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 37.5rem;
  height: 70.7rem;
`;

export const Title = styled.div`
  width: 19.2rem;
  margin-top: 9.4rem;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  font-family: 'SCoreDream', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  line-height: 6rem;
  letter-spacing: -0.004rem;
  text-align: center;
  opacity: ${(props) => (props.$showContent ? '1' : '0')};
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Desc = styled.div`
  margin-top: 5.6rem;
  ${(props) => props.theme.fontStyles.basic.subHeadMed};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  opacity: ${(props) => (props.$showContent ? '1' : '0')};
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  text-shadow: 0px 0px 20px #000aff;
`;

export const Img = styled.img`
  width: 37.8rem;
  height: 42.3rem;
  object-fit: contain;
`;

export const LineupTitleWrapper = styled.div`
  width: 100%;
  height: 7.7rem;
  margin-top: 3.2rem;
  margin-bottom: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Date = styled.p`
  ${(props) => props.theme.fontStyles.basic.subHeadBold}
  color: ${(props) => props.theme.colors.gray10};
  text-align: center;
  text-shadow: 0px 0px 20px ${(props) => props.theme.colors.hongikSkyBlue};
`;

export const LineupTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 4.2rem;
  letter-spacing: -0.001rem;
  text-align: center;
  font-family: 'SCoreDream', sans-serif;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0px 0px 20px ${(props) => props.theme.colors.hongikSkyBlue};
  padding: 0;
`;

export const LineupInfoWrapper = styled.div`
  width: 33.5rem;
  height: 43.6rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1.2rem;
`;
export const GoLineupPageBtn = styled.button`
  margin-top: 3.2rem;
  width: 33.5rem;
  height: 5.4rem;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.main.headline6};
  margin-bottom: 4rem;
  border-radius: 1.2rem;
  background: linear-gradient(92deg, rgba(3, 124, 158, 0.32) 5.37%, rgba(22, 170, 234, 0.32) 97.97%);
  box-shadow: 0 0.2rem 0.8rem 0 rgba(66, 255, 187, 0.04);
  backdrop-filter: blur(1.2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;

  background: linear-gradient(90deg, #aed3ff 0%, #39c3ef 100%);
  padding: 0.2rem;
  background-clip: padding-box, border-box;
  background-origin: border-box;

  & > * {
    background: linear-gradient(92deg, rgba(3, 124, 158, 0.32) 5.37%, rgba(22, 170, 234, 0.32) 97.97%);
    border-radius: 1.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Arrow = styled.div`
  background: url(${arrow});
  background-size: contain;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  right: 0;
  margin-right: ${(props) => (props.$isEnglish ? '2.8rem' : '5.7rem')};
`;

export const BtnText = styled.p`
  ${(props) => props.theme.fontStyles.main.headline6};
  left: 50%;
`;

export const LineupImg = styled.img`
  width: 33.5rem;
  height: 43.6rem;
`;
