import { CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../components/layout/DashboardLayout';
import { ParentTaskCard } from '../components/ParentTaskCard';
import { ProfileCard } from '../components/ProfileCard';
import { AssessmentCard } from '../components/AssessmentCard';
import { OutcomeCard } from '../components/OutcomeCard';
import { ProgressSummary } from '../components/ProgressSummary';
import { assessmentNotes, assessmentQuestions, allocatedParentTask, outcomeFollowUp, parentChildProfile, volunteerProfile } from '../../../data/mockVolunteer';
import { apiGet } from '../../../lib/apiClient';
import { logFrontendAction } from '../../../lib/actionLogger';

type VolunteerWorkspaceResponse = {
  volunteer: {
    name: string;
    calls: number;
    completedAssessments: number;
    pendingFollowUps: number;
    weeklyGoalPercent: number;
    date: string;
    day: string;
    initials: string;
  };
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
  profile: {
    relationship: string;
    language: string;
    location: string;
    childName: string;
    childDob: string;
    school: string;
    notes: string;
  };
  assessment: {
    questions: Array<{
      id: string;
      question: string;
      type: 'radios' | 'select';
      options: string[];
      value: string;
    }>;
    notes: {
      additional: string;
      feedback: string;
    };
  };
  outcome: {
    callbackDate: string;
    callbackTime: string;
    tag: string;
  };
};

const fallbackWorkspace: VolunteerWorkspaceResponse = {
  volunteer: {
    name: volunteerProfile.name,
    calls: volunteerProfile.stats[0].value as number,
    completedAssessments: volunteerProfile.stats[1].value as number,
    pendingFollowUps: volunteerProfile.stats[2].value as number,
    weeklyGoalPercent: volunteerProfile.progress,
    date: volunteerProfile.date,
    day: volunteerProfile.day,
    initials: volunteerProfile.initials,
  },
  parentTask: {
    parentName: allocatedParentTask.name,
    phone: allocatedParentTask.phone,
    locked: true,
    lockedBy: allocatedParentTask.lockedBy,
    lockedAt: allocatedParentTask.lockedAt,
    childName: allocatedParentTask.childName,
    childLevel: allocatedParentTask.childLevel,
    heading: allocatedParentTask.heading,
    initials: allocatedParentTask.initials,
  },
  profile: {
    relationship: parentChildProfile.relationship,
    language: parentChildProfile.language,
    location: parentChildProfile.location,
    childName: parentChildProfile.childName,
    childDob: parentChildProfile.childDob,
    school: parentChildProfile.school,
    notes: parentChildProfile.notes,
  },
  assessment: {
    questions: assessmentQuestions as VolunteerWorkspaceResponse['assessment']['questions'],
    notes: assessmentNotes,
  },
  outcome: {
    callbackDate: outcomeFollowUp.callbackDate,
    callbackTime: outcomeFollowUp.callbackTime,
    tag: outcomeFollowUp.tag,
  },
};

export function VolunteerWorkspacePage() {
  const [workspace, setWorkspace] = useState<VolunteerWorkspaceResponse>(fallbackWorkspace);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadWorkspace() {
      setLoading(true);
      setErrorMessage(null);

      try {
        const data = await apiGet<VolunteerWorkspaceResponse>('/volunteer/workspace');
        setWorkspace(data);
        void logFrontendAction({
          eventType: 'workspace_loaded',
          element: 'Volunteer workspace',
          route: '/volunteer',
          metadata: { source: 'backend' },
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.warn('Unable to load volunteer workspace from API, falling back to mock data.', error);
        setErrorMessage(message);
        setWorkspace(fallbackWorkspace);
        void logFrontendAction({
          eventType: 'workspace_load_failed',
          element: 'Volunteer workspace',
          route: '/volunteer',
          metadata: { source: 'fallback', details: message },
        });
      } finally {
        setLoading(false);
      }
    }

    void loadWorkspace();
  }, []);

  return (
    <DashboardLayout
      persona="volunteer"
      title={`Hello, ${workspace.volunteer.name}!`}
      subtitle="Great work today! You're helping families every day."
      hideShellHeader
    >
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="min-w-0 rounded-[28px] border border-[#DCE7F5] bg-white p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#EAF3FF] text-lg font-bold text-[#0F6FEF] ring-4 ring-[#F7FBFF] sm:h-16 sm:w-16">
                  {workspace.volunteer.initials}
                </span>
                <div className="min-w-0">
                  <h1 className="text-2xl font-semibold leading-tight text-[#071B45] sm:text-4xl">
                    Hello, {workspace.volunteer.name}!
                  </h1>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 rounded-2xl border border-[#DCE7F5] bg-[#F7FBFF] px-4 py-3 text-sm text-[#071B45] sm:w-auto sm:min-w-[220px]">
                {errorMessage ? (
                  <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-semibold text-[#C96A00]">Using fallback data: {errorMessage}</span>
                ) : null}
                {loading ? <span className="text-xs font-medium text-[#51617D]">Loading live workspace…</span> : null}
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-[#0F6FEF] shadow-sm">
                  <CalendarDays size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#51617D]">Today</p>
                  <p className="mt-1 truncate font-semibold">{workspace.volunteer.date}</p>
                  <p className="text-xs text-[#51617D]">{workspace.volunteer.day}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <ProgressSummary volunteer={workspace.volunteer} />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <ParentTaskCard parentTask={workspace.parentTask} />
            <ProfileCard profile={workspace.profile} />
          </div>
          <div className="space-y-6">
            <AssessmentCard assessment={workspace.assessment} />
            <OutcomeCard outcome={workspace.outcome} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
