import Popup from '@/components/admin/Popup';
import PropTypes from 'prop-types';
import * as S from './HeaderStyles';

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

export default AdminMenuBar;
