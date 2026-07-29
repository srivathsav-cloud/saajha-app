export const volunteerProfile = {
  name: 'Priya Sharma',
  role: 'Volunteer',
  date: 'May 20, 2025',
  day: 'Tuesday',
  initials: 'PS',
  stats: [
    { label: "Today's Calls", value: 12, tone: 'blue' },
    { label: 'Completed Assessments', value: 5, tone: 'teal' },
    { label: 'Pending Follow-ups', value: 3, tone: 'warning' },
    { label: 'Weekly Goal', value: '83%', subtext: '20 calls', tone: 'blue' }
  ],
  progress: 83
};

export const allocatedParentTask = {
  heading: '1. Allocated Parent Task',
  name: 'Anita Singh',
  initials: 'AS',
  phone: '+91 98765 43210',
  lockedBy: 'you',
  lockedAt: '10:02 AM',
  childName: 'Riya Singh',
  childLevel: 'Grade 5'
};

export const parentChildProfile = {
  heading: '2. Parent & Child Profile',
  parentName: 'Anita Singh',
  relationship: 'Mother',
  language: 'Hindi',
  location: 'Jaipur, Rajasthan',
  childName: 'Riya Singh',
  childDob: '14 Aug 2014',
  school: 'Govt. Upper Primary School',
  notes: 'Prefers calls after 6 PM'
};

export const assessmentQuestions = [
  {
    id: 'attendance',
    question: 'Is your child attending classes regularly?',
    type: 'radios',
    options: ['Yes', 'No', 'Sometimes'],
    value: 'Yes'
  },
  {
    id: 'materials',
    question: 'Does your child have access to study materials?',
    type: 'select',
    options: ['Yes, enough materials', 'Partially available', 'No study materials'],
    value: 'Yes, enough materials'
  },
  {
    id: 'confidence',
    question: "How confident do you feel about your child’s learning?",
    type: 'radios',
    options: ['Very Confident', 'Confident', 'Neutral', 'Not Confident'],
    value: 'Confident'
  }
];

export const assessmentNotes = {
  additional: 'Parent mentioned occasional network issues.',
  feedback: 'Parent is supportive and open to guidance.'
};

export const outcomeFollowUp = {
  heading: '4. Outcome & Follow-up',
  outcome: 'Connected',
  callbackDate: '22 May 2025',
  callbackTime: '06:30 PM',
  tag: 'Needs Academic Support'
};
