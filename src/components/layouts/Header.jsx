import { useState, useEffect, useRef } from 'react';
import * as S from './HeaderStyles';
import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';
import backBtn from '@/assets/webps/layouts/backBtn.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import hambergerMenuBlack from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import globe from '@/assets/webps/layouts/globe.webp';
import globeGray from '@/assets/webps/layouts/globeGray.webp';
import xBtnBlack from '@/assets/svgs/layouts/xBtnBlack.svg';
import xBtnWhite from '@/assets/svgs/layouts/xBtnWhite.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AdminMenuBar from './AdminMenuBar';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [isKorActive, setIsKorActive] = useState(true); // language toggle
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const adminMenuRef = useRef(null);
  const commonMenuRef = useRef(null);

  // path
  const makers = location.pathname === '/likelion' || location.pathname === '/gaehwa';
  const flame = location.pathname.startsWith('/flame');
  const isAdminPath =
    location.pathname === '/admin' || location.pathname === '/admin/event' || location.pathname === '/admin/losts';

  const useWhiteImages = (path) => {
    // 하얀색 홍익로고, 메뉴바 로고 들어가는 path
    const whiteImagePaths = ['/likelion', '/gaehwa'];
    if (path.startsWith('/flame')) {
      return true;
    }
    return whiteImagePaths.includes(path);
  };
  const whiteImages = useWhiteImages(location.pathname);

  // 메뉴바 여닫기
  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막아 외부 클릭과의 충돌 방지
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

  // 메뉴바 열렸을 때 스크롤 막기
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setMenuClass('open');
    } else {
      document.body.style.overflow = '';
      setMenuClass('close');
    }
  }, [isMenuOpen]);

  // 메뉴바 닫을 때 애니메이션
  useEffect(() => {
    if (menuClass === 'close' && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [menuClass, isAnimating]);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    nav(0);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };

  const handleCancelLogout = () => {
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };

  // admin 메뉴바 열렸을 때 바깥 클릭시 메뉴바 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsAnimating(true);
        setShowLogoutPopup(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // common 메뉴바 열렸을 때 바깥 클릭시 메뉴바 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commonMenuRef.current && !commonMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsAnimating(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // backBtn
  const handleGoBack = () => {
    nav(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  // language toggle 초기화
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setIsKorActive(storedLanguage === 'ko');
    } else {
      setIsKorActive(true); // 기본값: 한국어
      localStorage.setItem('language', 'ko');
    }
  }, []);

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

  // 대동제 메뉴바 아코디언 토글
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <S.HeaderLayout $path={location.pathname}>
        <S.HeaderBg $path={location.pathname} $isMenuOpen={isMenuOpen} $flame={flame}>
          {makers && (
            <S.HambergerMenu onClick={handleGoBack}>
              <img src={backBtn} alt="backBtb" />
            </S.HambergerMenu>
          )}
          {!makers && (
            <S.HambergerMenu onClick={toggleMenu}>
              <img
                src={
                  whiteImages ? (isMenuOpen ? xBtnWhite : hambergerMenu) : isMenuOpen ? xBtnBlack : hambergerMenuBlack
                }
                alt="hambergerMenu"
              />
            </S.HambergerMenu>
          )}
          <S.HiuLogo onClick={() => nav('/')}>
            <img src={whiteImages ? hiuLogo : hiuLogoBlack} alt="hiuLogo" />
          </S.HiuLogo>

          <S.Right></S.Right>
        </S.HeaderBg>
        {(isMenuOpen || isAnimating) &&
          (isAdminPath ? (
            <AdminMenuBar
              className={menuClass}
              adminMenuRef={adminMenuRef}
              handleCancelLogout={handleCancelLogout}
              handleConfirmLogout={handleConfirmLogout}
              showLogoutPopup={showLogoutPopup}
              setShowLogoutPopup={setShowLogoutPopup}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              t={t}
            />
          ) : (
            <CommonMenuBar
              className={menuClass}
              commonMenuRef={commonMenuRef}
              closeMenu={() => setIsMenuOpen(false)}
              isKorActive={isKorActive}
              toggleLanguage={toggleLanguage}
              t={t}
              flame={flame}
              nav={nav}
              openAccordion={openAccordion}
              toggleAccordion={toggleAccordion}
            />
          ))}
      </S.HeaderLayout>
    </>
  );
}

const CommonMenuBar = ({
  nav,
  closeMenu,
  isKorActive,
  toggleLanguage,
  t,
  flame,
  commonMenuRef,
  className,
  openAccordion,
  toggleAccordion,
}) => (
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

CommonMenuBar.propTypes = {
  nav: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isKorActive: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  flame: PropTypes.bool,
  commonMenuRef: PropTypes.object.isRequired,
  openAccordion: PropTypes.number,
  toggleAccordion: PropTypes.func.isRequired,
};
