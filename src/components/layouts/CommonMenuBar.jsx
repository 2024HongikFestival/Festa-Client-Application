import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import globe from '@/assets/webps/layouts/globe.webp';
import globeGray from '@/assets/webps/layouts/globeGray.webp';
import * as S from '@/components/layouts/HeaderStyles';
import { commonMenuItems, flameMenuItems } from '@/constants/layouts/menuItems';
import RenderMenuItem from '@/components/layouts/RenderMenuItem';

const CommonMenuBar = ({ className, nav, closeMenu, flame, commonMenuRef }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isKorActive, setIsKorActive] = useState(localStorage.getItem('language') === 'ko');
  const { t, i18n } = useTranslation();

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

  const useUpdateBeforeHeight = (menuRef) => {
    useEffect(() => {
      const updateBeforeHeight = () => {
        if (menuRef.current) {
          const scrollHeight = menuRef.current.scrollHeight;
          menuRef.current.style.setProperty('--before-height', `${scrollHeight}px`);
        }
      };

      // 초기 높이 설정
      updateBeforeHeight();

      // 스크롤이나 윈도우 크기 변경 시 높이 업데이트
      window.addEventListener('resize', updateBeforeHeight);
      menuRef.current.addEventListener('scroll', updateBeforeHeight);

      return () => {
        window.removeEventListener('resize', updateBeforeHeight);
        if (menuRef.current) {
          menuRef.current.removeEventListener('scroll', updateBeforeHeight);
        }
      };
    }, [menuRef]);
  };

  // before-height 업데이트 Hook 사용
  useUpdateBeforeHeight(commonMenuRef);

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
