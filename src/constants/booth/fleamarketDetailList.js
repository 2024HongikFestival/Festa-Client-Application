import aiesecImg1 from '@/assets/webps/booth/fleamarket/aiesec/aiesec1.webp';
import aiesecImg2 from '@/assets/webps/booth/fleamarket/aiesec/aiesec2.webp';
import aiesecImg3 from '@/assets/webps/booth/fleamarket/aiesec/aiesec3.webp';

import ccJuice1 from '@/assets/webps/booth/fleamarket/ccJuice/ccJuice1.webp';
import ccJuice2 from '@/assets/webps/booth/fleamarket/ccJuice/ccJuice2.webp';

import olmak1 from '@/assets/webps/booth/fleamarket/olmak/olmak1.webp';
import olmak2 from '@/assets/webps/booth/fleamarket/olmak/olmak2.webp';
import olmak3 from '@/assets/webps/booth/fleamarket/olmak/olmak3.webp';
import olmak4 from '@/assets/webps/booth/fleamarket/olmak/olmak4.webp';
import olmak5 from '@/assets/webps/booth/fleamarket/olmak/olmak5.webp';
import olmak6 from '@/assets/webps/booth/fleamarket/olmak/olmak6.webp';
import olmak7 from '@/assets/webps/booth/fleamarket/olmak/olmak7.webp';

import kawaii1 from '@/assets/webps/booth/fleamarket/kawaii/kawaii1.webp';
import kawaii2 from '@/assets/webps/booth/fleamarket/kawaii/kawaii2.webp';
import kawaii3 from '@/assets/webps/booth/fleamarket/kawaii/kawaii3.webp';
import kawaii4 from '@/assets/webps/booth/fleamarket/kawaii/kawaii4.webp';
import kawaii5 from '@/assets/webps/booth/fleamarket/kawaii/kawaii5.webp';
import kawaii6 from '@/assets/webps/booth/fleamarket/kawaii/kawaii6.webp';
import kawaii7 from '@/assets/webps/booth/fleamarket/kawaii/kawaii7.webp';
import kawaii8 from '@/assets/webps/booth/fleamarket/kawaii/kawaii8.webp';
import kawaii9 from '@/assets/webps/booth/fleamarket/kawaii/kawaii9.webp';
import kawaii10 from '@/assets/webps/booth/fleamarket/kawaii/kawaii10.webp';

import henna1 from '@/assets/webps/booth/fleamarket/henna/henna1.webp';
import henna2 from '@/assets/webps/booth/fleamarket/henna/henna2.webp';
import henna3 from '@/assets/webps/booth/fleamarket/henna/henna3.webp';
import henna4 from '@/assets/webps/booth/fleamarket/henna/henna4.webp';
import henna5 from '@/assets/webps/booth/fleamarket/henna/henna5.webp';
import henna6 from '@/assets/webps/booth/fleamarket/henna/henna6.webp';
import henna7 from '@/assets/webps/booth/fleamarket/henna/henna7.webp';
// 제발 좀 가져오겠니
import hennaOtherImg from '@/assets/webps/booth/fleamarket/henna/hennaExample.webp';

import modori1 from '@/assets/webps/booth/fleamarket/modori/modori1.webp';
import modori2 from '@/assets/webps/booth/fleamarket/modori/modori2.webp';
import modori3 from '@/assets/webps/booth/fleamarket/modori/modori3.webp';
import modori4 from '@/assets/webps/booth/fleamarket/modori/modori4.webp';
import modori5 from '@/assets/webps/booth/fleamarket/modori/modori5.webp';
import modori6 from '@/assets/webps/booth/fleamarket/modori/modori6.webp';
import modori7 from '@/assets/webps/booth/fleamarket/modori/modori7.webp';
import modori8 from '@/assets/webps/booth/fleamarket/modori/modori8.webp';

import sajuraplz1 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz1.webp';
import sajuraplz2 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz2.webp';
import sajuraplz3 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz3.webp';
import sajuraplz4 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz4.webp';
import sajuraplz5 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz5.webp';
import sajuraplz6 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz6.webp';
import sajuraplz7 from '@/assets/webps/booth/fleamarket/sajuraplz/sajuraplz7.webp';

import sangsu1 from '@/assets/webps/booth/fleamarket/sangsu/sangsu1.webp';
import sangsu2 from '@/assets/webps/booth/fleamarket/sangsu/sangsu2.webp';

import hypeBoy1 from '@/assets/webps/booth/fleamarket/hypeBoy/hypeBoy1.webp';
import hypeBoy2 from '@/assets/webps/booth/fleamarket/hypeBoy/hypeBoy2.webp';
import hypeBoy3 from '@/assets/webps/booth/fleamarket/hypeBoy/hypeBoy3.webp';
import hypeBoy4 from '@/assets/webps/booth/fleamarket/hypeBoy/hypeBoy4.webp';
import hypeBoy5 from '@/assets/webps/booth/fleamarket/hypeBoy/hypeBoy5.webp';

export const FleamarketDetailList = (t) => {
  return {
    ccJuice: {
      name: t('fleamarket.detail.0.name'),
      intro: t('fleamarket.detail.0.intro'),
      goods: [
        { name: t('fleamarket.detail.0.goods.0.name'), price: 5000, img: ccJuice1 },
        { name: t('fleamarket.detail.0.goods.1.name'), price: 4000, img: ccJuice2 },
      ],
    },
    almak: {
      name: t('fleamarket.detail.2.name'),
      intro: t('fleamarket.detail.2.intro'),
      goods: [
        { name: 'Garden Ring', price: 20000, img: olmak1 },
        { name: 'Garden Ring (thin)', price: 11000, img: olmak2 },
        { name: 'Bold Ugly Ring', price: 20000, img: olmak3 },
        { name: 'Ceramic Ring', price: 12000, img: olmak4 },
        { name: 'Rainbow bean necklace', price: 21000, img: olmak5 },
        { name: 'Rainbow bean necklace_Dote', price: 28000, img: olmak6 },
        { name: 'Ring necklace', price: 28000, img: olmak7 },
      ],
    },
    henna: {
      name: t('fleamarket.detail.5.name'),
      intro: t('fleamarket.detail.5.intro'),
      goods: [
        { name: 'QQ-22', price: 6000, img: henna1 },
        { name: 'AA-10', price: 5000, img: henna2 },
        { name: 'QQ-39', price: 6000, img: henna3 },
        { name: 'AA-41', price: 3000, img: henna4 },
        { name: 'PP-53', price: 7000, img: henna5 },
        { name: 'PP-43', price: 7000, img: henna6 },
      ],
      wideImgGoods: { name: t('fleamarket.detail.5.goods'), price: 8000, img: henna7 },
      hennaOtherImg: hennaOtherImg,
    },
    modori: {
      name: t('fleamarket.detail.8.name'),
      intro: t('fleamarket.detail.8.intro'),
      goods: [
        { name: t('fleamarket.detail.8.goods.0.name'), price: 20000, img: modori1 },
        { name: t('fleamarket.detail.8.goods.1.name'), price: 15000, img: modori2 },
        { name: t('fleamarket.detail.8.goods.2.name'), price: 15000, img: modori3 },
        { name: t('fleamarket.detail.8.goods.3.name'), price: 12000, img: modori4 },
        { name: t('fleamarket.detail.8.goods.4.name'), price: 15000, img: modori5 },
        { name: t('fleamarket.detail.8.goods.5.name'), price: 8000, img: modori6 },
        { name: t('fleamarket.detail.8.goods.6.name'), price: 5000, img: modori7 },
        { name: t('fleamarket.detail.8.goods.7.name'), price: 10000, img: modori8 },
      ],
    },
    sajuraplz: {
      name: t('fleamarket.detail.7.name'),
      intro: t('fleamarket.detail.7.intro'),
      goods: [
        { name: 'anatomy chess object_ceramic', price: 15000, img: sajuraplz1 },
        { name: 'anatomy chess object_glass', price: 20000, img: sajuraplz2 },
        { name: 'love and peace blowing cup', price: 45000, img: sajuraplz3 },
        { name: 'ceramic weaving object', price: 35000, img: sajuraplz4 },
        { name: t('fleamarket.detail.7.goods.0.name'), price: 38000, img: sajuraplz5 },
        { name: t('fleamarket.detail.7.goods.1.name'), price: 28000, img: sajuraplz6 },
        { name: t('fleamarket.detail.7.goods.2.name'), price: 48000, img: sajuraplz7 },
      ],
    },
    hypeBoy: {
      name: t('fleamarket.detail.6.name'),
      intro: t('fleamarket.detail.6.intro'),
      topImg: [hypeBoy1],
      bottomImg: [hypeBoy2, hypeBoy3, hypeBoy4, hypeBoy5],
    },
    sangsu: {
      name: t('fleamarket.detail.3.name'),
      intro: t('fleamarket.detail.3.intro'),
      topImg: [sangsu1, sangsu2],
      record: [
        {
          headTitle: '(A1) 국내 12inch',
          recordList: [
            '패티김 - 패티김의 사랑하는 마리아 (￦40,000)',
            '서태지와 아이들 - 1집 (￦15,000)',
            '시나위 - 2집 Up and Down (￦30,000)',
            '제1회 전국대학가요경연대회 (￦20,000)',
            '015B - 3집 (￦40,000)',
            '김완선 - 5집 (￦60,000)',
            '이승철 - 1집 Part.2 (￦10,000)',
            '015B - 2집 (￦20,000)',
            '철이와 미애 - 1집 (￦15,000)',
            '황병기 - 제3 작품집 미궁 (￦25,000)',
            '김원준 -1집 눈에 띄고 싶어 (￦10,000)',
            '김현식 - 3집 (￦50,000)',
            '임병수 - 제2집 (￦10,000)',
            '노래를 찾는 사람들',
            '- 노래를 찾는 사람들 2 (￦40,000)',
          ],
        },
        {
          headTitle: '(A2) 국내 리마스터 12inch',
          recordList: [
            '언니네 이발관 - 비둘기는 하늘의 쥐 (￦100,000)',
            '별들의 고향 OST (￦50,000)',
            '키보이스 - 그녀 입술은 달콤해 (￦20,000)',
            '델리 스파이스 - 1집(green) (￦80,000)',
            '아이들 - 아이들과 함께 춤을(green) (￦20,000)',
            '어떤날 - 1집 (￦30,000)',
            '데블스 - 그루사운드 Devils (￦20,000)',
            '조용필 - 스테레오 히트앨범 (￦20,000)',
            '해피돌스 - Show Album No.1',
            '\u00A0\u00A0(2015레코드페어, clearblue) (￦30,000)',
            '두번째달 - 1집',
            '\u00A0\u00A0(2017레코드페어, orange) (￦80,000)',
            "이판근 - 코리아재즈퀸텟 '78",
            '\u00A0\u00A0(2015레코드페어, yellow) (￦30,000)',
            '김대환과 김트리오 악단',
            '- 드럼! 드럼! 드럼! 앰프기타 고고 (￦20,000)',
          ],
        },
        {
          headTitle: '(B) 싱글 7inch (모두 ￦5,000)',
          recordList: [
            'Men at Work - Who Can It Be Now?(japan)',
            'Survivor - Eye Of The Tiger(japan)',
            'Culture Club - Karma Chameleon(japan)',
            'Blondie - Rapture',
            'The Blue Nile - Tinsentown in The Rain',
          ],
        },
        {
          headTitle: '(C) 국내 CD',
          recordList: [
            '장기하와 얼굴들 - 5집 Mono (￦10,000)',
            '24 Hours - 1집 Party People (￦5,000)',
            '2009 제6회 한국대중음악상',
            'Nominees (미개봉) (￦20,000)',
            '글렌 체크',
            '- The Glen Check Experience (￦10,000)',
          ],
        },
        {
          headTitle: '(D) 기타',
          recordList: [
            'Blondie - Eat to The Beat',
            '\u00A0\u00A0(음반라벨이 잘못된 곳에 찍힌 불량반)',
            '\u00A0\u00A0(다른 음반 1장 이상 구매 시 무료 / 개별 판매 x)',
            'The Beatles - The First U.S. Visit',
            '\u00A0\u00A0(japan,laserdisc) (￦50,000)',
          ],
        },
        {
          headTitle: '(E1) 해외 12inch',
          recordList: [
            'Shaft OST (￦25,000)',
            'Endorphins - Dedication (￦5,000)',
            'Jesus Jones - Doubt(korea) (￦10,000)',
            'Maroon 5 - This Love(single) (￦15,000)',
            'Kitaro - Silk Road (￦40,000)',
            'Pink Lady - Best Hit Album (￦20,000)',
            'Quarterflash - Quarterflash (￦20,000)',
            'Carpenters - Now & Then (￦40,000)',
            'Weather Report - 8:30 (￦25,000)',
            'Mory Kante - Akwaba Beach (￦10,000)',
            'Sly and The Family Stone',
            '- Greatest Hits (￦15,000)',
            'New Trolls',
            '- Concerto grosso (korea) (￦10,000)',
            'Psychedelic Furs',
            '- Heaven(single) (￦5,000)',
            'Thomas Dolby',
            '- The Golden Age of Wireless (￦10,000)',
            'Fastway',
            '- All Fired Up (korea, promo) (￦20,000)',
            'Bangles',
            '- Different Light(korea, promo) (￦20,000)',
            'The Rolling Stones',
            '- Undercover(japan) (￦10,000)',
            'New Order',
            '- Blue Monday(single) (￦25,000)',
            'Yellow Magic Orchestra',
            '- Public Pressure(limited, clear) (￦40,000)',
            'Baltimora - Living in The Background',
            '\u00A0\u00A0(korea) (￦20,000)',
            'Lipps Inc.',
            '- Designer Music(korea) (￦10,000)',
            'Earth Wind & Fire',
            '- The Best of Earth Wind & Fire (￦20,000)',
            'Daryl Hall + John Oates',
            '- H2O (japan) (￦15,000)',
            'Kraftwerk',
            '- Radio-Activity (korea) (￦40,000)',
            'The Smiths',
            '- How Soon Is Now? (single) (￦50,000)',
            'Gary Numan + Tubeway Army',
            '- Replicas (￦20,000)',
            'Yellow Magic Orchestra',
            '- Yellow Magic Orchestra (￦30,000)',
            'Arrested Development - 3 Years, 5 Months',
            'And 2 Days in The Life of... (￦25,000)',
          ],
        },
        {
          headTitle: '(E2) 해외 리마스터 12inch',
          recordList: [
            'Iggy Pop - Lust for Life (￦20,000)',
            'Saturday Night Fever OST (￦40,000)',
            'Judas Priest - Painkiller(red) (￦70,000)',
            'New Order - Low-Life (￦30,000)',
            'Stevie Wonder - Talking Book (￦20,000)',
            'Jean-Michel Jarre - Oxygene (￦25,000)',
            'Brian Eno',
            '- Before And After Science (￦20,000)',
            'Pink Floyd',
            '- The Dark Side of The Moon (￦70,000)',
            'Aphex Twin - Selected Ambient Works',
            '\u00A0\u00A085-92 (￦40,000)',
            'Talking Heads',
            '- Talking Heads:77 (￦20,000)',
            "Small Faces - Ogdens' Nut Gone Flake",
            '\u00A0\u00A0(mono) (￦25,000)',
          ],
        },
      ],
    },
    kawaii: {
      name: t('fleamarket.detail.4.name'),
      intro: t('fleamarket.detail.4.intro'),
      goods: [
        { name: t('fleamarket.detail.4.goods.0.name'), price: 4000, img: kawaii1 },
        { name: t('fleamarket.detail.4.goods.1.name'), price: 12000, img: kawaii2 },
        { name: t('fleamarket.detail.4.goods.2.name'), price: 8000, img: kawaii3 },
        { name: t('fleamarket.detail.4.goods.3.name'), price: 10000, img: kawaii4 },
        { name: t('fleamarket.detail.4.goods.4.name'), price: 3000, img: kawaii5 },
        { name: t('fleamarket.detail.4.goods.5.name'), price: 5000, img: kawaii6 },
        { name: t('fleamarket.detail.4.goods.6.name'), price: 3500, img: kawaii7 },
        { name: t('fleamarket.detail.4.goods.7.name'), price: 3500, img: kawaii8 },
        { name: t('fleamarket.detail.4.goods.8.name'), price: 10000, img: kawaii9 },
        { name: t('fleamarket.detail.4.goods.9.name'), price: 10000, img: kawaii10 },
      ],
    },
    aiesec: {
      name: t('fleamarket.detail.1.name'),
      intro: t('fleamarket.detail.1.intro'),
      goods: [
        { name: t('fleamarket.detail.1.goods.0.name'), price: 13900, img: aiesecImg1 },
        { name: t('fleamarket.detail.1.goods.1.name'), price: 3700, img: aiesecImg2 },
        { name: t('fleamarket.detail.1.goods.2.name'), price: 15000, img: aiesecImg3 },
      ],
    },
  };
};
