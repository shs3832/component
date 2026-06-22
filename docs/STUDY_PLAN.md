# Tailwind Admin UI Study Plan

## 목표

React 컴포넌트 구조 안에서 Tailwind CSS v4를 사용해 운영형 관리자 UI를 구현합니다.

성공 기준은 다음과 같습니다.

- Tailwind v4의 `@theme` 토큰을 실제 컴포넌트에서 사용한다.
- 라이트 모드와 다크 모드 스타일을 함께 설계한다.
- PC에서는 테이블, 모바일에서는 카드 리스트로 UI를 전환한다.
- 검색과 필터는 mock data와 React state만으로 구현한다.
- 마지막에 README에 학습 포인트를 정리한다.

## 1단계. 세팅 확인

목표: Tailwind v4가 Vite에서 정상 동작하는지 확인합니다.

확인할 파일:

- `vite.config.ts`
- `src/index.css`
- `src/App.tsx`

직접 해볼 것:

- `src/App.tsx`의 `text-brand-600`을 `text-brand-500`으로 바꿔보기
- `src/index.css`의 `--color-brand-500` 값을 다른 색으로 바꿔보기
- 브라우저에서 색상이 바뀌는지 확인하기

## 2단계. 공통 컴포넌트

목표: 반복해서 쓸 UI 단위를 작게 분리합니다.

직접 만들 파일:

- `src/components/common/Button.tsx`
- `src/components/common/Badge.tsx`
- `src/components/common/Card.tsx`
- `src/components/common/ThemeToggle.tsx`

학습 포인트:

- `px`, `py`, `rounded`, `border`, `shadow-sm`
- `hover:`, `focus-visible:`, `disabled:`
- `dark:`
- variant에 따라 class를 조합하는 방식

## 3단계. 관리자 레이아웃

목표: Sidebar, Header, Main 구조를 만듭니다.

직접 만들 파일:

- `src/components/layout/AdminLayout.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/components/layout/Header.tsx`

학습 포인트:

- `min-h-screen`
- `fixed`, `sticky`, `top-0`
- `hidden lg:block`
- `lg:pl-64`
- `bg-zinc-*`, `text-zinc-*`, `border-zinc-*`

## 4단계. 대시보드 카드

목표: 통계 카드 4개를 반응형 grid로 배치합니다.

직접 만들 파일:

- `src/components/dashboard/StatCard.tsx`
- `src/components/dashboard/DashboardPanel.tsx`

학습 포인트:

- `grid`
- `grid-cols-1`
- `md:grid-cols-2`
- `xl:grid-cols-4`
- 카드 내부 텍스트 계층

## 5단계. 문의 데이터와 테이블

목표: mock data를 기준으로 고객 문의 테이블을 만듭니다.

직접 만들 파일:

- `src/types/inquiry.ts`
- `src/data/inquiries.ts`
- `src/components/table/InquiryTable.tsx`

학습 포인트:

- semantic table 구조
- `thead`, `tbody`, `th`, `td`
- `divide-y`, `border`, `hover:bg-*`
- Empty State

## 6단계. 검색과 필터

목표: React state로 검색어, 상태, 카테고리 필터를 연결합니다.

직접 만들 파일:

- `src/components/table/InquiryFilters.tsx`

학습 포인트:

- input/select 스타일링
- `focus:border-*`
- `focus:ring-*`
- controlled input
- 원본 데이터와 필터 결과 분리

## 7단계. 모바일 카드 리스트

목표: PC에서는 테이블, 모바일에서는 카드 리스트를 보여줍니다.

직접 만들 파일:

- `src/components/table/InquiryMobileList.tsx`

학습 포인트:

- `hidden md:block`
- `md:hidden`
- `fixed bottom-0 left-0 right-0`
- 모바일 하단 고정 버튼과 본문 padding

## 8단계. 다크모드

목표: `html.dark` 클래스와 localStorage로 테마를 저장합니다.

수정할 파일:

- `src/components/common/ThemeToggle.tsx`
- `src/main.tsx` 또는 별도 theme 유틸 파일

학습 포인트:

- `document.documentElement`
- `localStorage`
- `prefers-color-scheme`
- `dark:` utility

## 9단계. README 회고

목표: 단순 결과물이 아니라 학습한 내용을 정리합니다.

정리할 내용:

- Tailwind v4에서 달라진 점
- `@theme`를 사용한 이유
- 반응형 UI 전략
- 다크모드 전략
- React 컴포넌트 분리 기준
- 다음에 개선하고 싶은 점
