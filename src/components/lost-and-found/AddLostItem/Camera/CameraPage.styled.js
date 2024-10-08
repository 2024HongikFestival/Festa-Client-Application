import styled from 'styled-components';
import CameraBtn from '@/assets/webps/lost/CameraBtn.webp';

export const CameraPageWrapper = styled.div`
  width: 100%;
  max-width: 76.8rem;
  min-width: 37.5rem;
  min-height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CameraNoticeText = styled.div`
  margin-top: 6.2rem;
  margin-bottom: 2.8rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.main.headline6};
  text-align: center;
  white-space: pre-line;
`;

export const Video = styled.video`
  width: 28.7rem;
  height: 28.7rem;

  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.gray30};
  background-color: ${({ theme }) => theme.colors.gray5};
  object-fit: cover;
`;

export const CaptureButton = styled.button`
  margin-top: 11.7rem;
  margin-bottom: 7.7rem;
  @media (max-height: 716px) {
    margin-top: 5.5rem;
  }

  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;

  background-image: url(${CameraBtn});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:active {
    width: 7rem;
    height: 7rem;
  }
`;

export const ErrorMesssage = styled.p`
  color: red;
  ${({ theme }) => theme.fontStyles.basic.captionBold};
`;
