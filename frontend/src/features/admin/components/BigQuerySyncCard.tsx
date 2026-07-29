import { CheckCircle2 } from 'lucide-react';
import { Card } from '../../../components/ui/Card';

type BigQuerySyncCardProps = {
  sync: {
    status: string;
    message: string;
    lastSync: string;
    nextSync: string;
    frequency: string;
    timezone: string;
  };
};

export function BigQuerySyncCard({ sync }: BigQuerySyncCardProps) {
  return (
    <Card className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">BigQuery Daily Sync</p>
          <p className="mt-2 text-sm text-[#51617D]">Monitor daily ingestion health.</p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-[24px] border border-[#E9F1FF] bg-[#F7FBFF] p-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F8EF] text-[#12A56A]"><CheckCircle2 size={24} /></span>
        <div>
          <p className="font-semibold text-[#071B45]">{sync.status}</p>
          <p className="text-sm text-[#51617D]">{sync.message}</p>
        </div>
      </div>

      <div className="grid gap-3 text-sm text-[#51617D]">
        <div className="flex justify-between rounded-[18px] bg-[#F7FBFF] px-4 py-3">
          <span>Last Sync</span>
          <strong className="font-semibold text-[#071B45]">{sync.lastSync}</strong>
        </div>
        <div className="flex justify-between rounded-[18px] bg-[#F7FBFF] px-4 py-3">
          <span>Next Scheduled Sync</span>
          <strong className="font-semibold text-[#071B45]">{sync.nextSync}</strong>
        </div>
        <div className="flex justify-between rounded-[18px] bg-[#F7FBFF] px-4 py-3">
          <span>Sync Frequency</span>
          <strong className="font-semibold text-[#071B45]">{sync.frequency}</strong>
        </div>
        <div className="flex justify-between rounded-[18px] bg-[#F7FBFF] px-4 py-3">
          <span>Time Zone</span>
          <strong className="font-semibold text-[#071B45]">{sync.timezone}</strong>
        </div>
      </div>

      <div className="text-right">
        <button type="button" className="rounded-2xl bg-[#F7FBFF] px-4 py-2 text-sm font-semibold text-[#0F6FEF] hover:bg-[#EDF5FF]">View full sync history</button>
      </div>
    </Card>
  );
}
