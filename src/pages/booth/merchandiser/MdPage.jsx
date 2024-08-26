import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/error.webp';
import MD from '@/components/booth/MD';
import { MdList } from '@/assets/static/booth/mdList';

export default function MdPage() {
  return (
    <Container>
      <PageTitle title="MD 상품" />
      {/* 구매 위치 및 현장 구매만 가능함 알림 컴포넌트 */}
      <ContentContainer>
        <InfoText>
          <Span>홍문관(R동) 앞 & 아트앤디자인밸리 측면</Span>
          에서
          <br /> 구매하실 수 있습니다!
        </InfoText>
        <GuideWrapper>
          <IconWrapper>
            <Icon src={error} alt="errer" />
          </IconWrapper>
          <Caption>현장 구매만 가능합니다.</Caption>
        </GuideWrapper>
      </ContentContainer>
      {/* MD 컴포넌트 */}
      <MDContainer>
        {/* <ContentContainer>
          <p>md</p>
        </ContentContainer> */}
        {MdList.map((item, index) => (
          <MD key={index} img={item.img} name={item.name} price={item.price} width={item.width} height={item.height} />
        ))}
      </MDContainer>
      {/* 유의사항 컴포넌트 */}
      <ContentContainer>
        <NoteContainer>
          <NoteTitle>현장 구매시 확인해주세요!</NoteTitle>
          <NoteContentWrapper>
            <NoteContent>&nbsp;• 계좌 이체 및 현금 결제만 가능합니다</NoteContent>
            <NoteContent>&nbsp;• 구매 완료 시 환불, 교환, 취소 불가능합니다</NoteContent>
            <NoteContent>
              &nbsp;• 불량품은 현장에서 확인 후 바로 <br />
              <Hidden>•&nbsp;</Hidden> 현장 관리 인원에게 말씀해 주시기 바랍니다
            </NoteContent>
          </NoteContentWrapper>
        </NoteContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const IconWrapper = styled.div`
  width: 1.536rem;
  height: 1.536rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 1.28rem;
  height: 1.28rem;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.936rem;
  height: 1.8rem;
  margin-bottom: 1.6rem;
`;

const Caption = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: #bfc2c8;
`;

const NoteContainer = styled.div`
  width: 28.7rem;
  height: 13.1rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const NoteTitle = styled.div`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.hongikBlue};
  display: flex;
  margin-bottom: 1.2rem;
`;

const NoteContent = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Med}
  color: #2C2D30;
`;

const Hidden = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: white;
`;

const NoteContentWrapper = styled.div`
  width: 28.7rem;
  height: 9.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MDContainer = styled.div`
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-bottom: 5.2rem;
`;
