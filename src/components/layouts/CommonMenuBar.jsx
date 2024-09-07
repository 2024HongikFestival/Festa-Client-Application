import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import globe from '@/assets/webps/layouts/globe.webp';
import globeGray from '@/assets/webps/layouts/globeGray.webp';
import * as S from '@/components/layouts/HeaderStyles';

const CommonMenuBar = ({ className, nav, closeMenu, flame, commonMenuRef }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isKorActive, setIsKorActive] = useState(localStorage.getItem('language') === 'ko');
  const { t, i18n } = useTranslation();

  // 대동제 메뉴바 아코디언 토글
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // language toggle
  const clickHandler = (lng) => {
    setIsKorActive(lng === 'ko');
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = isKorActive ? 'en' : 'ko';
    clickHandler(newLanguage);
  };

  // common 메뉴바 열렸을 때 바깥 클릭시 메뉴바 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commonMenuRef.current && !commonMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeMenu, commonMenuRef]);

  return (
    <S.MenuBar ref={commonMenuRef} $flame={flame} className={className}>
      <S.MenuList $flame={flame}>
        <S.MenuItem $flame={flame} $isOpen={openAccordion === 0}>
          {flame ? (
            <span
              onClick={() => {
                nav('/flame/map');
                closeMenu();
              }}
            >
              {t('layouts.header.toFlameSitemap')}
            </span>
          ) : (
            <span
              onClick={() => {
                nav('/map');
                closeMenu();
                toggleAccordion(0);
              }}
            >
              {t('layouts.header.toRoadmap')}
            </span>
          )}
        </S.MenuItem>
        <S.Divider $flame={flame} />
        <S.MenuItem $flame={flame} $isOpen={openAccordion === 1}>
          {flame ? (
            <span
              onClick={() => {
                nav('/flame/timetable');
                closeMenu();
              }}
            >
              {t('layouts.header.toFlameTimeTable')}
            </span>
          ) : (
            <span onClick={() => toggleAccordion(1)}>{t('layouts.header.toStage')}</span>
          )}
        </S.MenuItem>
        {openAccordion === 1 && (
          <S.AccordionContent>
            <S.SubMenuItem
              onClick={() => {
                nav('/lineup');
                closeMenu();
              }}
            >
              {t('layouts.header.toLineUp')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/stage-info');
                closeMenu();
              }}
            >
              {t('layouts.header.toStageInfo')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/hongik-zone');
                closeMenu();
              }}
            >
              {t('layouts.header.toHongikZone')}
            </S.SubMenuItem>
          </S.AccordionContent>
        )}
        <S.Divider $flame={flame} />
        <S.MenuItem $flame={flame} $isOpen={openAccordion === 2}>
          {flame ? (
            <span
              onClick={() => {
                nav('/flame/reservation');
                closeMenu();
              }}
            >
              {t('layouts.header.toFlameReservation')}
            </span>
          ) : (
            <span onClick={() => toggleAccordion(2)}>{t('layouts.header.toBooth')}</span>
          )}
        </S.MenuItem>
        {openAccordion === 2 && (
          <S.AccordionContent>
            <S.SubMenuItem
              onClick={() => {
                nav('/booth');
                closeMenu();
              }}
            >
              {t('layouts.header.toDrink')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/fleamarket');
                closeMenu();
              }}
            >
              {t('layouts.header.toFleaMarket')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/promotion');
                closeMenu();
              }}
            >
              {t('layouts.header.toPromotion')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/md');
                closeMenu();
              }}
            >
              {t('layouts.header.toMd')}
            </S.SubMenuItem>
          </S.AccordionContent>
        )}
        <S.Divider $flame={flame} />
        <S.MenuItem $flame={flame} $isOpen={openAccordion === 3}>
          {flame ? (
            <span
              onClick={() => {
                nav('/flame/lineup');
                closeMenu();
              }}
            >
              {t('layouts.header.toLineUp')}
            </span>
          ) : (
            <span onClick={() => toggleAccordion(3)}>{t('layouts.header.toFacilityInfo')}</span>
          )}
        </S.MenuItem>
        {openAccordion === 3 && (
          <S.AccordionContent>
            <S.SubMenuItem
              onClick={() => {
                nav('/facilities');
                closeMenu();
              }}
            >
              {t('layouts.header.toFacilities')}
            </S.SubMenuItem>
            <S.SubMenuItem
              onClick={() => {
                nav('/lost-and-found');
                closeMenu();
              }}
            >
              {t('layouts.header.toLostAndFound')}
            </S.SubMenuItem>
          </S.AccordionContent>
        )}
        <S.Divider $flame={flame} />
        <S.MenuItem $flame={flame} $isOpen={openAccordion === 4}>
          {flame ? (
            <span
              onClick={() => {
                nav('/flame/md');
                closeMenu();
              }}
            >
              {t('layouts.header.toMd')}
            </span>
          ) : (
            <span
              onClick={() => {
                nav('/event/:eventId');
                closeMenu();
                toggleAccordion(4);
              }}
            >
              {t('layouts.header.toEvent')}
            </span>
          )}
        </S.MenuItem>
        {flame && (
          <>
            <S.Divider $flame={flame} />
            <S.MenuItem $flame={flame}>
              <span
                onClick={() => {
                  nav('/flame/promotion');
                  closeMenu();
                }}
              >
                {t('layouts.header.toPromotion')}
              </span>
            </S.MenuItem>
          </>
        )}
      </S.MenuList>
      <S.LanguageWrapper>
        <S.Divider $flame={flame} />
        <S.LanguageBox $flame={flame}>
          {flame ? <img src={globeGray} alt="globeGray" /> : <img src={globe} alt="globe" />}
          <span className="language">Language</span>
          <S.ToggleBox $flame={flame} onClick={toggleLanguage}>
            <S.Slider $flame={flame} $isKorActive={isKorActive} />
            <S.KorBox $flame={flame} $isKorActive={isKorActive}>
              <span>KOR</span>
            </S.KorBox>
            <S.EngBox $flame={flame} $isKorActive={!isKorActive}>
              <span>ENG</span>
            </S.EngBox>
          </S.ToggleBox>
        </S.LanguageBox>
      </S.LanguageWrapper>
    </S.MenuBar>
  );
};

CommonMenuBar.propTypes = {
  nav: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  flame: PropTypes.bool,
  commonMenuRef: PropTypes.object.isRequired,
};

export default CommonMenuBar;
