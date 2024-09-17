import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';
import backBtn from '@/assets/webps/layouts/backBtn.webp';
import backBtnBlack from '@/assets/webps/layouts/backBtnBlack.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import hambergerMenuBlack from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import xBtnBlack from '@/assets/svgs/layouts/xBtnBlack.svg';
import xBtnWhite from '@/assets/svgs/layouts/xBtnWhite.svg';

const makersConfig = {
  logo: hiuLogo,
  menuIcon: backBtn,
  showBackButton: true,
};

const fleamarketConfig = {
  logo: hiuLogoBlack,
  menuIcon: backBtnBlack,
  showBackButton: true,
};

const eventConfig = {
  logo: hiuLogo,
  menuIcon: hambergerMenu,
  xBtn: xBtnBlack,
  showBackButton: false,
};

const routeConfig = {
  // 만든이들 & 개화
  '/likelion': makersConfig,
  '/gaehwa': makersConfig,

  // 와디페
  '/flame': {
    logo: hiuLogo,
    menuIcon: hambergerMenu,
    xBtn: xBtnWhite,
    showBackButton: false,
  },

  // 플리마켓 상세페이지
  ...[
    '/fleamarket/ccJuice',
    '/fleamarket/almak',
    '/fleamarket/henna',
    '/fleamarket/modori',
    '/fleamarket/sajuraplz',
    '/fleamarket/hypeBoy',
    '/fleamarket/sangsu',
    '/fleamarket/kawaii',
    '/fleamarket/aiesec',
  ].reduce((acc, path) => {
    acc[path] = fleamarketConfig;
    return acc;
  }, {}),

  // 분실물 추가
  '/lost-and-found/add': {
    logo: hiuLogoBlack,
    menuIcon: backBtnBlack,
    showBackButton: true,
  },

  // 이벤트
  ...['/event', '/event/', '/event/enter', '/event/submit', '/oauth/events'].reduce((acc, path) => {
    acc[path] = eventConfig;
    return acc;
  }, {}),

  // 관리자
  '/admin': {
    logo: hiuLogoBlack,
    menuIcon: hambergerMenuBlack,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
  '/admin/event': (searchParams) => {
    const view = searchParams.get('view');
    const detailId = searchParams.get('detailId');
    if (view === 'participants') {
      if (detailId) {
        return {
          logo: hiuLogoBlack,
          menuIcon: backBtnBlack,
          showBackButton: true,
        };
      } else {
        // view=participants 이지만 detailId가 없을 때
        return {
          logo: hiuLogoBlack,
          menuIcon: hambergerMenuBlack,
          xBtn: xBtnBlack,
          showBackButton: false,
        };
      }
    }
    // view 파라미터가 없거나 다른 값일 때
    return {
      logo: hiuLogoBlack,
      menuIcon: hambergerMenuBlack,
      xBtn: xBtnBlack,
      showBackButton: false,
    };
  },

  // 그 외 (대동제)
  default: {
    logo: hiuLogoBlack,
    menuIcon: hambergerMenuBlack,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
};

export default routeConfig;
