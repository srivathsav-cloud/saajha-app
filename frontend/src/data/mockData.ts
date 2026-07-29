export const volunteer = {
  name: 'Priya Sharma',
  role: 'Volunteer',
  date: 'May 20, 2025',
  day: 'Tuesday',
  stats: {
    calls: 12,
    completedAssessments: 5,
    pendingFollowUps: 3,
    weeklyGoalPercent: 83,
    weeklyGoalLabel: '20 calls'
  }
};

export const parentTask = {
  parentName: 'Anita Singh',
  initials: 'AS',
  phone: '+91 98765 43210',
  lockedBy: 'you',
  lockedAt: '10:02 AM',
  childName: 'Riya Singh',
  childLevel: 'Grade 5',
  relationship: 'Mother',
  language: 'Hindi',
  location: 'Jaipur, Rajasthan',
  childDob: '14 Aug 2014',
  school: 'Govt. Upper Primary School',
  notes: 'Prefers calls after 6 PM',
  assessmentQuestions: [
    'Is your child attending classes regularly?',
    'Does your child have access to study materials?',
    'How confident do you feel about your child’s learning?'
  ],
  outcome: 'Connected',
  callback: '22 May 2025, 06:30 PM',
  followUpTag: 'Needs Academic Support'
};

export const adminStats = {
  dateRange: 'May 20 – May 26, 2025',
  eligibleParents: 2842,
  locked: 428,
  callsToday: 312,
  callbacksPending: 76,
  activeVolunteers: 124
};

export const topVolunteers = [
  { initials: 'AS', name: 'Anita Singh', callsToday: 26, completed: 18, callbacks: 5, conversion: '69%' },
  { initials: 'RJ', name: 'Riya Singh', callsToday: 22, completed: 15, callbacks: 4, conversion: '68%' },
  { initials: 'HM', name: 'Henry Martin', callsToday: 20, completed: 14, callbacks: 3, conversion: '70%' },
  { initials: 'DS', name: 'David Smith', callsToday: 18, completed: 11, callbacks: 2, conversion: '61%' },
  { initials: 'SJ', name: 'Sara Johnson', callsToday: 16, completed: 9, callbacks: 2, conversion: '56%' }
];

export const callOutcomes = [
  { label: 'Completed', value: 642, percentage: '51%', colorClass: 'teal' },
  { label: 'No Answer', value: 382, percentage: '30%', colorClass: 'blue' },
  { label: 'Left Voicemail', value: 142, percentage: '11%', colorClass: 'orange' },
  { label: 'Not Interested', value: 120, percentage: '10%', colorClass: 'purple' }
];

export const bigQuerySync = {
  status: 'Sync Successful',
  message: 'All systems operational',
  lastSync: 'May 26, 2025 • 6:30 AM',
  nextSync: 'May 27, 2025 • 6:30 AM',
  frequency: 'Daily at 6:30 AM',
  timezone: 'Asia/Kolkata'
};
