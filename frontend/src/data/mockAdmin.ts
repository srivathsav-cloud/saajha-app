export const adminStats = {
  dateRange: 'May 20 – May 26, 2025',
  eligibleParents: 2842,
  locked: 428,
  lockedShare: '15.1% of total',
  callsToday: 312,
  callsTrend: '+18% vs yesterday',
  callbacksPending: 76,
  callbacksLabel: '24 due today',
  activeVolunteers: 124,
  volunteersTrend: '+6 vs last 7 days'
};

export const topVolunteers = [
  { initials: 'AS', name: 'Anita Singh', callsToday: 26, completed: 18, callbacks: 5, conversion: '69%' },
  { initials: 'RJ', name: 'Riya Singh', callsToday: 22, completed: 15, callbacks: 4, conversion: '68%' },
  { initials: 'HM', name: 'Henry Martin', callsToday: 20, completed: 14, callbacks: 3, conversion: '70%' },
  { initials: 'DS', name: 'David Smith', callsToday: 18, completed: 11, callbacks: 2, conversion: '61%' },
  { initials: 'SJ', name: 'Sara Johnson', callsToday: 16, completed: 9, callbacks: 2, conversion: '56%' }
];

export const callOutcomes = [
  { label: 'Completed', value: 642, percentage: '51%', color: '#009E9A' },
  { label: 'No Answer', value: 382, percentage: '30%', color: '#0F6FEF' },
  { label: 'Left Voicemail', value: 142, percentage: '11%', color: '#F97316' },
  { label: 'Not Interested', value: 120, percentage: '10%', color: '#8B5CF6' }
];

export const parentAllocationStatus = [
  { label: 'Assigned & Locked', value: 428, share: '15.1%' },
  { label: 'In Progress', value: 786, share: '27.7%' },
  { label: 'Completed', value: 1234, share: '43.4%' },
  { label: 'Not Contacted', value: 394, share: '13.8%' }
];

export const bigQuerySync = {
  status: 'Sync Successful',
  message: 'All systems operational',
  lastSync: 'May 26, 2025 • 6:30 AM',
  nextSync: 'May 27, 2025 • 6:30 AM',
  frequency: 'Daily at 6:30 AM',
  timezone: 'America/Los_Angeles',
  history: [
    { date: 'May 26, 2025', time: '6:30 AM', duration: '2m 18s', rows: '1,842 rows' },
    { date: 'May 25, 2025', time: '6:30 AM', duration: '2m 05s', rows: '1,756 rows' },
    { date: 'May 24, 2025', time: '6:30 AM', duration: '2m 12s', rows: '1,698 rows' }
  ]
};
