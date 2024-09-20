import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  padding-top: 2.4rem;
  padding-bottom: 6.4rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 2.4rem;
  gap: 2.8rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.white};
`;
export const LocationBox = styled.div`
  width: 100%;
  display: flex;
  padding: 2.4rem 0 2.6rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 1.6rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.white};
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};

  &.gray100 {
    color: ${(props) => props.theme.colors.gray100};
  }
`;
export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.9rem;
  li {
    ${(props) => props.theme.fontStyles.basic.body2Med};
    color: ${(props) => props.theme.colors.gray90};
    margin-bottom: 0.4rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;
export const BlackHighlight = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  color: ${(props) => props.theme.colors.gray70};
`;
export const BlueHighlight = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  color: ${(props) => props.theme.colors.hongikBlue};
`;
export const LocationTitle = styled.p`
  ${(props) => props.theme.fontStyles.main.headline6};
  color: ${(props) => props.theme.colors.gray100};
`;
export const Map = styled.div`
  width: 33.5rem;
  height: 25rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray30};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray30};
`;
