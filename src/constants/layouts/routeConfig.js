import hiuLogoWhite from '@/assets/svgs/layouts/hiuLogoWhite.svg';
import hiuLogoBlack from '@/assets/svgs/layouts/hiuLogoBlack.svg';
import backBtnGray from '@/assets/svgs/layouts/backBtnGray.svg';
import backBtnBlack from '@/assets/svgs/layouts/backBtnBlack.svg';
import hambergerMenuBlack from '@/assets/svgs/layouts/hambergerMenuBlack.svg';
import hambergerMenuWhite from '@/assets/svgs/layouts/hambergerMenuWhite.svg';
import xBtnBlack from '@/assets/svgs/layouts/xBtnBlack.svg';
import xBtnWhite from '@/assets/svgs/layouts/xBtnWhite.svg';

const makersConfig = {
  logo: hiuLogoWhite,
  menuIcon: backBtnGray,
  showBackButton: true,
};

const fleamarketConfig = {
  logo: hiuLogoBlack,
  menuIcon: backBtnBlack,
  showBackButton: true,
};

const eventConfig = {
  logo: hiuLogoWhite,
  menuIcon: hambergerMenuWhite,
  xBtn: xBtnBlack,
  showBackButton: false,
};

const routeConfig = {
  // 만든이들 & 개화
  '/likelion': makersConfig,
  '/gaehwa': makersConfig,

  // 대동제 메인
  '/': {
    logo: hiuLogoWhite,
    menuIcon: hambergerMenuWhite,
    xBtn: xBtnWhite,
    showBackButton: false,
  },

  // 와디페
  '/flame': {
    logo: hiuLogoWhite,
    menuIcon: hambergerMenuWhite,
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
