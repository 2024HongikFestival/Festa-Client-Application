import hambergerMenu from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import hiuLogo from '@/assets/webps/layouts/hiulogoBlack.webp';
import * as S from './Header.styled';

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderBg>
        <S.HambergerMenu>
          <img src={hambergerMenu} alt="hambergerMenu" />
        </S.HambergerMenu>
        <S.HiuLogo>
          <img src={hiuLogo} alt="hiuLogo" />
        </S.HiuLogo>
        <S.Right></S.Right>
      </S.HeaderBg>
    </S.HeaderLayout>
  );
}
