# Tailwind `@apply` 예시

`@apply`는 Tailwind utility class를 CSS selector 안에 묶어 쓰는 문법입니다.

React 컴포넌트에서는 보통 utility class를 JSX에 직접 쓰거나, 반복 UI를 컴포넌트와 props로 분리하는 편이 더 자연스럽습니다.
따라서 `@apply`는 주력 패턴이라기보다, JSX로 직접 제어하기 어려운 HTML을 Tailwind 토큰에 맞출 때 쓰는 보조 수단으로 이해합니다.

## 1. 마크다운 / 외부 HTML 스타일링

마크다운 렌더링 결과나 CMS에서 내려오는 HTML은 `h2`, `p`, `a` 같은 요소에 직접 `className`을 붙이기 어렵습니다.
이런 경우 wrapper class를 하나 두고, 그 안의 HTML 요소를 CSS selector로 스타일링할 수 있습니다.

```tsx
// 예시: 외부에서 받은 HTML을 렌더링하는 컴포넌트
// 실제 서비스에서는 XSS 방지를 위해 HTML sanitize 처리가 필요합니다.
export default function MarkdownPreview({ html }: { html: string }) {
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />;
}
```

```css
@layer components {
  /* markdown-body 안의 h2만 대상으로 Tailwind utility를 적용합니다. */
  .markdown-body h2 {
    @apply mt-8 text-xl font-bold text-zinc-900;
  }

  /* 외부 HTML의 p 태그에 직접 className을 줄 수 없으므로 CSS에서 처리합니다. */
  .markdown-body p {
    @apply mt-4 text-sm leading-7 text-zinc-600;
  }

  /* 링크 스타일도 프로젝트 토큰에 맞춰 통일할 수 있습니다. */
  .markdown-body a {
    @apply text-brand-600 underline underline-offset-4;
  }
}
```

## 2. 전역 form-control 기본 스타일

여러 페이지에서 같은 input/select 스타일을 빠르게 맞춰야 할 때 사용할 수 있습니다.
다만 React 프로젝트라면 `Input`, `Select` 컴포넌트로 분리하는 방식이 더 확장에 유리한 경우가 많습니다.

```css
@layer components {
  .form-control {
    /* 공통 크기, border, typography */
    @apply h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900;

    /* focus 상태 */
    @apply focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20;

    /* disabled 상태 */
    @apply disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400;
  }
}
```

```tsx
// 간단한 화면에서는 이렇게 쓸 수 있습니다.
// 하지만 상태, 에러 메시지, label, helper text가 필요해지면 컴포넌트 분리가 더 좋습니다.
<input className="form-control" placeholder="고객명 검색" />
<select className="form-control">
  <option>전체 상태</option>
</select>
```

## 3. 레거시 HTML에 Tailwind 입히기

React 컴포넌트로 바꾸기 어려운 기존 HTML, 서버 템플릿, CMS 조각에 Tailwind 토큰을 입혀야 할 때 사용할 수 있습니다.

```html
<!-- 예전 템플릿에서 이미 사용 중인 HTML이라고 가정합니다. -->
<div class="legacy-card">
  <h3>공지사항</h3>
  <p>시스템 점검 안내입니다.</p>
</div>
```

```css
@layer components {
  /* 기존 class 이름은 유지하되, 내부 스타일만 Tailwind 토큰으로 맞춥니다. */
  .legacy-card {
    @apply rounded-lg border border-zinc-200 bg-white p-4 shadow-sm;
  }

  .legacy-card h3 {
    @apply text-base font-semibold text-zinc-900;
  }

  .legacy-card p {
    @apply mt-2 text-sm text-zinc-600;
  }
}
```

## 4. 컴포넌트화하기 애매한 작은 반복 패턴

여러 화면에서 아주 작은 텍스트 패턴이 반복되지만 컴포넌트로 만들기에는 과한 경우 사용할 수 있습니다.
반복이 늘거나 의미가 커지면 `SectionHeader` 같은 컴포넌트로 분리하는 편이 더 좋습니다.

```css
@layer components {
  .section-eyebrow {
    @apply text-xs font-semibold uppercase text-brand-600;
  }
}
```

```tsx
<p className="section-eyebrow">Dashboard</p>
```

## 판단 기준

```txt
JSX를 직접 제어할 수 있다
-> utility class 직접 작성, 컴포넌트 분리, props 기반 class map을 우선 고려

HTML 구조를 직접 제어하기 어렵다
-> markdown, CMS, legacy HTML처럼 @apply를 고려할 수 있음

전역적으로 같은 기본 스타일이 필요하다
-> form-control 같은 작은 패턴에 제한적으로 사용 가능

variant, size, disabled, loading 같은 상태가 필요하다
-> @apply보다 React 컴포넌트와 props로 관리하는 편이 더 자연스러움
```

## 현재 프로젝트 기준 결론

이 프로젝트의 `Button`, `Badge`, `Card`는 React 컴포넌트와 props로 관리하는 편이 적절합니다.
`@apply`는 현재 코드에 적극 적용하기보다, 외부 HTML이나 전역 스타일 예외를 만났을 때 검토할 보조 수단으로 둡니다.
