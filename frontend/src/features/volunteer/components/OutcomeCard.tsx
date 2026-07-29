import { Card } from '../../../components/ui/Card';
import { ChevronRight } from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';

type OutcomeCardProps = {
  outcome: {
    callbackDate: string;
    callbackTime: string;
    tag: string;
  };
};

export function OutcomeCard({ outcome }: OutcomeCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">4. Outcome & Follow-up</p>
        </div>
        <Badge variant="success">Connected</Badge>
      </div>
      <div className="space-y-4 rounded-[24px] border border-[#E7EEF8] bg-[#F7FBFF] p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[20px] bg-white p-4 shadow-sm">
            <p className="text-xs uppercase text-[#51617D]">Callback</p>
            <p className="mt-2 text-base font-semibold text-[#071B45]">{outcome.callbackDate}</p>
          </div>
          <div className="rounded-[20px] bg-white p-4 shadow-sm">
            <p className="text-xs uppercase text-[#51617D]">Time</p>
            <p className="mt-2 text-base font-semibold text-[#071B45]">{outcome.callbackTime}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[20px] bg-white p-4 shadow-sm">
          <div>
            <p className="text-xs uppercase text-[#51617D]">Follow-up Tag</p>
            <p className="mt-2 text-base font-semibold text-[#071B45]">{outcome.tag}</p>
          </div>
          <ChevronRight size={20} className="text-[#0F6FEF]" />
        </div>
      </div>
    </Card>
  );
}
