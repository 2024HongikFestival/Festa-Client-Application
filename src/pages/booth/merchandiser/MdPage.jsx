import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/error.webp';
import MD from '@/components/booth/MD';
import { MdList } from '@/constants/booth/mdList';
import * as S from './MdPage.styled';

export default function MdPage() {
  return (
    <S.Container>
      <PageTitle title="MD 상품" />
      {/* 구매 위치 및 현장 구매만 가능함 알림 컴포넌트 */}
      <ContentContainer>
        <S.InfoText>
          <S.Span>홍문관(R동) 앞 & 아트앤디자인밸리 측면</S.Span>
          에서
          <br /> 구매하실 수 있습니다!
        </S.InfoText>
        <S.GuideWrapper>
          <S.IconWrapper>
            <S.Icon src={error} alt="errer" />
          </S.IconWrapper>
          <S.Caption>현장 구매만 가능합니다.</S.Caption>
        </S.GuideWrapper>
      </ContentContainer>
      {/* MD 컴포넌트 */}
      <S.MDContainer>
        {MdList.map((item, index) => (
          <MD key={index} img={item.img} name={item.name} price={item.price} width={item.width} height={item.height} />
        ))}
      </S.MDContainer>
      {/* 유의사항 컴포넌트 */}
      <ContentContainer>
        <S.NoteContainer>
          <S.NoteTitle>현장 구매시 확인해 주세요!</S.NoteTitle>
          <S.NoteContentWrapper>
            <S.NoteContent>&nbsp;• 계좌 이체 및 현금 결제만 가능합니다</S.NoteContent>
            <S.NoteContent>&nbsp;• 구매 완료 시 환불, 교환, 취소 불가능합니다</S.NoteContent>
            <S.NoteContent>
              &nbsp;• 불량품은 현장에서 확인 후 <br />
              <S.Hidden>•&nbsp;</S.Hidden> 바로 현장 관리 인원에게 말씀해 주시기 바랍니다
            </S.NoteContent>
          </S.NoteContentWrapper>
        </S.NoteContainer>
      </ContentContainer>
    </S.Container>
  );
}
