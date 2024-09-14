import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.4rem;
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
  width: 28.7rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const NoteTitle = styled.div`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.hongikBlue};
  display: flex;
  margin-bottom: 1.2rem;
`;

export const NoteContent = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Med}
  color: ${(props) => props.theme.colors.gray90};
`;

export const Hidden = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: white;
`;

export const NoteContentWrapper = styled.div`
  width: 28.7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MDContainer = styled.div`
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-bottom: 5.2rem;
`;
