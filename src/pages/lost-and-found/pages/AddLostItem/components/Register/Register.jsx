import PropTypes from 'prop-types';
import React from 'react';
import * as S from './Register.styled';

const Register = ({ imgSrc }) => {
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
