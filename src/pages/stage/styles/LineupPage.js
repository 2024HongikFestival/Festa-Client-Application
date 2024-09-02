import styled from 'styled-components';
import backgroundImage from '@/assets/webps/stage/background.webp';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  align-self: stretch;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 2.4rem;
  padding-bottom: 6.4rem;
`;
export const Title = styled.p`
  ${(props) => props.theme.fontStyles.basic.headline2};
  color: ${(props) => props.theme.colors.black};
`;
export const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
export const DayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${(props) => (props.selected ? props.theme.colors.hongikBlue : props.theme.colors.gray60)};
  span {
    display: block;
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
  }
`;
export const CardContainer = styled.div`
  display: flex;
  width: 33.5rem;
  flex-direction: column;
  gap: 3.2rem;
`;
export const Card = styled.div`
  height: 28.4rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardImage = styled.div`
  height: 22rem;
`;
export const CardDescription = styled.div`
  width: 30.7rem;
  height: 6.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray20};
  margin: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.p`
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.gray100};
`;
