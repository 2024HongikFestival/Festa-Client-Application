import { useState, useEffect, Fragment } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { axiosInstance } from '@/api/axios';
import { useTranslation } from 'react-i18next';
import PhoneNumBox from '@/components/event/PhoneNumBox';
import form from '@/assets/webps/event/form.webp';
import * as S from './styled';

const EnterEvent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  // input & textarea 상태 관리
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);

  // 전화번호 관련 상태
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [codeArr, setCodeArr] = useState(Array(11).fill(''));
  const _onChangeCode = (code) => {
    setCodeArr(code.slice(0, codeArr.length));
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.slice(0, 100);
    }
    setTextCount(e.target.value.length);
    setComment(e.target.value);
  };

  const isEntryAvailable = () => {
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
          prize: '티빙구독권',
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('event_access_token')}`,
          },
        }
      );
      console.log(response.data.message);
      localStorage.removeItem('kakao_code');
      localStorage.removeItem('event_access_token');
      console.log(response.data.data.date);
      navigate('/event/submit', { state: { date: response.data.data.date } });
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

  useEffect(() => {
    if (navigationType === 'POP') {
      navigate('/event');
    }
  }, [navigationType]);

  return (
    <S.Wrapper>
      <S.Image src={form} alt="form" />
      <S.FormContainer>
        <form>
          <S.Section>
            <S.SectionText>{t(`event.enter.name1`)}</S.SectionText>
            <S.Input type="text" placeholder={t(`event.enter.name2`)} onChange={handleName} value={name} />
          </S.Section>
          <S.Section>
            <S.SectionText>{t(`event.enter.phone`)}</S.SectionText>
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
              {t(`event.enter.comment1`)}
              <br />
              {t(`event.enter.comment2`)} <span>{t(`event.enter.comment3`)}</span>
            </S.SectionText>
            <S.TextAreaWrapper>
              <S.TextArea
                type="text"
                maxLength="100"
                placeholder={t(`event.enter.comment4`)}
                outline="none"
                onChange={handleComment}
                value={comment}
              />
              <S.TextCount id="count">({textCount}/100)</S.TextCount>
            </S.TextAreaWrapper>
          </S.Section>
          {isAvailable ? (
            <S.EnterButton onClick={handleEventEntry}>
              <p>{t(`event.enter.submit`)}</p>
            </S.EnterButton>
          ) : (
            <S.DisableButton disabled>
              <p>{t(`event.enter.submit`)}</p>
            </S.DisableButton>
          )}
        </form>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default EnterEvent;
