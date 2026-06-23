import type React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}
export default function Button({ variant = "primary", children, size = "sm", className = "", ...props }: IButtonProps) {
  const sizeClass = {
    sm: "h-9 px-3",
    md: "h-10 px-4",
  };
  const baseClass = `inline-flex items-center justify-center rounded-lg text-sm font-medium cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30
                disabled:opacity-50 disabled:cursor-not-allowed
                transition duration-150 ease-out enabled:active:scale-[0.98]
                `;

  const primary = `bg-brand-500 text-white 
                enabled:hover:bg-brand-600`;

  const secondary = `bg-white text-zinc-700 border border-zinc-300 
                enabled:hover:bg-zinc-50 
                dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:enabled:hover:bg-zinc-800`;

  const danger = `bg-danger-500 text-white 
                enabled:hover:bg-red-700`;

  const variantClass = {
    primary,
    secondary,
    danger,
  };
  return (
    <button
      type="button"
      className={`${variantClass[variant]} ${sizeClass[size]} ${baseClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
