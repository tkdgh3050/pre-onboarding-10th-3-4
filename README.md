## Best Todo and Search - 4주차 과제

## 목차

- 프로젝트소개
- 기능소개
- 실행
- 개발환경
- 기술스택
- 프로젝트 파일 구조
- 팀소개

## 프로젝트 소개

저희 팀의 프로젝트는 Best Todo and Search입니다.

기존 Todo 소스 코드에 Typescript를 적용하고 Todo 입력창에 검색어를 입력했을 때 해당하는 검색어를 포함하는 Todo를 추천해주는 기능을 구현했습니다.

이 프로젝트는 10명의 팀원 모두 함께 진행하였으며, 각자 과제를 수행한 후 결과물을 통해서 팀원들끼리 토론하여 가장 적절하다고 생각하는 방식을 도출하였습니다.

#### Best Practice인 이유

### 📍 Typescript 마이그레이션

- Javascript로 구성되어있던 기존 코드에 Typescript를 적용하였습니다.

<br/>

### 📍 검색어 입력마다 API가 호출되지 않도록 API 호출 횟수 줄이기

- useDebounce custom hook을 생성하여 검색어에 debounce를 적용하였고 사용자가 검색어 입력을 시작한 후 500ms동안 입력이 없으면 API가 호출되도록 구현했습니다.

<br/>

### 📍 검색 결과 무한 스크롤 구현 및 최적화

- 검색어가 입력되면 dropdown에 검색 결과를 10개씩 받아와 무한 스크롤로 출력되도록 구현했습니다.
- useThrottle custom hook을 생성하여 무한 스크롤 구현 시 검색 결과 출력 API 호출을 최적화 하였습니다.

<br/>

### 📍 style 파일 분리 및 css module 사용

- 기존 App.css의 경우 하나의 파일이었기 때문에 유지보수 및 코드 가독성이 떨어진다고 판단하여 style 코드를 분리했습니다. 각 컴포넌트 별로 css module 파일을 생성하여 JS 코드와 style 코드를 분리했고 className 중복을 방지했습니다.

<br/>

### 📍 useLoading 커스텀훅

- 로딩중일 때 보여지는 컴포넌트 코드 중복이 많아 유지보수를 위해 Loading 관련 커스텀훅을 만들었습니다.

<br/>

### 📍 Todo ContextAPI를 사용하여 추상화

- props drilling 이슈로 todo 관련 로직을 Context API로 추상화하여 로직과 화면단 로직을 분리했습니다.

<br/>

## 기능소개

#### 배포 링크: [Best Todo and Search](https://main--dashing-stroopwafel-25b7db.netlify.app/)

<br/>

## 실행방법

#### install

```
npm install
```

#### start

```
npm start
```

<br/>

## 개발환경

- 테스트 환경 : Chrome browser
- IDE : Visual Studio Code 1.71.0 (Universal)
- 인프라 : Netlify
- 주요 라이브러리
  - React : 17.0.1
  - TypeScript : 4.9.5

<br/>

## 기술스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"></code>

#### Language

<code><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></code>

#### deploy

<code><img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/></code>

<br/>

## 프로젝트 파일 구조

```
📦BestToDo
├── .github
│   └── ISSUE_TEMPLATE
├── .husky
├── 📂public
└── 📂src
    ├── 📂api
    ├── 📂components
    │   └── 📂DropdownList
    │   └── 📂Header
    │   └── 📂InputTodo
    │   └── 📂TodoList
    ├── 📂context
    ├── 📂hooks
    ├── 📂pages
    ├── 📂service
    ├── 📂types
    └── 📂utils

```

<br/>

## 팀소개

|          [wet6123](https://github.com/wet6123)           |          [1two13](https://github.com/1two13)           |          [plumpsqrl9744](https://github.com/plumpsqrl9744)           |          [tkdgh3050](https://github.com/tkdgh3050)           |          [senasoon](https://github.com/senasoon)           |
| :------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------: |
| ![wet6123의 프로필 사진](https://github.com/wet6123.png) | ![1two13의 프로필 사진](https://github.com/1two13.png) | ![plumpsqrl9744의 프로필 사진](https://github.com/plumpsqrl9744.png) | ![tkdgh3050의 프로필 사진](https://github.com/tkdgh3050.png) | ![senasoon의 프로필 사진](https://github.com/senasoon.png) |

|          [5thwin](https://github.com/5thwin)           |          [yminj1029](https://github.com/yminj1029)           |          [Leeseunghwan7305](https://github.com/Leeseunghwan7305)           |          [JKyEun](https://github.com/JKyEun)           |          [chyerin802](https://github.com/chyerin802)           |
| :----------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------: |
| ![5thwin의 프로필 사진](https://github.com/5thwin.png) | ![yminj1029의 프로필 사진](https://github.com/yminj1029.png) | ![Leeseunghwan7305의 프로필 사진](https://github.com/Leeseunghwan7305.png) | ![JKyEun의 프로필 사진](https://github.com/JKyEun.png) | ![chyerin802의 프로필 사진](https://github.com/chyerin802.png) |
