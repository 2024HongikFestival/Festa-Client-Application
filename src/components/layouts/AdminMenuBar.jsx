import Popup from '@/components/admin/Popup';
import PropTypes from 'prop-types';
import * as S from './HeaderStyles';
import { useEffect, useState } from 'react';

const AdminMenuBar = ({ className, nav, closeMenu, adminMenuRef, t }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    nav(0);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    closeMenu();
    setShowLogoutPopup(false);
  };

  const handleCancelLogout = () => {
    closeMenu();
    setShowLogoutPopup(false);
  };

  // admin 메뉴바 열렸을 때 바깥 클릭시 메뉴바 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(event.target)) {
        closeMenu();
        setShowLogoutPopup(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [adminMenuRef, closeMenu]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <S.AdminBar ref={adminMenuRef} className={className}>
        <S.PageMenu>
          <S.Menu
            onClick={() => {
              nav('/admin/losts');
              nav(0);
              closeMenu();
            }}
          >
            {t('layouts.header.toAdmin')}
          </S.Menu>
          <S.Menu
            onClick={() => {
              nav('/admin/event');
              nav(0);
              closeMenu();
            }}
          >
            {t('layouts.header.toAdminEvent')}
          </S.Menu>
        </S.PageMenu>
        <S.Logout onClick={() => setShowLogoutPopup(true)}>로그아웃</S.Logout>
      </S.AdminBar>
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

AdminMenuBar.propTypes = {
  className: PropTypes.string.isRequired,
  nav: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  adminMenuRef: PropTypes.oneOfType([
    PropTypes.func, // ref로서의 함수 타입
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // ref로서의 객체 타입
  ]).isRequired,
  t: PropTypes.func.isRequired,
};

export default AdminMenuBar;
