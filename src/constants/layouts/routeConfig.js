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

const routeConfig = {
  '/likelion': makersConfig,
  '/gaehwa': makersConfig,
  '/flame': {
    logo: hiuLogo,
    menuIcon: hambergerMenu,
    xBtn: xBtnWhite,
    showBackButton: false,
  },
  '/admin': {
    logo: hiuLogoBlack,
    menuIcon: hambergerMenuBlack,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
  '/lost-and-found/add': {
    logo: hiuLogoBlack,
    menuIcon: backBtnBlack,
    showBackButton: true,
  },
  '/event/:eventId': {
    logo: hiuLogo,
    menuIcon: hambergerMenu,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
  '/event/enter': {
    logo: hiuLogo,
    menuIcon: hambergerMenu,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
  '/event/submit': {
    logo: hiuLogo,
    menuIcon: hambergerMenu,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
  default: {
    logo: hiuLogoBlack,
    menuIcon: hambergerMenuBlack,
    xBtn: xBtnBlack,
    showBackButton: false,
  },
};

export default routeConfig;