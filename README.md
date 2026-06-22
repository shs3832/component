# react-tailwind-admin-ui

React + Vite + TypeScript + Tailwind CSS v4로 운영형 관리자 UI를 직접 만들어보는 스터디 프로젝트입니다.

이번 프로젝트의 핵심은 큰 서비스를 완성하는 것이 아니라, Tailwind v4의 CSS-first 설정 방식과 React 컴포넌트 구조 안에서 UI를 조립하는 감각을 익히는 것입니다.

## 현재 상태

- Vite React TypeScript 프로젝트 생성 완료
- Tailwind CSS v4 설치 완료
- `@tailwindcss/vite` 플러그인 연결 완료
- `src/index.css`에 `@theme`, `@custom-variant dark` 설정 완료
- 아직 공통 컴포넌트와 관리자 UI는 구현하지 않은 상태

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
10. README 회고 정리하기

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

## 직접 실습 원칙

- 세팅 파일은 읽고 이해하는 것을 목표로 합니다.
- 컴포넌트 파일은 단계별로 직접 생성합니다.
- 한 번에 전체 UI를 만들지 않고, 화면에서 확인 가능한 작은 단위로 진행합니다.
- 각 단계마다 사용한 Tailwind class의 이유를 짧게 기록합니다.
