import hambergerMenu from '@/assets/webp/layouts/hambergerMenu_black.webp';
import hiuLogo from '@/assets/webp/layouts/hiulogo_black.webp';
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
