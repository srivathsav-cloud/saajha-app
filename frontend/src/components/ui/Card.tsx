import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <section className={cn('min-w-0 rounded-[28px] border border-[#DCE7F5] bg-white p-5 shadow-card', className)}>{children}</section>;
}
