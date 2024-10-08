## 🎪 2024 홍익대학교 가을 대동제 화양연화; 만개 사이트 프로젝트

![KakaoTalk_Photo_2024-10-02-22-32-42](https://github.com/user-attachments/assets/cc247482-aa80-46cd-8f93-bb1682fcd0bf)

## ✨ 프로젝트 소개

홍익대학교 멋쟁이사자처럼 12기와 제58대 총학생회 개화가 함께한 대동제 사이트 프로젝트입니다. 축제를 즐기고자 하는 학우들과 외부인들이 라인업, 위치 정보 및 실시간 공연 중인 DJ 정보 등 분산된 정보들을 한번에 확인할 수 있습니다. 더하여 분실물 게시판, 상품 제공 이벤트, 실시간 주점 좋아요 기능 등을 사용하며 축제를 한층 더 재미있게 즐길 수 있게끔 하였습니다.

> 개발 기간 : 2024.07 ~ 2024.09

> 배포 링크 : https://www.2024hongikfestival.com/ (2024.9.23 ~ 2024.9.29)

> 사이트 소개 카드뉴스 : https://www.instagram.com/p/DAQ42o_vbWZ/?igsh=Nmlmb2d6NW95OWpp

## 🌟 주요 기능

- **한영 번역 기능**

  - 메뉴바 하단의 한영 변환 토글 버튼을 통해 사이트 내용을 한글 및 영어로 변환할 수 있습니다.

- **로드맵**

  - 축제가 진행되는 홍익대학교 내의 전반적인 지도를 제공합니다.
  - 전체 지도로 홍익대학교 전체 뷰를 확인할 수 있고, 상세 지도로 확대 및 축소를 통해 주점 위치나, 학교 건물의 위치를 파악할 수 있습니다.

- **공연**

  - 날짜별로 연예인 라인업과, 관람 정보 및 홍익존에 대한 정보를 제공합니다.

- **편의시설**

  - 화장실, 의료시설, 분실물 센터의 위치 정보를 드래그가 가능한 지도를 통해 파악할 수 있습니다.

- **주점**

  - 학과/동아리별로 준비한 부스 이벤트와 주점 메뉴를 살펴볼 수 있습니다.
  - 실시간으로 주점별 좋아요 기능을 제공합니다. 마음에 드는 주점의 좋아요 버튼을 여러 번 눌러, 실시간 인기 주점 랭킹에 올릴 수 있습니다. 하트가 떨어지는 애니메이션을 통해 자신이 누르는 하트와 다른 사람이 실시간으로 누르고 있는 하트를 구별할 수 있습니다.
  - 확대 및 축소가 가능한 지도를 통해 어떤 부스가 어디에 위치하고 있는지 알 수 있습니다.

- **플리마켓**

  - 마켓별로 판매하는 상품의 정보를 제공합니다.
  - 마켓의 위치를 확대 및 축소가 가능한 지도로 파악할 수 있습니다.

- **MD 상품**

  - 축제에서 판매하는 MD 상품에 대한 이미지와 가격을 제공합니다.

- **온라인 분실물 센터**

  - 분실물을 발견할 경우 오프라인 센터에 맡기지 않고도 사이트에 사진을 찍어 발견 위치와 분실물 보관 위치를 함께 공유할 수 있습니다.
  - 분실한 학생들도 게시판에서 바로 확인하고 찾을 수 있습니다.

- **이벤트**

  - 축제를 즐기고 있는 누구나 응모할 수 있는 이벤트 기능입니다. 축제가 진행되는 3일간 매일 응모권 1장이 제공되며, 홍익대학교 내에 있는 사람만이 응모가 가능합니다.

- **와우 디제이 페스티벌**
  - 사이트맵을 통해 출입구 방향을 알 수 있고, 프로모션 부스가 어디에 위치하는 지 알 수 있습니다.
  - 와디페 공연 중 사이트에 접속하면 '현재' 공연 중인 DJ가 표기되어, 따로 검색하지 않아도 해당 DJ에 대한 정보를 습득할 수 있습니다.

## 🗂️ 프로젝트 구조

```
.
├── README.md
├── global.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── faviconBlack.svg
│   └── faviconWhite.svg
├── src
│   ├── App.jsx
│   ├── api
│   │   └── axios.js
│   ├── assets
│   │   ├── lotties
│   │   ├── svgs
│   │   ├── videos
│   │   └── webps
│   ├── auth
│   │   ├── OAuth.js
│   │   ├── RedirectEvents.jsx
│   │   └── RedirectLosts.jsx
│   ├── components
│   ├── constants
│   ├── context
│   ├── i18n
│   │   ├── resource
│   │   │   ├── en.json
│   │   │   └── ko.json
│   │   └── setting.js
│   ├── main.jsx
│   ├── outlet
│   ├── pages
│   │   ├── admin
│   │   ├── booth
│   │   ├── event
│   │   ├── facilities
│   │   ├── flame
│   │   ├── lost-and-found
│   │   ├── main
│   │   ├── makers
│   │   ├── map
│   │   ├── not-found
│   │   └── stage
│   ├── styles
│   │   ├── GlobalStyle.js
│   │   ├── map
│   │   │   └── mapStyles.js
│   │   └── theme.js
│   └── utils
├── vite.config.js
└── yarn.lock
```

## 🍃 브랜치 전략

- `main (배포용 브랜치)`
- `develop`
- `feature/페이지 이름 및 개발 내용`
  - 각자의 feature 브랜치에서 개발 후 로컬 환경에서 테스트를 거친 뒤, PR을 작성하여 develop에 merge합니다.
- `hotfix`

## 🚀 커밋 규칙

- 커밋 메세지는 `[Type] 작성 내용` 으로 통일합니다.

```
[Feat] : 새로운 기능 추가시
[Fix] : 버그 수정시
[Docs] : 문서화 작업시
[Style] : 코드 포맷 변경, 세미콜론 누락, 따로 코드 수정이 없는 경우
[Refactor] : 코드 리팩터링
[Chore] : 빌드 업무 수정, 패키지 매니저 수정 등
[Design] : CSS 등 UI 디자인을 변경한 경우
[Rename] : 파일명 또는 폴더명을 수정한 경우
[Remove] : 코드 삭제가 있을 때
[Environment] 개발 환경 세팅시
[!HOTFIX] : 급하게 치명적인 버그를 고쳐야 하는 경우
```

## 🛠️ 기술 스택

| **역할**            | **종류**                                                                                                                                                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Library**         | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)       |
| **Styling**         | ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                                |
| **Formatting**      | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=husky&logoColor=white) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)                                                                                                                   |
| **Build Tool**      | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                                                                                                                                                                                                      |
| **Package Manager** | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                                                                                                                      |
| **Cowork Tool**     | ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)                                                                                                             |

## 👩🏻‍💻 팀원 소개

| <img src="https://avatars.githubusercontent.com/u/118096607?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/155794105?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/128466405?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/81095801?v=4" width="150" height="150"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                 서가영<br/>[@caminobelllo](https://github.com/caminobelllo)                 |                       공준혁<br/>[@ocahs9](https://github.com/ocahs9)                       |                김동욱<br/>[@boogiewooki02](https://github.com/boogiewooki02)                |                     심수연<br/>[@letthem](https://github.com/letthem)                      |

| <img src="https://avatars.githubusercontent.com/u/113417326?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/127955729?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/144602200?v=4" width="150" height="150"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                    원윤서<br/>[@dbstj0403](https://github.com/dbstj0403)                    |                 원채영<br/>[@chaeyoungwon](https://github.com/chaeyoungwon)                 |                        최정인<br/>[@cuyqo](https://github.com/cuyqo)                        |

## 💭 화면 및 기능 구성

### 대동제

<details>
<summary><strong>메인</strong></summary>

메인화면에 관련된 화면 및 기능을 여기에 작성하세요.

| 스크린샷 | 기능    | 설명    |
| -------- | ------- | ------- |
| 테스트1  | 테스트2 | 테스트3 |
| 테스트1  | 테스트2 | 테스트3 |
| 테스트1  | 테스트2 | 테스트3 |

</details>

<details>
<summary><strong>로드맵</strong></summary>

로드맵 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>공연</strong></summary>

| 스크린샷 | 기능    | 설명    |
| -------- | ------- | ------- |
| 테스트1  | 라인업 | 각 날짜별로 공연하는 아티스트의 목록을 확인할 수 있습니다. AOS(Animate On Scroll) 라이브러리를 사용해 스크롤 시 아티스트 정보가 부드럽게 나타나는 애니메이션을 구현했습니다. 또한, 날짜 선택 기능에서 오늘 날짜를 기본값으로 설정하여 사용자가 페이지에 접속하면 자동으로 당일 라인업이 표시되도록 로직을 작성했습니다. |
| 테스트1  | 관람 정보 | 관람객들이 알아야 할 날짜별 중앙 무대 일정, 무대 주변 지도, 출입구 정보 등을 시각적으로 제공합니다. react-zoom-pan-pinch 라이브러리를 사용하여 지도를 핀치줌(pinch zoom)으로 확대 및 축소할 수 있는 기능을 구현했습니다. 또한, 로티 애니메이션을 추가하여 관람객들이 입장과 퇴장 경로를 직관적으로 인지 가능하도록 구현했습니다. |
| 테스트1  | 홍익존 | 홍익대학교 학생들을 위한 특별 구역인 홍익존에 대한 정보를 제공합니다. 홍익존의 자세한 정보와 위치 지도를 확인할 수 있습니다. |

</details>

<details>
<summary><strong>부스</strong></summary>

부스 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>편의 정보</strong></summary>

편의 정보 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>이벤트</strong></summary>

이벤트 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

---

### 와디페

<details>
<summary><strong>메인</strong></summary>

메인 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>사이트맵</strong></summary>

사이트맵 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>타임테이블</strong></summary>

타임테이블 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>예매</strong></summary>

예매 화면에 관련된 화면 및 기능을 여기에 작성하세요.

</details>

<details>
<summary><strong>라인업</strong></summary>

| 스크린샷 | 기능    | 설명    |
| -------- | ------- | ------- |
| 테스트1  | 라인업 | Wow DJ Festival의 각 날짜별로 출연하는 DJ들의 목록을 제공합니다. AOS (Animate On Scroll) 라이브러리를 활용하여 스크롤할 때 DJ 목록이 부드럽게 나타나는 애니메이션을 구현했습니다. 오늘 날짜를 기본값으로 설정하여 사용자가 접속했을 때 자동으로 당일 라인업이 표시되도록 했습니다. 날짜를 변경하면 선택한 날짜의 DJ 정보와 이미지를 동적으로 업데이트하여 직관적인 탐색이 가능합니다. |

</details>

<details>
<summary><strong>MD 상품</strong></summary>

| 스크린샷 | 기능    | 설명    |
| -------- | ------- | ------- |
| 테스트1  | MD 상품 | 다양한 MD 상품을 소개합니다. 티셔츠, 스티커, 가방 등과 같은 다양한 상품의 이미지와 가격, 구매 방법을 제공합니다. AOS 라이브러리를 활용한 스크롤 애니메이션을 적용하여 편안한 사용자 경험을 제공합니다. 또한, 라인업에서 사용되는 카드는 컴포넌트화하여 다른 페이지나 기능, 특히 프로모션 부스 페이지에서도 재사용이 가능하도록 설계해 유지보수성과 확장성을 높였습니다. |

</details>

<details>
<summary><strong>프로모션 부스</strong></summary>

| 스크린샷 | 기능    | 설명    |
| -------- | ------- | ------- |
| 테스트1  | 프로모션 부스 | Wow DJ Festival에서 즐길 수 있는 다양한 부스 정보를 제공합니다. AOS 라이브러리를 활용한 스크롤 애니메이션을 적용하여 편안한 사용자 경험을 제공합니다. |

</details>
