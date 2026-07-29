def get_volunteer_workspace() -> dict:
    return {
        "volunteer": {
            "name": "Priya Sharma",
            "calls": 12,
            "completedAssessments": 5,
            "pendingFollowUps": 3,
            "weeklyGoalPercent": 83,
            "date": "May 20, 2025",
            "day": "Tuesday",
            "initials": "PS",
        },
        "parentTask": {
            "heading": "1. Allocated Parent Task",
            "parentName": "Anita Singh",
            "phone": "+91 98765 43210",
            "locked": True,
            "lockedBy": "you",
            "lockedAt": "10:02 AM",
            "childName": "Riya Singh",
            "childLevel": "Grade 5",
            "initials": "AS",
        },
        "profile": {
            "relationship": "Mother",
            "language": "Hindi",
            "location": "Jaipur, Rajasthan",
            "childName": "Riya Singh",
            "childDob": "14 Aug 2014",
            "school": "Govt. Upper Primary School",
            "notes": "Prefers calls after 6 PM",
        },
        "assessment": {
            "questions": [
                {
                    "id": "attendance",
                    "question": "Is your child attending classes regularly?",
                    "type": "radios",
                    "options": ["Yes", "No", "Sometimes"],
                    "value": "Yes",
                },
                {
                    "id": "materials",
                    "question": "Does your child have access to study materials?",
                    "type": "select",
                    "options": ["Yes, enough materials", "Partially available", "No study materials"],
                    "value": "Yes, enough materials",
                },
                {
                    "id": "confidence",
                    "question": "How confident do you feel about your child’s learning?",
                    "type": "radios",
                    "options": ["Very Confident", "Confident", "Neutral", "Not Confident"],
                    "value": "Confident",
                },
            ],
            "notes": {
                "additional": "Parent mentioned occasional network issues.",
                "feedback": "Parent is supportive and open to guidance.",
            },
        },
        "outcome": {
            "callbackDate": "22 May 2025",
            "callbackTime": "06:30 PM",
            "tag": "Needs Academic Support",
        },
    }


def get_login_response(email: str, password: str) -> dict[str, object]:
    role = "admin" if "admin" in email.lower() else "volunteer"
    return {
        "success": True,
        "message": "Signed in successfully.",
        "role": role,
        "redirectTo": "/admin" if role == "admin" else "/volunteer",
        "user": {
            "email": email,
            "name": "Saajha User",
            "passwordLength": len(password),
        },
    }


def get_admin_dashboard() -> dict:
    return {
        "dateRange": "May 20 – May 26, 2025",
        "summary": {
            "eligibleParents": 2842,
            "locked": 428,
            "callsToday": 312,
            "callbacksPending": 76,
            "activeVolunteers": 124,
        },
        "allocationStatus": [
            {"label": "Assigned & Locked", "share": "15.1%", "value": "428"},
            {"label": "In Progress", "share": "27.7%", "value": "786"},
            {"label": "Completed", "share": "43.4%", "value": "1234"},
            {"label": "Not Contacted", "share": "13.8%", "value": "394"},
        ],
        "volunteerPerformance": [
            {"name": "Anita Singh", "calls": 26, "successRate": "69%", "outcomes": "18"},
            {"name": "Riya Singh", "calls": 22, "successRate": "68%", "outcomes": "15"},
            {"name": "Henry Martin", "calls": 20, "successRate": "70%", "outcomes": "14"},
            {"name": "David Smith", "calls": 18, "successRate": "61%", "outcomes": "11"},
            {"name": "Sara Johnson", "calls": 16, "successRate": "56%", "outcomes": "9"},
        ],
        "callOutcomes": [
            {"label": "Completed", "value": 642, "percentage": "51%", "color": "#009E9A"},
            {"label": "No Answer", "value": 382, "percentage": "30%", "color": "#0F6FEF"},
            {"label": "Left Voicemail", "value": 142, "percentage": "11%", "color": "#F97316"},
            {"label": "Not Interested", "value": 120, "percentage": "10%", "color": "#8B5CF6"},
        ],
    }
