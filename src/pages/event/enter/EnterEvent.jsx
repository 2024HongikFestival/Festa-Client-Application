import { useState, useEffect } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import form from '@/assets/webps/event/form.webp';

const EnterEvent = () => {
  const [textCount, setTextCount] = useState(0);
  const navigate = useNavigate();

  // input & textarea 상태 관리
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  // 이름 입력 관리
  const handleName = (e) => {
    setName(e.target.value);
  };
  // 전화번호 입력 관리
  const handlePhone = (e) => {
    // 유효성 검사
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  // 후기 입력 관리
  const handleComment = (e) => {
    e.preventDefault();
    setTextCount(e.target.value.length); // 글자수 세기
    setComment(e.target.value);
  };

  const handleEventEntry = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `/events/entries`,
        {
          name: name,
          phone: phone,
          // prize
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('event_access_token')}`,
          },
        }
      );
      console.log(response.data.message);
      // 응모 완료 시 응모 관련 localStorage 초기화 후 응모 완료 페이지로 이동
      localStorage.removeItem('kakao_code');
      localStorage.removeItem('event_access_token');
      navigate('/event/submit');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // 전화번호 하이픈 자동 생성
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phone.length === 13) {
      setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phone]);

  return (
    <S.Wrapper>
      <S.Image src={form} alt="form" />
      <S.FormContainer>
        <form>
          <S.Section>
            <S.SectionText>이름</S.SectionText>
            <S.Input type="text" placeholder="ex. 홍길동" onChange={handleName} value={name} />
          </S.Section>
          <S.Section>
            <S.SectionText>당첨 시 연락처</S.SectionText>
            <S.Input type="text" placeholder="‘-’ 없이 숫자만 (ex. 01012341234)" onChange={handlePhone} value={phone} />
          </S.Section>
          <S.ItemSection>
            <S.SectionText>받고 싶은 선물을 골라주세요!</S.SectionText>
            {/* 경품 확정 X */}
            <S.ItemContainer>
              <S.Item>
                <S.ItemCard></S.ItemCard>
                <S.ItemName>물품 이름</S.ItemName>
              </S.Item>
              <S.Item>
                <S.ItemCard></S.ItemCard>
                <S.ItemName>물품 이름</S.ItemName>
              </S.Item>
              <S.Item>
                <S.ItemCard></S.ItemCard>
                <S.ItemName>물품 이름</S.ItemName>
              </S.Item>
              <S.Item>
                <S.ItemCard></S.ItemCard>
                <S.ItemName>물품 이름</S.ItemName>
              </S.Item>
            </S.ItemContainer>
          </S.ItemSection>
          <S.Section>
            <S.SectionText>
              축제 재밌게 즐기고 계신가요?
              <br />
              여러분들의 생생한 후기를 들려주세요! (선택)
            </S.SectionText>
            <S.TextArea type="text" maxLength="100" onChange={handleComment} value={comment} />
            <S.TextCount>({textCount}/100)</S.TextCount>
          </S.Section>
          <S.EnterButton onClick={handleEventEntry}>
            <p>응모 완료</p>
          </S.EnterButton>
        </form>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default EnterEvent;
