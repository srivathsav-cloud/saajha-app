import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'teal' | 'outline' | 'ghost' | 'danger';
  icon?: ReactNode;
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#0F6FEF] text-white hover:bg-[#0057d9] focus-visible:outline-[#0F6FEF]',
  teal: 'bg-[#009E9A] text-white hover:bg-[#008C88] focus-visible:outline-[#008C88]',
  outline: 'border border-[#DCE7F5] bg-white text-[#071B45] hover:bg-[#F4F7FF] focus-visible:outline-[#0F6FEF]',
  ghost: 'bg-transparent text-[#071B45] hover:bg-[#F4F7FF] focus-visible:outline-[#0F6FEF]',
  danger: 'bg-[#EF4444] text-white hover:bg-[#dc2626] focus-visible:outline-[#EF4444]'
};

export function Button({ children, className = '', variant = 'primary', icon, ...props }: ButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[14px] px-4 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
