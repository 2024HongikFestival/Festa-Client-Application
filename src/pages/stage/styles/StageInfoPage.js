import styled from 'styled-components';
import backgroundImage from '@/assets/webps/stageInfo/background.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 2.8rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 2.8rem;
  padding-bottom: 6.4rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fontStyles.main.headline2};
  text-align: center;
`;

export const SelectionBar = styled.div`
  width: 33.5rem;
  height: 5.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const SelectionButton = styled.button`
  width: 15.8rem;
  padding: 1rem 2rem; /* 삭제 가능 */
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) =>
    props.active ? props.theme.colors.hongikBlue : 'rgba(107, 114, 118, 0.6)'}; /* 투명도땜에 rgba 사용 */
  background-color: ${(props) => (props.active ? 'rgba(24, 51, 219, 0.05)' : 'transparent')};
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
