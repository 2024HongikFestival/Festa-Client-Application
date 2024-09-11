import styled, { css } from 'styled-components';

export const FooterLayout = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  z-index: 0;
`;

export const UpBtn = styled.div`
  z-index: 100;
  cursor: pointer;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  background: ${({ className }) =>
    className === 'floatingDaedongje' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: ${({ $isAtFooter }) => ($isAtFooter ? 'absolute' : 'fixed')};
  bottom: ${({ $isAtFooter }) => ($isAtFooter ? 'inherit' : '5.2rem')};
  margin-top: ${({ $isAtFooter }) => ($isAtFooter ? '-4.3rem' : 'inherit')};
  right: 2rem;
  transition: bottom 0.3s ease;

  img {
    width: 1.7rem;
    padding-right: 0.1rem;
  }
  /* ::before로 그라데이션 테두리 추가 */
  &::before {
    content: '';
    position: absolute;
    top: -0.1rem;
    left: -0.1rem;
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    padding: 0.1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  @media (min-width: 768px) {
    right: ${({ $isAtFooter }) => ($isAtFooter ? '2rem' : 'calc((100vw - 768px) / 2 + 2rem)')};
  }
`;

export const FloatingBtn = styled.div`
  z-index: 100;
  margin: 0 auto;
  cursor: pointer;
  width: 10.6rem;
  height: 4.3rem;
  border-radius: 50px;
  background: ${({ className }) =>
    className === 'floatingDaedongje' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: ${({ $isAtFooter }) => ($isAtFooter ? 'absolute' : 'fixed')};
  bottom: ${({ $isAtFooter }) => ($isAtFooter ? '' : '5.2rem')};
  margin-top: ${({ $isAtFooter }) => ($isAtFooter ? '-4.4rem' : '')};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.3s ease;

  span {
    color: ${(props) => props.theme.colors.gray5};
    ${(props) => props.theme.fontStyles.basic.body2Med};
  }

  /* ::before로 그라데이션 테두리 추가 */
  &::before {
    content: '';
    position: absolute;
    top: -0.1rem;
    left: -0.1rem;
    width: 10.6rem;
    height: 4.3rem;
    border-radius: 50px;
    padding: 0.1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Mangae = styled.div`
  margin-top: 3.2rem;
  margin-left: 3.2rem;
  margin-bottom: 4.8rem;
  width: 9.85rem;
  height: 4rem;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Flame = styled.div`
  margin-top: 2.4rem;
  margin-left: 2.45rem;
  margin-bottom: 4rem;
  width: 11.5rem;
  height: 3.3rem;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Contributor = styled.div`
  margin-left: 3.2rem;
  margin-bottom: 1.2rem;
  height: 1.8rem;
  z-index: 1;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionMed};
    font-weight: 300;
  }
  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      span {
        color: ${(props) => props.theme.colors.gray10};
      }
    `};
`;
export const LikelionBtn = styled.div`
  margin-left: 3.2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;

  .likelion {
    width: 4.9rem;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
    margin-right: 2rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  .toLikelion {
    cursor: pointer;
    ${(props) => props.theme.fontStyles.basic.body2Med};
    font-weight: 400;
    margin-right: 0.6rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  img {
    cursor: pointer;
    width: 0.6rem;
    height: 1rem;
  }
`;

export const GaehwaBtn = styled.div`
  margin-left: 3.2rem;
  margin-top: 1.2rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;

  .gaehwa {
    width: 4.9rem;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
    margin-right: 2rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  .toGaehwa {
    cursor: pointer;
    ${(props) => props.theme.fontStyles.basic.body2Med};
    font-weight: 400;
    margin-right: 0.6rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  img {
    cursor: pointer;
    width: 0.6rem;
    height: 1rem;
  }
`;

export const InstaContainer = styled.div`
  margin-left: 3.2rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionMed};
    font-weight: 300;
    margin-bottom: 1.15rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray10};
      `};
  }

  a {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1.1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Instagrams = styled.div`
  display: flex;
  margin-bottom: 6.65rem;
`;

export const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 34.9rem;
  pointer-events: none;
  background-color: transparent;
  background: linear-gradient(
    180deg,
    #010304 10.06%,
    rgba(1, 3, 4, 0.1) 41.26%,
    rgba(1, 3, 4, 0.45) 62.62%,
    #010304 99.93%
  );
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 99%; // 선 생김 이슈 해결용
  object-fit: cover;
  z-index: -1;
`;
