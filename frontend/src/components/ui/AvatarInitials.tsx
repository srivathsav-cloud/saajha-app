import type { HTMLAttributes } from 'react';

type AvatarInitialsProps = HTMLAttributes<HTMLDivElement> & {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-16 w-16 text-xl'
};

export function AvatarInitials({ initials, size = 'md', className = '', ...rest }: AvatarInitialsProps) {
  return (
    <div
      className={`grid place-items-center rounded-2xl bg-[#EAF3FF] text-[#0F6FEF] font-bold ${sizeMap[size]} ${className}`}
      {...rest}
    >
      {initials}
    </div>
  );
}
