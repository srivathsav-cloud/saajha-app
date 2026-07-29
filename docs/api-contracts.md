# Saajha API Contract

This contract captures the frontend surface that is currently visible in the static UI stage. The responses below are intentionally shaped for backend implementation and for the frontend mock-to-real transition.

## Frontend-to-backend integration status

The current React pages are wired to call the backend contract through a shared API client. The UI uses a fallback-to-mock strategy so product and backend work can proceed in parallel:

- On page load, the frontend attempts requests against the backend.
- If the backend is unavailable or returns a non-recoverable error, the UI continues rendering using the existing mock dataset.
- The shared client retries transient network issues and returns structured errors for debugging.
- Once the backend endpoints are live, the UI remains compatible with the same response shapes.

## 1. Authentication

### POST /api/auth/login
Request body:

```json
{
  "email": "volunteer@saajha.org",
  "password": "********"
}
```

Response:

```json
{
  "success": true,
  "message": "Signed in successfully.",
  "role": "volunteer",
  "redirectTo": "/volunteer",
  "user": {
    "email": "volunteer@saajha.org",
    "name": "Saajha User",
    "passwordLength": 10
  }
}
```

### POST /api/auth/google
Request body:

```json
{
  "email": "volunteer@saajha.org"
}
```

Response:

```json
{
  "success": true,
  "message": "Signed in successfully.",
  "role": "volunteer",
  "redirectTo": "/volunteer",
  "user": {
    "email": "volunteer@saajha.org",
    "name": "Saajha User"
  }
}
```

## 2. Volunteer workspace

### GET /api/volunteer/workspace
Response:

```json
{
  "volunteer": {
    "name": "Priya Sharma",
    "calls": 12,
    "completedAssessments": 5,
    "pendingFollowUps": 3,
    "weeklyGoalPercent": 83,
    "date": "May 20, 2025",
    "day": "Tuesday",
    "initials": "PS"
  },
  "parentTask": {
    "heading": "1. Allocated Parent Task",
    "parentName": "Anita Singh",
    "phone": "+91 98765 43210",
    "locked": true,
    "lockedBy": "you",
    "lockedAt": "10:02 AM",
    "childName": "Riya Singh",
    "childLevel": "Grade 5",
    "initials": "AS"
  },
  "profile": {
    "relationship": "Mother",
    "language": "Hindi",
    "location": "Jaipur, Rajasthan",
    "childName": "Riya Singh",
    "childDob": "14 Aug 2014",
    "school": "Govt. Upper Primary School",
    "notes": "Prefers calls after 6 PM"
  },
  "assessment": {
    "questions": [
      {
        "id": "attendance",
        "question": "Is your child attending classes regularly?",
        "type": "radios",
        "options": ["Yes", "No", "Sometimes"],
        "value": "Yes"
      },
      {
        "id": "materials",
        "question": "Does your child have access to study materials?",
        "type": "select",
        "options": ["Yes, enough materials", "Partially available", "No study materials"],
        "value": "Yes, enough materials"
      }
    ],
    "notes": {
      "additional": "Parent mentioned occasional network issues.",
      "feedback": "Parent is supportive and open to guidance."
    }
  },
  "outcome": {
    "callbackDate": "22 May 2025",
    "callbackTime": "06:30 PM",
    "tag": "Needs Academic Support"
  }
}
```

### POST /api/volunteer/parent-task/{parentId}/release
Response:

```json
{
  "parentId": "parent_001",
  "status": "released",
  "releasedBy": "vol_001",
  "releasedAt": "2026-07-23T10:10:00Z"
}
```

### POST /api/volunteer/parent-task/{parentId}/outcome
Request body:

```json
{
  "outcome": "Connected",
  "callbackDate": "2026-07-25",
  "callbackTime": "18:00",
  "tag": "Warm lead",
  "notes": "Parent wants a callback after 6 PM",
  "followUpStatus": "pending"
}
```

Response:

```json
{
  "parentId": "parent_001",
  "status": "outcome_saved",
  "updatedAt": "2026-07-23T10:15:00Z"
}
```

## 3. Admin dashboard

### GET /api/admin/dashboard
Response:

```json
{
  "dateRange": "May 20 – May 26, 2025",
  "summary": {
    "eligibleParents": 2842,
    "locked": 428,
    "callsToday": 312,
    "callbacksPending": 76,
    "activeVolunteers": 124
  },
  "allocationStatus": [
    {
      "label": "Assigned & Locked",
      "share": "15.1%",
      "value": "428"
    },
    {
      "label": "In Progress",
      "share": "27.7%",
      "value": "786"
    }
  ],
  "volunteerPerformance": [
    {
      "name": "Anita Singh",
      "calls": 26,
      "successRate": "69%",
      "outcomes": "18"
    }
  ],
  "callOutcomes": [
    {
      "label": "Completed",
      "value": 642,
      "percentage": "51%",
      "color": "#009E9A"
    }
  ]
}
```

### GET /api/admin/bigquery-sync/status
Response:

```json
{
  "status": "success",
  "lastSync": "2026-07-23T06:30:00Z",
  "nextSync": "2026-07-24T06:30:00Z"
}
```

## 4. Telemetry

### POST /api/telemetry/events
Request body:

```json
{
  "eventType": "ui_click",
  "element": "Sign In",
  "route": "/login",
  "metadata": {
    "source": "frontend",
    "type": "submit"
  }
}
```

Response:

```json
{
  "status": "accepted"
}
```

## 5. Health

### GET /api/health
Response:

```json
{
  "status": "ok"
}
```
