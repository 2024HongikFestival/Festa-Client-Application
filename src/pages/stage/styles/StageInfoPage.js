import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding-top: 2.8rem;
  padding-bottom: 6.4rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fontStyles.main.headline2};
  text-align: center;
  margin-bottom: 2.8rem;
`;

export const SelectionBar = styled.div`
  position: relative;
  width: 33.5rem;
  height: 5.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 2.4rem;
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

  /* Transient Prop으로 탭에 따라 슬라이딩 배경의 위치를 설정 */
  transform: ${({ $activeTab }) => ($activeTab === 'schedule' ? 'translateX(0)' : 'translateX(15.8rem)')};
`;

export const SelectionButton = styled.button`
  width: 15.8rem;
  padding: 0.6rem 2rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};

  /* 여기서 props를 사용하여 Transient Props로 접근 */
  color: ${(props) => (props.$active ? props.theme.colors.hongikBlue : 'rgba(107, 114, 118, 0.6)')};
  background-color: transparent;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: color 0.25s ease;
`;
