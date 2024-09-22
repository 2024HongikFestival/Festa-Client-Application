import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.4rem;
`;

export const InfoText = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fontStyles.basic.body1Med}; /* "에서"에 적용될 스타일 */
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

export const IconWrapper = styled.div`
  width: 1.536rem;
  height: 1.536rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.28rem;
  height: 1.28rem;
  margin-right: 0.4rem;
`;

export const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 12.936rem; */
  height: 1.8rem;
  margin-bottom: 1.6rem;
`;

export const Caption = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray30};
`;

export const NoteContainer = styled.div`
  /* width: 30rem; */
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
`;

export const NoteTitle = styled.div`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.hongikBlue};
  display: flex;
  margin-bottom: 1.2rem;
`;

export const NoteContent = styled.p`
  position: relative;
  margin-left: 1.9rem;
  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fontStyles.basic.body2Med};
  line-height: 1.5;

  &::before {
    content: '•';
    position: absolute;
    left: -1.2rem;
    top: 0; /* 점을 첫 번째 줄과 정렬합니다 */
    font-size: 1.2rem; /* 12px -> 1.2rem */
    color: ${(props) => props.theme.colors.gray90};
  }
`;

export const Hidden = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: white;
`;

export const NoteContentWrapper = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem; /* 4px -> 0.4rem */
  align-self: stretch;
`;

export const MDContainer = styled.div`
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-bottom: 5.2rem;
`;
