import React, { useEffect, useReducer, useState } from 'react';
import { t } from 'i18next';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LocationModal } from '../../LostAndFoundPage/LostModal/LostModal';
import { presigendAxiosInstance } from '@/api/axios';
import { getGrapemeLength, truncateToMaxLength } from '@/utils/InputFilter';
import { getPresignedUrl, putPresignedUrl } from '@/utils/presignedUrl';
import * as S from './Register.styled';

const MAX_LENGTH_INPUT = 15;
const MAX_LENGTH_TEXTAREA = 100;

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
      const truncated = truncateToMaxLength(action.payload, MAX_LENGTH_INPUT);
      return {
        ...state,
        foundLocation: truncated,
        foundLocationLength: getGrapemeLength(truncated),
      };
    }

    case 'TRUNCATE_STORAGE': {
      const truncated = truncateToMaxLength(action.payload, MAX_LENGTH_INPUT);
      return {
        ...state,
        storageLocation: truncated,
        storageLocationLength: getGrapemeLength(truncated),
      };
    }

    case 'TRUNCATE_CONTENT': {
      const truncated = truncateToMaxLength(action.payload, MAX_LENGTH_TEXTAREA);
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
  const navigate = useNavigate();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [url, setUrl] = useState('');

  const [inputState, dispatch] = useReducer(reducer, initialState);
  const { foundLocation, storageLocation, content, foundLocationLength, storageLocationLength, contentLength } =
    inputState;

  useEffect(() => {
    const fetchPresignedUrl = async () => {
      const presignedUrl = await getPresignedUrl();
      if (!presignedUrl) {
        localStorage.removeItem('lost_access_token');
      }
      setUrl(presignedUrl);
    };
    fetchPresignedUrl();
  }, []);

  useEffect(() => {
    if (url) {
      putPresignedUrl(url, imgSrc);
    }
  }, [url]);

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

  const handleComplete = async () => {
    try {
      const response = await presigendAxiosInstance.post('/losts', {
        foundLocation: foundLocation,
        storageLocation: storageLocation,
        content: content,
        imageUrl: url.split('?')[0],
      });
      localStorage.removeItem('kakao_code');
      localStorage.removeItem('lost_access_token');
      navigate('/lost-and-found');
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert('인증 만료 시간이 지났습니다. 재인증 후 시도해주세요');
      navigate('/lost-and-found');
      window.location.reload();
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.RegisterMain>
          <S.Title>{t('AddLostAndFound.LostAndFoundReport')}</S.Title>

          <S.WarningBoxAndRegisterSection>
            <S.WarningBox>
              <S.WarningMainText>
                <Trans
                  i18nKey={'AddLostAndFound.KeepAtRiskItemsAtCenter'}
                  components={{ 1: <br />, 2: <span />, 3: <span onClick={() => setIsLocationModalOpen(true)} /> }}
                ></Trans>
              </S.WarningMainText>
              <S.WarningSubText>
                {t('AddLostAndFound.DoNotWriteIfDifficultToMove1')}
                &nbsp;<span>{t('AddLostAndFound.DoNotWriteIfDifficultToMove2')}</span>
              </S.WarningSubText>
            </S.WarningBox>

            <S.RegisterSection>
              <S.SectionTitle>{t('AddLostAndFound.FindingLostAndFound')}</S.SectionTitle>
              <S.RegisterArticle>
                <S.InputWrapper>
                  <S.InputText>{t('AddLostAndFound.FoundLocation')}</S.InputText>
                  <S.Input
                    value={foundLocation}
                    onChange={handleFoundChange}
                    placeholder={t('AddLostAndFound.FoundPlaceHolder')}
                  />
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.InputText>{t('AddLostAndFound.StoredLocation')}</S.InputText>
                  <S.InputWithWarn>
                    <S.Input
                      value={storageLocation}
                      onChange={handleStorageChange}
                      placeholder={t('AddLostAndFound.StoredPlaceHolder')}
                    />
                    <S.InputWarningTextBox>
                      <S.InputWarningIcon />
                      {t('AddLostAndFound.KeepValuablesAtCenter')}
                    </S.InputWarningTextBox>
                  </S.InputWithWarn>
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.InputText>
                    {t('AddLostAndFound.OptionalExplanation1')}
                    <span>{t('AddLostAndFound.OptionalExplanation2')}</span>
                  </S.InputText>
                  <S.InputWithCount>
                    <S.TextArea
                      value={content}
                      onChange={handleCotentChange}
                      placeholder={t('AddLostAndFound.PlaceholderText')}
                    />
                    <S.TextLength>{`(${contentLength}/${MAX_LENGTH_TEXTAREA})`}</S.TextLength>
                  </S.InputWithCount>
                </S.InputWrapper>

                <S.Picture src={imgSrc} />

                <S.BlueButton
                  $disabled={foundLocationLength < 1 || storageLocation < 1}
                  disabled={foundLocationLength < 1 || storageLocation < 1}
                  onClick={handleComplete}
                >
                  {t('AddLostAndFound.Complete')}
                </S.BlueButton>
              </S.RegisterArticle>
            </S.RegisterSection>
          </S.WarningBoxAndRegisterSection>
        </S.RegisterMain>
        <LocationModal isOpen={isLocationModalOpen} setIsOpen={setIsLocationModalOpen} />
      </S.Wrapper>
    </>
  );
};

export default Register;

Register.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
