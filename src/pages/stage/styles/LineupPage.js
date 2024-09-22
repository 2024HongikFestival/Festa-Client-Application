import styled from 'styled-components';
import mcImage from '@/assets/webps/stageLineup/mc.webp';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  align-self: stretch;
  padding-top: 2.4rem;
  padding-bottom: 6.4rem;
`;
export const Title = styled.p`
  ${(props) => props.theme.fontStyles.main.headline2};
  color: ${(props) => props.theme.colors.black};
`;
export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28rem;
`;
export const DayButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? props.theme.colors.hongikBlue : props.theme.colors.gray60)};
  cursor: pointer;
  padding: 0;
  .day {
    display: block;
    ${(props) => props.theme.fontStyles.basic.body2Bold}; // DAY 1 스타일
  }
  .date {
    display: block;
    ${(props) => props.theme.fontStyles.basic.subHeadBold}; // 9.25 (수) 스타일
  }
`;
export const CardContainer = styled.div`
  display: flex;
  width: 33.5rem;
  flex-direction: column;
  gap: 3.2rem;
`;
export const Card = styled.div`
  position: relative;
  height: 28.4rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
export const CardImage = styled.img`
  width: 33.5rem;
  height: 100%;
  object-fit: cover;
`;
export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray20};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
`;
export const Name = styled.p`
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => (props.$isBlack ? props.theme.colors.gray100 : props.theme.colors.white)};
`;
export const MCContainer = styled.div`
  width: 33.5rem;
  text-align: center;
  padding: 1.2rem;
  background-image: url(${mcImage});
  background-size: cover;
  background-position: center;
  border-radius: 1.6rem;
`;
export const MCName = styled.p`
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.gray100};
`;
