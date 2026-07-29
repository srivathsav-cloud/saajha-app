import { CalendarClock, CheckCircle2, Phone } from 'lucide-react';
import { ProgressBar } from '../../../components/ui/ProgressBar';

type ProgressSummaryProps = {
  volunteer: {
    calls: number;
    completedAssessments: number;
    pendingFollowUps: number;
    weeklyGoalPercent: number;
  };
};

export function ProgressSummary({ volunteer }: ProgressSummaryProps) {
  const stats = [
    { label: "Today's Calls", value: volunteer.calls, tone: 'blue' },
    { label: 'Completed Assessments', value: volunteer.completedAssessments, tone: 'teal' },
    { label: 'Pending Follow-ups', value: volunteer.pendingFollowUps, tone: 'warning' },
    { label: 'Weekly Goal', value: `${volunteer.weeklyGoalPercent}%`, subtext: '20 calls', tone: 'blue' }
  ];

  return (
    <section className="rounded-[28px] border border-[#DCE7F5] bg-white p-6 shadow-card">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">Your Progress Today</p>
          <p className="mt-4 text-sm text-[#51617D]">Keep moving through your parent tasks with consistent follow-ups.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-[#E8F1FF] bg-[#F7FBFF] p-4 min-w-0">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${stat.tone === 'teal' ? 'bg-[#EAF3FF] text-[#009E9A]' : stat.tone === 'warning' ? 'bg-[#FFF4E6] text-[#F97316]' : 'bg-[#EAF3FF] text-[#0F6FEF]'}`}>
                  {stat.tone === 'warning' ? <CalendarClock size={18} /> : stat.tone === 'teal' ? <CheckCircle2 size={18} /> : <Phone size={18} />}
                </span>
                <div>
                  <p className="text-2xl font-semibold text-[#071B45]">{stat.value}</p>
                  <p className="text-sm text-[#51617D]">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between gap-4 text-sm text-[#51617D]">
          <span>Weekly Goal</span>
          <span className="font-semibold text-[#071B45]">{volunteer.weeklyGoalPercent}%</span>
        </div>
        <ProgressBar value={volunteer.weeklyGoalPercent} />
      </div>
    </section>
  );
}
