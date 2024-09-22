import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import RenderMenuItem from '@/components/layouts/RenderMenuItem';
import { useUpdateBeforeHeight } from '@/components/layouts/useUpdateBeforeHeight';
import { commonMenuItems, flameMenuItems } from '@/constants/layouts/menuItems';
import * as S from '@/components/layouts/HeaderStyles';
import globe from '@/assets/webps/layouts/globe.webp';
import globeGray from '@/assets/webps/layouts/globeGray.webp';

const CommonMenuBar = ({ className, nav, closeMenu, flame, commonMenuRef }) => {
  const { t, i18n } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isKorActive, setIsKorActive] = useState(true);

  // flame ::before 스크롤 시 늘어나게
  useUpdateBeforeHeight(commonMenuRef);

  const toggleLanguage = () => {
    const newLanguage = isKorActive ? 'en' : 'ko';
    setIsKorActive(!isKorActive);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // 렌더링 초기 언어 ko로 설정
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'ko';
    i18n.changeLanguage(storedLanguage);
    setIsKorActive(storedLanguage === 'ko');
  }, [i18n]);

  return (
    <S.MenuBar ref={commonMenuRef} $flame={flame} className={className}>
      <S.MenuList $flame={flame}>
        {commonMenuItems.map((item, index) => (
          <RenderMenuItem
            key={index}
            item={item}
            index={index}
            openAccordion={openAccordion}
            setOpenAccordion={setOpenAccordion}
            flame={flame}
            nav={nav}
            closeMenu={closeMenu}
            t={t}
          />
        ))}
        {flame &&
          flameMenuItems.map((item, index) => (
            <RenderMenuItem
              key={index + commonMenuItems.length}
              item={item}
              index={index + commonMenuItems.length}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
              flame={flame}
              nav={nav}
              closeMenu={closeMenu}
              t={t}
            />
          ))}
      </S.MenuList>
      <S.LanguageWrapper>
        <S.Divider $flame={flame} />
        <S.LanguageBox $flame={flame}>
          {flame ? <img src={globeGray} alt="globeGray" /> : <img src={globe} alt="globe" />}
          <span className="language">Language</span>
          <S.ToggleBox $flame={flame} onClick={toggleLanguage}>
            <S.Slider $flame={flame} $isKorActive={isKorActive} />
            <S.LanguageItem $flame={flame} $isKorActive={isKorActive}>
              <span>KOR</span>
            </S.LanguageItem>
            <S.LanguageItem $flame={flame} $isKorActive={!isKorActive} $isEng>
              <span>ENG</span>
            </S.LanguageItem>
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
