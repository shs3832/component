# CVA Button 예시

`cva(class-variance-authority)`는 Tailwind class를 `variant`, `size` 같은 상태 조합으로 관리할 때 사용하는 도구입니다.

현재 프로젝트의 `Button`은 `Record` 형태의 `variantClass`, `sizeClass`만으로도 충분히 단순합니다.
따라서 지금 바로 적용하기보다는, shadcn/ui 같은 실무 코드를 읽기 위한 참고 예시로만 둡니다.

## 현재 Button 방식

```tsx
const sizeClass = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
};

const variantClass = {
  primary: "bg-brand-500 text-white enabled:hover:bg-brand-600",
  secondary: "border border-zinc-300 bg-white text-zinc-700 enabled:hover:bg-zinc-50",
  danger: "bg-danger-500 text-white enabled:hover:bg-danger-600",
};
```

이 방식은 상태 조합이 적을 때 읽기 쉽고, 별도 라이브러리 문법을 몰라도 이해하기 좋습니다.

## CVA로 바꾸면 이런 형태

```tsx
import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-lg text-sm font-medium",
    "cursor-pointer transition duration-150 ease-out",
    "enabled:active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-brand-500 text-white enabled:hover:bg-brand-600",
        secondary:
          "border border-zinc-300 bg-white text-zinc-700 enabled:hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:enabled:hover:bg-zinc-800",
        danger: "bg-danger-500 text-white enabled:hover:bg-danger-600",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button type="button" className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <span>{children}</span>
    </button>
  );
}
```

## CVA가 좋아지는 시점

```txt
variant, size 정도만 있다
-> Record 방식으로 충분

variant, size, tone, fullWidth, iconOnly, loading 등이 늘어난다
-> cva 고려

여러 variant 조합에 따라 특별한 class가 필요하다
-> cva의 compoundVariants 고려

shadcn/ui 컴포넌트를 읽거나 커스터마이즈한다
-> cva 구조를 이해하면 좋음
```

## 현재 프로젝트 기준 결론

현재 `Button`은 직접 만든 `Record` 방식이 더 단순하고 읽기 쉽습니다.
`cva`는 지금 당장 적용하기보다, 컴포넌트 variant가 복잡해지거나 shadcn/ui 기반 컴포넌트를 다룰 때 도입을 검토합니다.
