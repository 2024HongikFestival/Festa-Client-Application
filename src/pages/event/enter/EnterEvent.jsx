import { useState, useEffect, Fragment } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import form from '@/assets/webps/event/form.webp';
import PhoneNumBox from '@/components/event/PhoneNumBox';

const EnterEvent = () => {
  const navigate = useNavigate();

  // input & textarea 상태 관리
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);

  // 전화번호 관련 상태
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [codeArr, setCodeArr] = useState(Array(11).fill('')); // 11자리로 초기화
  const _onChangeCode = (code) => {
    // setCodeArr값은 codeArr.length로 잘라줌
    setCodeArr(code.slice(0, codeArr.length));
  };

  // 이름 입력 관리
  const handleName = (e) => {
    setName(e.target.value);
  };

  // 후기 입력 관리
  const handleComment = (e) => {
    e.preventDefault();
    // 글자수 제한
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.slice(0, 100);
    }
    setTextCount(e.target.value.length);
    setComment(e.target.value);
  };

  // 응모 가능 여부 관리
  const isEntryAvailable = () => {
    // 전화번호 유효성 검사
    const isPhoneValid = codeArr.every((element) => element !== '');

    if (isPhoneValid) {
      let rawPhoneStr = codeArr.join('');
      const dash = '-';
      const phoneStr = rawPhoneStr.slice(0, 3) + dash + rawPhoneStr.slice(3, 7) + dash + rawPhoneStr.slice(7, 11);
      setPhone(phoneStr);
      console.log(phoneStr);
    }
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
        '/entries',
        {
          name: name,
          phone: phone,
          prize: 'A',
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
      // response.data.date를 state로 전달
      navigate('/event/submit', { state: { date: response.data.date } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isEntryAvailable();
  }, [name, codeArr]);

  useEffect(() => {
    if (codeArr.length !== 11 || codeArr.some((element) => element === '') || phone.length !== 13) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  }, [codeArr, phone]);

  return (
    <S.Wrapper>
      <S.Image src={form} alt="form" />
      <S.FormContainer>
        <form>
          <S.Section>
            <S.SectionText>이름을 알려주세요</S.SectionText>
            <S.Input type="text" placeholder="ex. 홍길동" onChange={handleName} value={name} />
          </S.Section>
          <S.Section>
            <S.SectionText>당첨 시 연락드릴 연락처를 적어주세요</S.SectionText>
            <S.PhoneContainer>
              {codeArr.map((item, index) => (
                <Fragment key={index}>
                  <PhoneNumBox
                    item={item}
                    index={index}
                    codeArr={codeArr}
                    onChange={_onChangeCode}
                    className={isPhoneValid ? ' active' : ''}
                  />
                  {(index === 2 || index === 6) && <S.Dash />}
                </Fragment>
              ))}
            </S.PhoneContainer>
          </S.Section>

          <S.Section className="last">
            <S.SectionText>
              축제 재밌게 즐기고 계신가요?
              <br />
              여러분들의 생생한 후기를 들려주세요! <span>(선택)</span>
            </S.SectionText>
            <S.TextAreaWrapper>
              <S.TextArea
                type="text"
                maxLength="100"
                placeholder="해당 내용은 당첨과는 무관해요"
                onChange={handleComment}
                value={comment}
              />
              <S.TextCount id="count">({textCount}/100)</S.TextCount>
            </S.TextAreaWrapper>
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
