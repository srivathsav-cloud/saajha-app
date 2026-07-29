type ProgressBarProps = {
  value: number;
  label?: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      {label ? <div className="flex items-center justify-between text-sm text-[#51617D]">{label}</div> : null}
      <div className="h-3 overflow-hidden rounded-full bg-[#E8F5FF]">
        <div className="h-full rounded-full bg-[#0F6FEF] transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
