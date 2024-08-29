import { useState, useEffect } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import form from '@/assets/webps/event/form.webp';
import PhoneNumBox from '@/components/event/PhoneNumBox';

const EnterEvent = () => {
  const [codeArr, setCodeArr] = useState(['', '', '', '', '', '', '', '', '', '', '']);
  const _onChangeCode = (code) => {
    // setCodeArr값은 codeArr.length로 잘라줍니다.
    setCodeArr(code.slice(0, codeArr.length));
  };

  const [textCount, setTextCount] = useState(0);
  const navigate = useNavigate();

  // input & textarea 상태 관리
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  // 이름 입력 관리
  const handleName = (e) => {
    setName(e.target.value);
  };

  // 전화번호 입력 관리 및 유효성 검사 => 로직 수정!!!!
  const handlePhone = (e) => {
    const rawPhone = e.target.value.replace(/-/g, ''); // 하이픈 제거한 번호
    const regex = /^[0-9\b]{0,11}$/; // 숫자만 허용, 최대 11자리
    if (regex.test(rawPhone)) {
      setPhone(rawPhone);

      // 유효성 검사 후 하이픈 자동 추가
      if (rawPhone.length === 10) {
        setPhone(rawPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      } else if (rawPhone.length === 11) {
        setPhone(rawPhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      }
    }
  };

  // 후기 입력 관리
  const handleComment = (e) => {
    e.preventDefault();
    setTextCount(e.target.value.length); // 글자수 세기
    setComment(e.target.value);
  };

  // 응모 가능 여부 관리
  const isEntryAvailable = () => {
    // 전화번호 유효성 검사
    const isPhoneValid = codeArr.forEach((element) => {
      if (element === '') {
        return false;
      } else {
        return true;
      }
    });
    if (name && isPhoneValid) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
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

  useEffect(() => {
    isEntryAvailable();
  }, [name, phone]);

  return (
    <S.Wrapper>
      <S.Image src={form} alt="form" />
      <S.FormContainer>
        <form>
          <S.Section>
            <S.SectionText>이름을 알려주세요.</S.SectionText>
            <S.Input type="text" placeholder="ex. 홍길동" onChange={handleName} value={name} />
          </S.Section>
          <S.Section>
            <S.SectionText>당첨 시 연락드릴 연락처를 적어주세요.</S.SectionText>
            {/* <S.Input type="text" placeholder="‘-’ 없이 숫자만 (ex. 01012341234)" onChange={handlePhone} value={phone} /> */}
            <S.PhoneContainer>
              {codeArr.map((item, index) => (
                <PhoneNumBox key={index} item={item} index={index} codeArr={codeArr} onChange={_onChangeCode} />
              ))}
            </S.PhoneContainer>
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
            <S.TextArea
              type="text"
              maxLength="100"
              placeholder="해당 내용은 당첨과는 무관해요"
              onChange={handleComment}
              value={comment}
            />
            <S.TextCount>({textCount}/100)</S.TextCount>
          </S.Section>
          {isAvailable ? (
            <S.EnterButton onClick={handleEventEntry}>
              <p>응모하기</p>
            </S.EnterButton>
          ) : (
            <S.DisableButton disabled>
              <p>응모하기</p>
            </S.DisableButton>
          )}
        </form>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default EnterEvent;
