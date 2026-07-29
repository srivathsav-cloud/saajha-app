import type { ReactNode } from 'react';

type DonutSegment = {
  label: string;
  value: number;
  percentage: string;
  color: string;
};

type DonutChartProps = {
  segments: DonutSegment[];
  centerLabel: ReactNode;
};

export function DonutChart({ segments, centerLabel }: DonutChartProps) {
  const total = segments.reduce((sum, item) => sum + item.value, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <div className="flex min-w-0 items-center gap-6">
      <svg className="w-full max-w-[180px] h-auto" viewBox="0 0 180 180" aria-hidden="true">
        <g transform="translate(90 90)">
          {segments.map((segment, index) => {
            const dasharray = `${(segment.value / total) * circumference} ${circumference}`;
            const stroke = segment.color;
            const element = (
              <circle
                key={segment.label}
                r={radius}
                fill="none"
                stroke={stroke}
                strokeWidth="24"
                strokeDasharray={dasharray}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                transform="rotate(-90)"
              />
            );
            offset += (segment.value / total) * circumference;
            return element;
          })}
          <circle r={radius - 18} fill="#FFFFFF" />
        </g>
      </svg>
      <div className="flex flex-col items-center justify-center gap-1 text-center text-sm text-[#51617D]">
        {centerLabel}
      </div>
    </div>
  );
}
