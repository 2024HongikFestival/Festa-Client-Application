import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
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
import Popup from '@/components/admin/Popup';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isKorActive, setIsKorActive] = useState(true); // language toggle
  const [openAccordion, setOpenAccordion] = useState(null);

  const adminMenuRef = useRef(null);
  const commonMenuRef = useRef(null);

  // path
  const makers = location.pathname === '/likelion' || location.pathname === '/gaehwa';
  const flame = location.pathname.startsWith('/flame');
  const isAdminPath = location.pathname === '/admin' || location.pathname === '/admin/event';

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

  return (
    <>
      <HeaderLayout $path={location.pathname}>
        <HeaderBg $path={location.pathname} $isMenuOpen={isMenuOpen} $flame={flame}>
          {makers && (
            <HambergerMenu onClick={handleGoBack}>
              <img src={backBtn} alt="backBtb" />
            </HambergerMenu>
          )}
          {!makers && (
            <HambergerMenu onClick={toggleMenu}>
              <img
                src={
                  whiteImages ? (isMenuOpen ? xBtnWhite : hambergerMenu) : isMenuOpen ? xBtnBlack : hambergerMenuBlack
                }
                alt="hambergerMenu"
              />
            </HambergerMenu>
          )}
          <HiuLogo onClick={() => nav('/')}>
            <img src={whiteImages ? hiuLogo : hiuLogoBlack} alt="hiuLogo" />
          </HiuLogo>

          <Right></Right>
        </HeaderBg>
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
      </HeaderLayout>
    </>
  );
}

const AdminMenuBar = ({
  className,
  nav,
  handleCancelLogout,
  handleConfirmLogout,
  showLogoutPopup,
  setShowLogoutPopup,
  closeMenu,
  adminMenuRef,
  t,
}) => {
  return (
    <>
      <AdminBar ref={adminMenuRef} className={className}>
        <PageMenu>
          <Menu
            onClick={() => {
              nav('/admin');
              nav(0);
              closeMenu();
            }}
          >
            {t('layouts.header.toAdmin')}
          </Menu>
          <Menu
            onClick={() => {
              nav('/admin/event');
              closeMenu();
            }}
          >
            {t('layouts.header.toAdminEvent')}
          </Menu>
        </PageMenu>
        <Logout onClick={() => setShowLogoutPopup(true)}>로그아웃</Logout>
      </AdminBar>
      {showLogoutPopup && (
        <Popup
          message="로그아웃 할까요?"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
          confirmText="로그아웃"
          cancelText="취소"
        />
      )}
    </>
  );
};

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
  <MenuBar ref={commonMenuRef} $flame={flame} className={className}>
    <MenuList $flame={flame}>
      <MenuItem $flame={flame} $isOpen={openAccordion === 0}>
        {flame ? (
          <span
            onClick={() => {
              nav('/flame/map');
              closeMenu();
            }}
          >
            {t('layouts.header.toSitemap')}
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
      </MenuItem>
      <Divider $flame={flame} />
      <MenuItem $flame={flame} $isOpen={openAccordion === 1}>
        {flame ? (
          <span
            onClick={() => {
              nav('/flame/timetable');
              closeMenu();
            }}
          >
            {t('layouts.header.toTimeTable')}
          </span>
        ) : (
          <span onClick={() => toggleAccordion(1)}>{t('layouts.header.toStage')}</span>
        )}
      </MenuItem>
      {openAccordion === 1 && (
        <AccordionContent>
          <SubMenuItem
            onClick={() => {
              nav('/lineup');
              closeMenu();
            }}
          >
            {t('layouts.header.toLineUp')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/stage-info');
              closeMenu();
            }}
          >
            {t('layouts.header.toStageInfo')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/hongik-zone');
              closeMenu();
            }}
          >
            {t('layouts.header.toHongikZone')}
          </SubMenuItem>
        </AccordionContent>
      )}
      <Divider $flame={flame} />
      <MenuItem $flame={flame} $isOpen={openAccordion === 2}>
        {flame ? (
          <span
            onClick={() => {
              nav('/flame/reservation');
              closeMenu();
            }}
          >
            {t('layouts.header.toReservation')}
          </span>
        ) : (
          <span onClick={() => toggleAccordion(2)}>{t('layouts.header.toBooth')}</span>
        )}
      </MenuItem>
      {openAccordion === 2 && (
        <AccordionContent>
          <SubMenuItem
            onClick={() => {
              nav('/booth');
              closeMenu();
            }}
          >
            {t('layouts.header.toDrink')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/fleamarket');
              closeMenu();
            }}
          >
            {t('layouts.header.toFleaMarket')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/promotion');
              closeMenu();
            }}
          >
            {t('layouts.header.toPromotion')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/md');
              closeMenu();
            }}
          >
            {t('layouts.header.toMd')}
          </SubMenuItem>
        </AccordionContent>
      )}
      <Divider $flame={flame} />
      <MenuItem $flame={flame} $isOpen={openAccordion === 3}>
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
      </MenuItem>
      {openAccordion === 3 && (
        <AccordionContent>
          <SubMenuItem
            onClick={() => {
              nav('/facilities');
              closeMenu();
            }}
          >
            {t('layouts.header.toFacilities')}
          </SubMenuItem>
          <SubMenuItem
            onClick={() => {
              nav('/lost-and-found');
              closeMenu();
            }}
          >
            {t('layouts.header.toLostAndFound')}
          </SubMenuItem>
        </AccordionContent>
      )}
      <Divider $flame={flame} />
      <MenuItem $flame={flame} $isOpen={openAccordion === 4}>
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
      </MenuItem>
      {flame && (
        <>
          <Divider $flame={flame} />
          <MenuItem $flame={flame}>
            <span
              onClick={() => {
                nav('/flame/promotion');
                closeMenu();
              }}
            >
              {t('layouts.header.toPromotion')}
            </span>
          </MenuItem>
        </>
      )}
    </MenuList>
    <LanguageWrapper>
      <Divider $flame={flame} />
      <LanguageBox $flame={flame}>
        {flame ? <img src={globeGray} alt="globeGray" /> : <img src={globe} alt="globe" />}
        <span className="language">Language</span>
        <ToggleBox $flame={flame} onClick={toggleLanguage}>
          <Slider $flame={flame} $isKorActive={isKorActive} />
          <KorBox $flame={flame} $isKorActive={isKorActive}>
            <span>KOR</span>
          </KorBox>
          <EngBox $flame={flame} $isKorActive={!isKorActive}>
            <span>ENG</span>
          </EngBox>
        </ToggleBox>
      </LanguageBox>
    </LanguageWrapper>
  </MenuBar>
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

AdminMenuBar.propTypes = {
  className: PropTypes.string.isRequired,
  nav: PropTypes.func.isRequired,
  handleCancelLogout: PropTypes.func.isRequired,
  handleConfirmLogout: PropTypes.func.isRequired,
  showLogoutPopup: PropTypes.bool.isRequired,
  setShowLogoutPopup: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  adminMenuRef: PropTypes.oneOfType([
    PropTypes.func, // ref로서의 함수 타입
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // ref로서의 객체 타입
  ]).isRequired,
  t: PropTypes.func.isRequired,
};

const HeaderLayout = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  height: 5.6rem;
  background-color: transparent;
  position: fixed;
  top: 0rem;
  z-index: 100;
`;

const HeaderBg = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 5.6rem;
  position: fixed;
  top: 0rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray20};
  background: ${({ $isMenuOpen, $flame }) => ($isMenuOpen && !$flame ? '#F1FBFD' : 'rgba(255, 255, 255, 0.05)')};
  box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(0.2rem);
  transition: background 0.3s ease;

  ${(props) =>
    (props.$path === '/likelion' || props.$path === '/gaehwa') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.black};
      box-shadow: 0rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.12) inset;
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
      box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    props.$path === '/admin' &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.$path === '/admin/event' &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}
`;

const HambergerMenu = styled.div`
  cursor: pointer;
  margin-left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HiuLogo = styled.div`
  cursor: pointer;
  width: 14.7rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  margin-right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 5.6rem);
  max-width: 26.1rem;
  background-color: #f1fbfd;
  border-right: 0.1rem solid #d1c2f3;
  z-index: 99;
  transition: transform 0.3s ease;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }

  ${({ $flame }) =>
    $flame &&
    css`
      position: relative;
      background: rgba(1, 3, 4, 0.9);
      border-right: none;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0.1rem;
        height: 100%;
        background: linear-gradient(180deg, #fff7f7 0%, #ff7711 69%);
      }
    `};
`;

const MenuList = styled.ul`
  margin: 3.5rem 2.2rem 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.$isOpen ? '#def2fd;' : 'transparent')};
  border-radius: ${(props) => (props.$isOpen ? '1rem' : '0')};
  color: ${(props) => props.theme.colors.gray80};
  span {
    /* UX 개선용 padding */
    padding: ${(props) => (props.$isOpen ? '0.8rem 7rem' : '1rem 7rem')};
    ${(props) => props.theme.fontStyles.basic.body1Med};
  }

  ${({ $flame }) =>
    $flame &&
    css`
      color: white;
      justify-content: inherit;
      margin-left: 2.4rem;
      span {
        /* UX 개선용 padding */
        padding: 1rem 10rem 1rem 0;
      }
    `}
`;

const AccordionContent = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 100px;
      opacity: 1;
    }
  }
`;

const SubMenuItem = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  margin-bottom: 1.6rem;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background: linear-gradient(90deg, #85daff 0%, #a9f2dd 25.9%, #becdf9 43.9%, #ece6f0 89.4%);

  ${({ $flame }) =>
    $flame &&
    css`
      background: #2c2d30;
    `}
`;

const LanguageWrapper = styled.div`
  height: 6.5rem;
  margin: 0 2.2rem 3.2rem;
  display: flex;
  flex-direction: column;
`;

const LanguageBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1.8rem 0;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
  .language {
    color: ${({ $flame, theme }) => ($flame ? theme.colors.gray40 : 'rgba(0, 115, 180, 0.8)')};
    ${(props) => props.theme.fontStyles.basic.body2Med};
    text-align: center;
    margin-right: 1.6rem;
  }
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 8.2rem;
  height: 2.8rem;
  border-radius: 1.5rem;
  border: 0.05rem solid #b0dbf3;
  background-color: white;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  justify-content: space-between;
  ${({ $flame }) =>
    $flame &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.gray100};
    `}
`;

const Slider = styled.div`
  margin: 0 0.5rem;
  position: absolute;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(110deg, #27b0eb 40.84%, #d1dbfa 81.65%);
  transition: transform 0.3s ease;
  transform: ${({ $isKorActive }) => ($isKorActive ? 'translateX(0)' : 'translateX(100%)')};

  ${({ $flame }) =>
    $flame &&
    css`
      background: linear-gradient(180deg, rgba(255, 15, 0, 0.8) 0%, rgba(255, 229, 0, 0.8) 236.05%);
    `}
`;

const KorBox = styled.div`
  margin-left: 0.5rem;
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 1;
  color: ${({ $isKorActive }) => ($isKorActive ? 'white' : '#27b0eb')};
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.001rem;
  }
  ${({ $flame }) =>
    $flame &&
    css`
      color: ${({ $isKorActive, theme }) => ($isKorActive ? 'white' : theme.colors.gray20)};
    `}
`;

const EngBox = styled.div`
  margin-right: 0.5rem;
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 1;
  color: ${({ $isKorActive }) => ($isKorActive ? 'white' : '#27b0eb')};
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.001rem;
  }
  ${({ $flame }) =>
    $flame &&
    css`
      color: ${({ $isKorActive, theme }) => ($isKorActive ? 'white' : theme.colors.gray20)};
    `}
`;

const AdminBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 5.6rem);
  max-width: 19.2rem;
  background-color: white;
  z-index: 99;
  transition: transform 0.3s ease;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }
`;

const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.span`
  padding: 1.6rem;
  text-align: left;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray20};
  }
`;

const Logout = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  padding: 1.6rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray70};
  cursor: pointer;
`;
