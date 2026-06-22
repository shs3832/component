# react-tailwind-admin-ui

React + Vite + TypeScript + Tailwind CSS v4로 운영형 관리자 UI를 직접 만들어보는 스터디 프로젝트입니다.

이번 프로젝트의 핵심은 큰 서비스를 완성하는 것이 아니라, Tailwind v4의 CSS-first 설정 방식과 React 컴포넌트 구조 안에서 UI를 조립하는 감각을 익히는 것입니다.

## 현재 상태

- Vite React TypeScript 프로젝트 구성
- Tailwind CSS v4와 `@tailwindcss/vite` 플러그인 연결
- `src/index.css`에 `@theme`, `@custom-variant dark` 설정
- Button, Badge, Card 공통 컴포넌트 구현
- AdminLayout, Sidebar, Header 기반 관리자 레이아웃 구현
- Dashboard stat card, 문의 필터, 데스크톱 테이블, 모바일 카드 리스트 구현
- 다크모드 상태 저장과 loading/error/empty 상태 분기 구현
- `App.tsx`에서 `DashboardPage`를 분리해 page 단위 구조 정리

## 실행 방법

```bash
cd react-tailwind-admin-ui
source ~/.nvm/nvm.sh
nvm use 24
npm install
npm run dev
```

브라우저에서 `http://127.0.0.1:5173/` 또는 터미널에 표시되는 주소를 확인합니다.

## 학습 순서

1. 프로젝트 세팅 확인
2. Tailwind v4 토큰 확인
3. 공통 컴포넌트 만들기
4. 관리자 레이아웃 만들기
5. 대시보드 카드 만들기
6. 문의 테이블 만들기
7. 검색과 필터 연결하기
8. 모바일 카드 리스트 만들기
9. 다크모드 저장 로직 만들기
10. loading/error/empty 상태 표현하기
11. page 단위 컴포넌트로 화면 분리하기
12. README 회고 정리하기

자세한 단계별 계획은 [docs/STUDY_PLAN.md](./docs/STUDY_PLAN.md)를 봅니다.

## Tailwind v4 확인 포인트

`src/index.css`에서 아래 설정을 확인합니다.

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-brand-500: #2563eb;
  --color-success-500: #16a34a;
  --color-warning-500: #f59e0b;
  --color-danger-500: #dc2626;
  --font-sans: "Pretendard", system-ui, sans-serif;
}
```

`@theme`에 정의한 값은 `text-brand-500`, `bg-success-500`, `font-sans` 같은 Tailwind utility class로 사용할 수 있습니다.

## 구현 구조

```txt
src/
  components/
    common/      Button, Badge, Card, ThemeToggle
    layout/      AdminLayout, Sidebar, Header, Main
    dashboard/   DashboardPanel, StatCard
    table/       InquiryFilters, InquiryTable, InquiryMobileList
  data/          inquiries mock data
  pages/         DashboardPage
  types/         inquiry type
```

`App.tsx`는 전체 레이아웃을 적용하는 역할만 담당하고, 실제 화면 구성과 상태 처리는 `DashboardPage`에서 담당합니다.

```tsx
<AdminLayout>
  <DashboardPage />
</AdminLayout>
```

## 학습 회고

- Tailwind v4는 `@theme`에 정의한 토큰을 `text-brand-500`, `bg-brand-500` 같은 utility class로 바로 사용할 수 있습니다.
- 기본 class는 모바일 기준으로 작성하고, `md:`, `lg:` 같은 breakpoint로 화면이 넓어질 때의 스타일을 확장합니다.
- 데스크톱에서는 테이블이 정보 비교에 적합하지만, 모바일에서는 카드 리스트로 재구성하는 편이 정보를 확인하기 쉽습니다.
- 공통 컴포넌트는 기본 스타일과 상태별 스타일을 분리하고, 예외가 반복될 때 props나 `className`으로 확장합니다.
- React state는 현재 화면 상태를 관리하고, `localStorage`는 새로고침 후에도 유지되어야 하는 사용자 선택을 저장합니다.
- Tailwind의 `dark:` 스타일은 `html`에 `dark` class가 붙을 때 동작하므로, 테마 상태와 DOM class를 동기화해야 합니다.
- 운영 UI에서는 데이터가 있는 상태뿐 아니라 loading, error, empty 상태를 분리해서 사용자에게 다른 피드백을 보여줘야 합니다.
- `App.tsx`가 비대해지면 page 단위 컴포넌트로 화면 조립 코드를 분리해 이후 라우터 확장에 대비할 수 있습니다.

## 직접 실습 원칙

- 세팅 파일은 읽고 이해하는 것을 목표로 합니다.
- 컴포넌트 파일은 단계별로 직접 생성합니다.
- 한 번에 전체 UI를 만들지 않고, 화면에서 확인 가능한 작은 단위로 진행합니다.
- 각 단계마다 사용한 Tailwind class의 이유를 짧게 기록합니다.
