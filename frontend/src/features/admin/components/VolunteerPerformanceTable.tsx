import { Card } from '../../../components/ui/Card';
import { DataTable } from '../../../components/ui/DataTable';

type VolunteerPerformanceTableProps = {
  volunteerPerformance: Array<{
    name: string;
    calls: number;
    successRate: string;
    outcomes: string;
  }>;
};

export function VolunteerPerformanceTable({ volunteerPerformance }: VolunteerPerformanceTableProps) {
  const columns = [
    { header: 'Volunteer', render: (item: typeof volunteerPerformance[number]) => item.name },
    { header: 'Calls Today', render: (item: typeof volunteerPerformance[number]) => item.calls },
    { header: 'Success Rate', render: (item: typeof volunteerPerformance[number]) => item.successRate },
    { header: 'Outcomes', render: (item: typeof volunteerPerformance[number]) => item.outcomes }
  ];

  return (
    <Card className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">Volunteer Performance</p>
          <p className="mt-2 text-sm text-[#51617D]">Top volunteers this week.</p>
        </div>
        <button type="button" className="rounded-2xl bg-[#F7FBFF] px-4 py-2 text-sm font-semibold text-[#0F6FEF]">View full performance report</button>
      </div>
      <DataTable columns={columns} data={volunteerPerformance} rowKey={(item) => item.name} />
    </Card>
  );
}
