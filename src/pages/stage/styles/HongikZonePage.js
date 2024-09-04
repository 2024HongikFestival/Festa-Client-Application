import styled from 'styled-components';
import backgroundImage from '@/assets/webps/stage/background.webp';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  padding-top: 2.4rem;
  padding-bottom: 6.4rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Title = styled.p`
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fontStyles.main.headline2};
  text-align: center;
`;
export const BoxContainer = styled.div`
  display: flex;
  width: 33.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 2.4rem;
  gap: 2.8rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.white};
`;
export const TextBox = styled.div`
  display: flex;
`;
