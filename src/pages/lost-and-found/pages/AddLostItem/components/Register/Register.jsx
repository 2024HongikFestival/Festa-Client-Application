import { getGrapemeLength, truncateToMaxLength } from '@/utils/InputFilter';
import { getPresignedUrl, putPresignedUrl } from '@/utils/presignedUrl';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useState } from 'react';
import * as S from './Register.styled';

const initialState = {
  foundLocation: '',
  storageLocation: '',
  content: '',
  foundLocationLength: 0,
  storageLocationLength: 0,
  contentLength: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FOUND':
      return { ...state, foundLocation: action.payload, foundLocationLength: getGrapemeLength(action.payload) };
    case 'UPDATE_STORAGE':
      return { ...state, storageLocation: action.payload, storageLocationLength: getGrapemeLength(action.payload) };
    case 'UPDATE_CONTENT':
      return { ...state, content: action.payload, contentLength: getGrapemeLength(action.payload) };
    case 'TRUNCATE_FOUND': {
      const truncated = truncateToMaxLength(action.payload, 12);
      return {
        ...state,
        foundLocation: truncated,
        foundLocationLength: getGrapemeLength(truncated),
      };
    }

    case 'TRUNCATE_STORAGE': {
      const truncated = truncateToMaxLength(action.payload, 12);
      return {
        ...state,
        storageLocation: truncated,
        storageLocationLength: getGrapemeLength(truncated),
      };
    }

    case 'TRUNCATE_CONTENT': {
      const truncated = truncateToMaxLength(action.payload, 100);
      return {
        ...state,
        content: truncated,
        contentLength: getGrapemeLength(truncated),
      };
    }

    default:
      throw new Error('Unknown action type!');
  }
};

const Register = ({ imgSrc }) => {
  //해당 url은 미리 이미지를 등록한 뒤 해당 url을 서버에 api 요청을 보내는데 사용됨.
  const [url, setUrl] = useState('');

  //input(3가지) 상태 관리 중앙화
  const [inputState, dispatch] = useReducer(reducer, initialState);
  const { foundLocation, storageLocation, content, foundLocationLength, storageLocationLength, contentLength } =
    inputState;

  useEffect(() => {
    const presignedUrl = getPresignedUrl();
    setUrl(presignedUrl);
  }, []);

  useEffect(() => {
    if (url) {
      putPresignedUrl(url, imgSrc);
    }
  }, [url]);

  useEffect(() => {
    console.log(foundLocationLength);
    console.log(storageLocationLength);
    console.log(contentLength);
  }, [inputState]);

  const handleFoundChange = (e) => {
    const value = e.target.value;
    dispatch({ type: 'TRUNCATE_FOUND', payload: value });
  };

  const handleStorageChange = (e) => {
    const value = e.target.value;
    dispatch({ type: 'TRUNCATE_STORAGE', payload: value });
  };

  const handleCotentChange = (e) => {
    const value = e.target.value;
    dispatch({ type: 'TRUNCATE_CONTENT', payload: value });
  };

  return (
    <S.Wrapper>
      <S.RegisterMain>
        <S.Title>분실물 제보</S.Title>

        <S.WarningBox>
          <S.WarningMainText>
            도난 위험이 있는 물건은
            <br />
            <span>
              <span>분실물 센터</span>에 보관
            </span>
            해 주시기 바랍니다
          </S.WarningMainText>
          <S.WarningSubText>
            ※ 센터로 이동이 어렵다면&nbsp; <span>글을 작성하지 말아주세요 </span>
          </S.WarningSubText>
        </S.WarningBox>

        <S.RegisterSection>
          <S.SectionTitle>분실물 찾아주기 ✋🏻</S.SectionTitle>
          <S.RegisterArticle>
            <S.InputWrapper>
              <S.InputText>어디서 발견하셨나요?</S.InputText>
              <S.Input
                value={foundLocation}
                onChange={handleFoundChange}
                placeholder={`ex. 운동장 구령대 아래 / 학생회관 앞`}
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.InputText>어디에 보관하셨나요?</S.InputText>
              <S.InputWithWarn>
                <S.Input
                  value={storageLocation}
                  onChange={handleStorageChange}
                  placeholder={`ex. 발견 위치 그대로 / 학생회관 1층 정수기 옆`}
                />
                <S.InputWarningTextBox>
                  <S.InputWarningIcon />
                  전자기기, 카드, 지갑 등은 분실물 센터에 보관
                </S.InputWarningTextBox>
              </S.InputWithWarn>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.InputText>
                필요 시 설명도 적어주세요! <span>(선택)</span>
              </S.InputText>
              <S.InputWithCount>
                <S.TextArea
                  value={content}
                  onChange={handleCotentChange}
                  placeholder={`ex. 홍X동님 학생증 발견했습니다 / A동 앞에 산리오 키링 떨어져있어요 주인 찾아가세요~`}
                />
                <S.TextLength>{`(${contentLength}/100)`}</S.TextLength>
              </S.InputWithCount>
            </S.InputWrapper>

            <S.Picture src={imgSrc} />

            <S.BlueButton>완료</S.BlueButton>
          </S.RegisterArticle>
        </S.RegisterSection>
      </S.RegisterMain>
    </S.Wrapper>
  );
};

export default Register;

Register.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
