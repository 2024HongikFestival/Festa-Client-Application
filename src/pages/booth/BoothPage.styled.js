import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6.4rem;
`;

export const ForGapWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
`;

export const MapImage = styled.img`
  width: 33.5rem;
  height: 25.2rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid #bfc2c8;
  border-bottom: 0.1rem solid #bfc2c8;
`;

export const Btn = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 25rem;
  height: 3rem;
  background-color: lightpink;
  border-radius: 1rem;
  border: solid 0.1rem gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const SelectionBar = styled.div`
  position: relative; /* 슬라이딩 배경이 절대 위치로 작동하기 위한 상대 위치 */
  width: 33.5rem;
  height: 5.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ActiveBackground = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: 15.8rem;
  height: 4rem;
  background-color: rgba(24, 51, 219, 0.05);
  border-radius: 3rem;
  transition: transform 0.25s ease;

  /* 탭에 따라 슬라이딩 배경의 위치를 설정 */
  transform: ${({ $activeTab }) => ($activeTab === 'pub' ? 'translateX(0)' : 'translateX(15.8rem)')};
`;

export const SelectionButton = styled.button`
  width: 15.8rem;
  padding: 0.6rem 2rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.hongikBlue : 'rgba(107, 114, 118, 0.6)')};
  background-color: transparent; /* 버튼 자체는 투명하게 유지 */
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: color 0.25s ease;
`;
