import { presigendAxiosInstance } from '@/api/axios';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './Register.styled';

const Register = ({ imgSrc }) => {
  //presigned URL 받아오는 로직
  const [url, setUrl] = useState('');

  const getPresignedUrl = async () => {
    try {
      const response = await presigendAxiosInstance.get('/losts/up');
      const presignedUrl = response.data.url;
      setUrl(presignedUrl);
    } catch (err) {
      console.log(err);
    }
  };

  //Base64 인코딩 값
  //-> atob를 통해 이진 데이터로 디코딩(JS에서는 이진 데이터를 1Byte 문자열로 나타냄)
  //-> 이를 유니코드값(a:65, b: 66 등등)으로 변경
  const dataURLtoBlob = (dataUrl) => {
    //MIME 타입과 Base64로 인코딩된 실제 데이터 분리
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]); //ASCII to Binary

    let n = bstr.length;
    const u8arr = new Uint8Array(n); //unsigned int 8bit arr

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    //Blob 객체로 만듬(preSignedUrl에 저장할 형식)
    return new Blob([u8arr], { type: mime });
  };

  const putPresignedUrl = async () => {
    try {
      const blob = dataURLtoBlob(imgSrc);
      await axios.put(url, blob, {
        headers: {
          'Content-Type': blob.type,
        },
      });
      console.log('이미지 업로드 성공');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPresignedUrl();
  }, []);

  useEffect(() => {
    if (url) {
      putPresignedUrl();
    }
  }, [url]);

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
              <S.Input placeholder={`ex. 운동장 구령대 아래 / 학생회관 앞`} />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.InputText>어디에 보관하셨나요?</S.InputText>
              <S.InputWithWarn>
                <S.Input placeholder={`ex. 발견 위치 그대로 / 학생회관 1층 정수기 옆`} />
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
                  placeholder={`ex. 홍X동님 학생증 발견했습니다 / A동 앞에 산리오 키링 떨어져있어요 주인 찾아가세요~`}
                />
                <S.TextLength>{`(0/100)`}</S.TextLength>
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
