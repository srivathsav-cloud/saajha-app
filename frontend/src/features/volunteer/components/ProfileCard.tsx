import { ChevronRight } from 'lucide-react';
import { Card } from '../../../components/ui/Card';

type ProfileCardProps = {
  profile: {
    relationship: string;
    language: string;
    location: string;
    childName: string;
    childDob: string;
    school: string;
    notes: string;
  };
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">2. Parent & Child Profile</p>
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-[#DCE7F5] bg-[#F7FBFF] px-3 py-2 text-sm text-[#0F6FEF]">
          View
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="hidden lg:grid grid-cols-[140px_1fr] gap-4 text-sm text-[#51617D]">
          <span className="font-semibold text-[#071B45]">Parent Name</span>
          <span>{profile.childName}</span>
          <span className="font-semibold text-[#071B45]">Relationship</span>
          <span>{profile.relationship}</span>
          <span className="font-semibold text-[#071B45]">Language</span>
          <span>{profile.language}</span>
          <span className="font-semibold text-[#071B45]">Location</span>
          <span>{profile.location}</span>
          <span className="font-semibold text-[#071B45]">Child Name</span>
          <span>{profile.childName}</span>
          <span className="font-semibold text-[#071B45]">Child DOB</span>
          <span>{profile.childDob}</span>
          <span className="font-semibold text-[#071B45]">School</span>
          <span>{profile.school}</span>
          <span className="font-semibold text-[#071B45]">Notes</span>
          <span>{profile.notes}</span>
        </div>

        <div className="lg:hidden rounded-[24px] bg-[#F7FBFF] p-4 text-sm text-[#51617D] shadow-sm">
          <p>{profile.relationship} • {profile.language} • {profile.location}</p>
          <p className="mt-3 font-semibold text-[#071B45]">{profile.childName}</p>
          <p className="mt-1 text-sm text-[#7B8AA5]">DOB: {profile.childDob}</p>
        </div>
      </div>
    </Card>
  );
}
