import type { ReactNode } from 'react';

type MetricCardProps = {
  icon: ReactNode;
  value: string | number;
  label: string;
  helper?: string;
  tone?: 'blue' | 'green' | 'orange' | 'teal';
};

const toneStyles: Record<NonNullable<MetricCardProps['tone']>, string> = {
  blue: 'bg-[#EAF3FF] text-[#0F6FEF]',
  green: 'bg-[#E8F8EF] text-[#12A56A]',
  orange: 'bg-[#FFF4E6] text-[#F97316]',
  teal: 'bg-[#EAF3FF] text-[#009E9A]'
};

export function MetricCard({ icon, value, label, helper, tone = 'blue' }: MetricCardProps) {
  return (
    <article className="rounded-[28px] border border-[#DCE7F5] bg-white p-5 shadow-card">
      <div className="flex items-center gap-4">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${toneStyles[tone]}`}>{icon}</span>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#51617D]">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-[#071B45]">{value}</p>
          {helper ? <p className="mt-2 text-sm text-[#51617D]">{helper}</p> : null}
        </div>
      </div>
    </article>
  );
}
