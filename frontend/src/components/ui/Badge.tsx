import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'locked' | 'neutral';
  className?: string;
};

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  success: 'bg-[#E8F8EF] text-[#0F6FEF] border border-[#CFF0DD]',
  warning: 'bg-[#FFF4E6] text-[#B45309] border border-[#FCD29C]',
  info: 'bg-[#EAF3FF] text-[#0F6FEF] border border-[#D3E6FF]',
  locked: 'bg-[#EAF3FF] text-[#0057D9] border border-[#D8E8FF]',
  neutral: 'bg-[#F5F7FB] text-[#5B6C8F] border border-[#E3E8F3]'
};

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return <span className={`${badgeStyles[variant]} rounded-full px-3 py-1 text-[13px] font-semibold ${className}`}>{children}</span>;
}
