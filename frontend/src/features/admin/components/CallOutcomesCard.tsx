import { Card } from '../../../components/ui/Card';
import { DonutChart } from '../../../components/ui/DonutChart';

type CallOutcomesCardProps = {
  callOutcomes: Array<{
    label: string;
    value: number;
    percentage: string;
    color: string;
  }>;
};

export function CallOutcomesCard({ callOutcomes }: CallOutcomesCardProps) {
  const segments = callOutcomes.map((item) => ({ label: item.label, value: item.value, percentage: item.percentage, color: item.color }));

  return (
    <Card className="space-y-6 min-w-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">Call Outcomes</p>
          <p className="mt-2 text-sm text-[#51617D]">This Week</p>
        </div>
        <button type="button" className="rounded-2xl bg-[#F7FBFF] px-4 py-2 text-sm font-semibold text-[#0F6FEF]">View outcome breakdown</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[180px_minmax(1fr,240px)] lg:items-center">
        <div className="flex items-center justify-center">
          <DonutChart
            segments={segments}
            centerLabel={
              <div className="space-y-1 text-center">
                <p className="text-3xl font-semibold text-[#071B45]">{callOutcomes.reduce((sum, item) => sum + item.value, 0)}</p>
                <p className="text-sm text-[#51617D]">Total Calls</p>
              </div>
            }
          />
        </div>
        <div className="grid gap-3">
          {segments.map((segment) => (
            <div key={segment.label} className="flex items-center justify-between rounded-[18px] border border-[#E9F1FF] bg-[#F7FBFF] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: segment.color }} />
                <p className="text-sm font-semibold text-[#071B45]">{segment.label}</p>
              </div>
              <p className="text-sm font-semibold text-[#071B45]">{segment.value} ({segment.percentage})</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
