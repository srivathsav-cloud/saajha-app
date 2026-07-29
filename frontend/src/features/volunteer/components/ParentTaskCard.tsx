import { Info, Lock, Phone, UserRound } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { AvatarInitials } from '../../../components/ui/AvatarInitials';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

type ParentTaskCardProps = {
  parentTask: {
    parentName: string;
    phone: string;
    locked: boolean;
    lockedBy: string;
    lockedAt: string;
    childName: string;
    childLevel: string;
    heading: string;
    initials: string;
  };
};

export function ParentTaskCard({ parentTask }: ParentTaskCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF3FF] text-[#0F6FEF]">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#51617D]">{parentTask.heading}</p>
          </div>
        </div>
        <button type="button" aria-label="More actions" className="text-2xl leading-none text-[#A7B8D9]">⋮</button>
      </div>

      <div className="flex flex-col gap-5 rounded-[24px] bg-[#F7FBFF] p-5 sm:flex-row sm:items-center sm:gap-6">
        <AvatarInitials initials={parentTask.initials} size="lg" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-[#071B45]">{parentTask.parentName}</h3>
            <Badge variant="locked">{parentTask.locked ? 'Locked' : 'Open'}</Badge>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-[#51617D]">
            <Phone size={16} /> {parentTask.phone}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-[#7B8AA5]">
            Locked by {parentTask.lockedBy} at {parentTask.lockedAt}
            <Info size={16} />
          </p>
        </div>
      </div>

      <div className="grid gap-4 rounded-[24px] border border-[#E9F1FF] bg-white p-5 sm:grid-cols-[1.5fr_1fr] sm:items-center">
        <div>
          <p className="text-sm text-[#51617D]">Child Name</p>
          <p className="mt-2 text-lg font-semibold text-[#071B45] flex items-center gap-2"><UserRound size={18} /> {parentTask.childName}</p>
        </div>
        <div>
          <p className="text-sm text-[#51617D]">Grade</p>
          <p className="mt-2 text-lg font-semibold text-[#071B45]">{parentTask.childLevel}</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        <Button variant="primary" className="w-full justify-center">
          <Phone size={18} />
          Call via Exotel
        </Button>
        <Button variant="outline" className="w-full justify-center">
          <Lock size={18} />
          Release
        </Button>
      </div>
    </Card>
  );
}
