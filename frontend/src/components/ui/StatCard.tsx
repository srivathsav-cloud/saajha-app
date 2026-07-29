import type { ReactNode } from 'react';

type StatCardProps = {
  icon: ReactNode;
  value: string | number;
  label: string;
  subtext?: string;
  trend?: string;
  tone?: 'blue' | 'teal' | 'green' | 'orange' | 'red' | 'neutral';
  className?: string;
};

const toneStyles: Record<NonNullable<StatCardProps['tone']>, string> = {
  blue: 'bg-[#EAF3FF] text-[#0F6FEF]',
  teal: 'bg-[#EAF3FF] text-[#009E9A]',
  green: 'bg-[#E8F8EF] text-[#12A56A]',
  orange: 'bg-[#FFF4E6] text-[#F97316]',
  red: 'bg-[#FEE7E7] text-[#DC2626]',
  neutral: 'bg-[#F5F7FB] text-[#51617D]'
};

export function StatCard({ icon, value, label, subtext, trend, tone = 'neutral', className = '' }: StatCardProps) {
  return (
    <article className={`rounded-[28px] border border-[#DCE7F5] bg-white p-5 shadow-card ${className}`}>
      <div className="flex items-start gap-3">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${toneStyles[tone]}`}>{icon}</span>
        <div>
          <p className="text-sm font-semibold text-[#51617D]">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-[#071B45]">{value}</p>
          {subtext ? <p className="mt-2 text-sm text-[#7B8AA5]">{subtext}</p> : null}
          {trend ? <p className="mt-2 text-sm text-[#12A56A]">{trend}</p> : null}
        </div>
      </div>
    </article>
  );
}
