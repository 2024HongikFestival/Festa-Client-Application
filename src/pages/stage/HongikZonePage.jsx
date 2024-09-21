import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // i18next import
import * as S from './styles/HongikZonePage';

import map from '@/assets/webps/hongikZone/hongikZoneMap.webp';

const HongikZonePage = () => {
  const { t } = useTranslation(); // useTranslation hook 사용

  return (
    <S.PageContainer>
      <S.Title>{t('hongikZonePage.title')}</S.Title>
      <S.BoxContainer>
        <S.Info>
          <S.TextBox>
            <S.SubTitle>{t('hongikZonePage.whatIsHongikZone')}</S.SubTitle>
            <S.List>
              <li>
                <Trans
                  i18nKey="hongikZonePage.hongikZoneDescription1"
                  components={{ blackHighlight: <S.BlackHighlight /> }}
                />
              </li>
              <li>{t('hongikZonePage.hongikZoneDescription2')}</li>
            </S.List>
          </S.TextBox>
          <S.TextBox>
            <S.SubTitle>{t('hongikZonePage.prepareForEntry')}</S.SubTitle>
            <S.List>
              <li>
                <Trans i18nKey="hongikZonePage.entryTime" components={{ blueHighlight: <S.BlueHighlight /> }} />
              </li>
              <li>
                <Trans
                  i18nKey="hongikZonePage.entryProcedure"
                  components={{ blueHighlight: <S.BlueHighlight />, br: <br /> }}
                />
              </li>
              <li>
                <Trans i18nKey="hongikZonePage.noTicketInfo" components={{ br: <br /> }} />
              </li>
            </S.List>
          </S.TextBox>
        </S.Info>
        <S.LocationBox>
          <S.LocationTitle>{t('hongikZonePage.locationTitle')}</S.LocationTitle>
          <S.Map src={map} alt="Map" />
        </S.LocationBox>
        <S.Info>
          <S.TextBox>
            <S.SubTitle>{t('hongikZonePage.knowBeforeEntry')}</S.SubTitle>
            <S.List>
              {t('hongikZonePage.safetyInstructions', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </S.List>
          </S.TextBox>
        </S.Info>
      </S.BoxContainer>
    </S.PageContainer>
  );
};

export default HongikZonePage;
