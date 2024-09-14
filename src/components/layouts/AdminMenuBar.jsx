import { useEffect, useState } from 'react';
import Popup from '@/components/admin/Popup';
import PropTypes from 'prop-types';
import * as S from '@/components/layouts/HeaderStyles';

const AdminMenuBar = ({ className, nav, closeMenu, adminMenuRef, showLogoutPopup, setShowLogoutPopup }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleMenuClick = (path) => {
    nav(path, { state: { from: path } });
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    nav('/admin');
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
              handleMenuClick('/admin/losts');
              closeMenu();
            }}
          >
            분실물 게시판 관리
          </S.Menu>
          <S.Menu
            onClick={() => {
              handleMenuClick('/admin/event');
              closeMenu();
            }}
          >
            이벤트 관리
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
  showLogoutPopup: PropTypes.bool.isRequired,
  setShowLogoutPopup: PropTypes.func.isRequired,
};

export default AdminMenuBar;
