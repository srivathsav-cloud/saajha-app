import { CalendarClock, Lock, Phone, UserRoundCheck, UsersRound } from 'lucide-react';
import { MetricCard } from '../../../components/ui/MetricCard';

type AdminKpiGridProps = {
  summary: {
    eligibleParents: number;
    locked: number;
    callsToday: number;
    callbacksPending: number;
    activeVolunteers: number;
  };
};

export function AdminKpiGrid({ summary }: AdminKpiGridProps) {
  return (
    <section className="grid gap-5 lg:grid-cols-3 xl:grid-cols-5">
      <MetricCard icon={<UsersRound />} value={summary.eligibleParents.toLocaleString()} label="Eligible Parents" helper="All time" />
      <MetricCard icon={<Lock />} value={summary.locked} label="Currently Locked" helper="Current lock count" tone="green" />
      <MetricCard icon={<Phone />} value={summary.callsToday} label="Calls Today" helper="Today" />
      <MetricCard icon={<CalendarClock />} value={summary.callbacksPending} label="Callbacks Pending" helper="Pending follow-up" tone="orange" />
      <MetricCard icon={<UserRoundCheck />} value={summary.activeVolunteers} label="Active Volunteers" helper="Currently active" />
    </section>
  );
}
