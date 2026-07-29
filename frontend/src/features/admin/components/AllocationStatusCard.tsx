import { Card } from '../../../components/ui/Card';
import { parentAllocationStatus } from '../../../data/mockAdmin';

export function AllocationStatusCard() {
  return (
    <Card className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">Parent Allocation Status</p>
          <p className="mt-2 text-sm text-[#51617D]">Total eligible parents and current status.</p>
        </div>
        <p className="text-sm font-semibold text-[#071B45]">Total {parentAllocationStatus.reduce((sum, item) => sum + Number(item.value.toString().replace(/,/g, '')), 0).toLocaleString()}</p>
      </div>
      <div className="grid gap-3">
        {parentAllocationStatus.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-[18px] bg-[#F7FBFF] px-4 py-4 text-sm text-[#071B45]">
            <div>
              <p className="font-semibold">{item.label}</p>
              <p className="text-[#51617D]">{item.share}</p>
            </div>
            <p className="text-lg font-semibold text-[#071B45]">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
