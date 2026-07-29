import { CalendarDays, ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../components/layout/DashboardLayout';
import { adminStats, callOutcomes, topVolunteers, parentAllocationStatus, bigQuerySync } from '../../../data/mockAdmin';
import { apiGet } from '../../../lib/apiClient';
import { logFrontendAction } from '../../../lib/actionLogger';
import { AdminKpiGrid } from '../components/AdminKpiGrid';
import { BigQuerySyncCard } from '../components/BigQuerySyncCard';
import { CallOutcomesCard } from '../components/CallOutcomesCard';
import { VolunteerPerformanceTable } from '../components/VolunteerPerformanceTable';

type AdminDashboardResponse = {
  dateRange: string;
  summary: {
    eligibleParents: number;
    locked: number;
    callsToday: number;
    callbacksPending: number;
    activeVolunteers: number;
  };
  allocationStatus: Array<{ label: string; share: string; value: string }>;
  volunteerPerformance: Array<{ name: string; calls: number; successRate: string; outcomes: string }>;
  callOutcomes: Array<{ label: string; value: number; percentage: string; color: string }>;
};

type BigQuerySyncResponse = {
  status: string;
  message: string;
  lastSync: string;
  nextSync: string;
  frequency: string;
  timezone: string;
};

const fallbackDashboard: AdminDashboardResponse = {
  dateRange: adminStats.dateRange,
  summary: {
    eligibleParents: adminStats.eligibleParents,
    locked: adminStats.locked,
    callsToday: adminStats.callsToday,
    callbacksPending: adminStats.callbacksPending,
    activeVolunteers: adminStats.activeVolunteers,
  },
  allocationStatus: parentAllocationStatus.map((item) => ({
    label: item.label,
    share: item.share,
    value: String(item.value),
  })),
  volunteerPerformance: topVolunteers.map((item) => ({
    name: item.name,
    calls: item.callsToday,
    successRate: item.conversion,
    outcomes: item.completed.toString(),
  })),
  callOutcomes: callOutcomes.map((item) => ({
    label: item.label,
    value: item.value,
    percentage: item.percentage,
    color: item.color,
  })),
};

export function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState<AdminDashboardResponse>(fallbackDashboard);
  const [sync, setSync] = useState<BigQuerySyncResponse>({
    status: bigQuerySync.status,
    message: bigQuerySync.message,
    lastSync: bigQuerySync.lastSync,
    nextSync: bigQuerySync.nextSync,
    frequency: bigQuerySync.frequency,
    timezone: bigQuerySync.timezone,
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      setLoading(true);
      setErrorMessage(null);

      try {
        const [dashboardData, syncData] = await Promise.all([
          apiGet<AdminDashboardResponse>('/admin/dashboard'),
          apiGet<BigQuerySyncResponse>('/admin/bigquery-sync/status'),
        ]);
        setDashboard(dashboardData);
        setSync(syncData);
        void logFrontendAction({
          eventType: 'dashboard_loaded',
          element: 'Admin dashboard',
          route: '/admin',
          metadata: { source: 'backend' },
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.warn('Unable to load admin dashboard from API, falling back to mock data.', error);
        setErrorMessage(message);
        setDashboard(fallbackDashboard);
        void logFrontendAction({
          eventType: 'dashboard_load_failed',
          element: 'Admin dashboard',
          route: '/admin',
          metadata: { source: 'fallback', details: message },
        });
      } finally {
        setLoading(false);
      }
    }

    void loadDashboard();
  }, []);

  return (
    <DashboardLayout
      persona="admin"
      title="Admin Dashboard"
      subtitle="Monitor platform performance, volunteer activity, and system health."
    >
      <div className="space-y-8 min-w-0">
        <div className="flex flex-col gap-3 rounded-[28px] border border-[#DCE7F5] bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between min-w-0">
          <div className="flex items-center gap-3 text-sm text-[#33445F]">
            <CalendarDays size={18} />
            <span>{dashboard.dateRange}</span>
            <ChevronDown size={18} />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {errorMessage ? (
              <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-semibold text-[#C96A00]">Using fallback data: {errorMessage}</span>
            ) : null}
            {loading ? <span className="text-sm text-[#51617D]">Loading live dashboard…</span> : null}
            <button type="button" className="rounded-2xl border border-[#DCE7F5] bg-[#F7FBFF] px-4 py-2 text-sm font-semibold text-[#0F6FEF] hover:bg-[#EDF5FF]">
              <Download size={18} className="mr-2 inline-block" />
              Export CSV
            </button>
            <button type="button" className="rounded-2xl bg-[#0F6FEF] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#0F6FEF]/10 hover:bg-[#0C5DD7]">
              Export Report
            </button>
          </div>
        </div>

        <AdminKpiGrid summary={dashboard.summary} />

        <div className="grid gap-6 min-w-0 xl:grid-cols-[1.4fr_0.9fr]">
          <VolunteerPerformanceTable volunteerPerformance={dashboard.volunteerPerformance} />
          <div className="grid gap-6 min-w-0">
            <CallOutcomesCard callOutcomes={dashboard.callOutcomes} />
            <BigQuerySyncCard sync={sync} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
