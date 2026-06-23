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
- transition, focus-visible, disabled, group-hover, data-state 등 실무형 Tailwind 상태 패턴 적용
- `clsx`, `tailwind-merge` 기반 `cn` 유틸 추가
- shadcn/ui Dialog를 추가해 Radix 기반 컴포넌트 구조 확인

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
13. transition, focus-visible, disabled 상태 다듬기
14. group-hover, data-state, aria-current 패턴 확인하기
15. truncate, line-clamp, min-w-0로 텍스트 넘침 처리하기
16. arbitrary value/variant, @apply 사용 판단 정리하기
17. `cn`, cva, shadcn/Radix 실무 패턴 맛보기

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
  lib/           shadcn utility
  pages/         DashboardPage
  types/         inquiry type
  utils/         cn utility study
docs/
  TAILWIND_APPLY_EXAMPLES.md
  CVA_BUTTON_EXAMPLE.md
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
- 버튼은 `hover`뿐 아니라 `active`, `focus-visible`, `disabled` 상태까지 함께 고려해야 실제 사용성이 좋아집니다.
- `enabled:hover`, `enabled:active`처럼 활성 상태에서만 동작해야 하는 modifier를 분리하면 disabled 상태와 interaction이 섞이지 않습니다.
- `group-hover`는 부모 요소의 hover 상태를 기준으로 자식 요소 스타일을 바꿀 때 유용합니다.
- `data-state`와 `aria-current`는 상태 기반 스타일과 접근성 의미를 함께 표현할 때 사용할 수 있습니다.
- 테이블 제목은 `truncate`로 한 줄 말줄임 처리하고, 모바일 카드 제목은 `line-clamp-2`로 두 줄까지 보여주는 식으로 화면 성격에 따라 넘침 전략을 다르게 잡을 수 있습니다.
- `min-w-0`은 flex/grid 안에서 텍스트가 줄어들지 않아 `truncate`가 동작하지 않을 때 확인해야 하는 실무 포인트입니다.
- arbitrary value는 `active:scale-[0.98]`처럼 일회성 보정에 적합하고, 반복되는 디자인 값은 `@theme` 토큰이나 공통 컴포넌트로 승격하는 편이 좋습니다.
- `@apply`는 React 컴포넌트 기반 UI의 주력 방식이라기보다, 마크다운/외부 HTML/레거시 구조처럼 JSX로 직접 제어하기 어려운 경우에 제한적으로 검토합니다.
- `cn`은 props 기반 class 조합, 외부 `className` 병합, Tailwind class 충돌 정리에 유용합니다.
- cva는 현재 프로젝트에 바로 적용하지 않아도 되지만, variant 조합이 많아지는 컴포넌트나 shadcn/ui 코드를 읽을 때 구조를 이해해두면 좋습니다.
- Radix는 접근성 있는 동작 뼈대이고, shadcn/ui는 Radix 기반 컴포넌트에 Tailwind 스타일과 `cn`/cva 패턴을 입혀 프로젝트 코드로 가져오는 도구입니다.

## 학습 종료 기준

이번 스터디에서는 Tailwind를 단순 class 문법이 아니라, 토큰, 상태, 반응형, 다크모드, 접근성 상태, 텍스트 넘침, class 조합 유틸, UI 라이브러리 연동 관점에서 확인했습니다.

이후 추가 학습은 Tailwind 자체보다 React 공통 컴포넌트 설계, shadcn/Radix 활용, form 상태 관리, 라우팅/API 연동 같은 별도 주제로 분리해서 진행합니다.

## 직접 실습 원칙

- 세팅 파일은 읽고 이해하는 것을 목표로 합니다.
- 컴포넌트 파일은 단계별로 직접 생성합니다.
- 한 번에 전체 UI를 만들지 않고, 화면에서 확인 가능한 작은 단위로 진행합니다.
- 각 단계마다 사용한 Tailwind class의 이유를 짧게 기록합니다.
