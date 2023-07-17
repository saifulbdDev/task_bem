export type Message = {
  id: number;
  subject: string;
  body: string;
  read: boolean;
};

export const inbox: Message[] = [
  {
    id: 1,
    subject: "Wave hello with video, reactions and more now in huddles",
    body: "Wave hello with video, reactions and more now in huddles",
    read: false
  },
  {
    id: 2,
    subject:
      "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    body: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    read: true
  },
  {
    id: 3,
    subject: "Wave hello with video, reactions and more now in huddles",
    body: "Hey there! I hope you're doing well. I wanted to discuss our upcoming vacation plans. Let's meet for lunch sometime this week to go over the details. Can you suggest a day and time that works for you? Looking forward to it!",
    read: true
  },
  {
    id: 4,
    subject: "Important Announcement",
    body: "Dear valued employee, We are pleased to inform you that the company will be implementing a new employee recognition program starting next month. Please refer to the attached document for more information. Thank you.",
    read: false
  },
  {
    id: 5,
    subject: "Invitation: Birthday Party",
    body: "Hey, I'm throwing a birthday party next Saturday to celebrate my special day. You're invited! The party starts at 7 PM at my place. Let me know if you can make it. Looking forward to celebrating with you!",
    read: true
  },
  {
    id: 6,
    subject: "New Feature Announcement",
    body: "We are excited to introduce a new feature in our app that allows users to collaborate in real-time. Check it out and let us know your feedback!",
    read: false
  },
  {
    id: 7,
    subject: "Reminder: Team Meeting",
    body: "Just a friendly reminder that we have a team meeting tomorrow at 10 AM in the conference room. Please come prepared with any updates or agenda items you would like to discuss. See you there!",
    read: true
  },
  {
    id: 8,
    subject: "Job Opportunity: Senior Developer",
    body: "We have an opening for a Senior Developer position in our company. If you are interested or know someone who might be a good fit, please let us know. More details can be found in the attached job description.",
    read: false
  },
  {
    id: 9,
    subject: "Vacation Request Approval",
    body: "Your vacation request has been approved. Enjoy your time off and have a great vacation!",
    read: true
  },
  {
    id: 10,
    subject: "Monthly Newsletter",
    body: "Here is your monthly newsletter with the latest updates and news from our company. Take a few minutes to read through it and stay informed!",
    read: false
  },
  {
    id: 11,
    subject: "Upcoming Training Session",
    body: "We have an upcoming training session scheduled for all employees next week. Please make sure to mark your calendars and attend the session as it covers important information and updates.",
    read: false
  },
  {
    id: 12,
    subject: "Upcoming Event",
    body: "We have an Event scheduled for all employees next week. Please make sure to mark your calendars and attend the session as it covers important information and updates.",
    read: false
  }
];

const archived: Message[] = [];
export function fetchMessages() {
  return new Promise<Message[]>((resolve) => {
    setTimeout(() => {
      resolve(inbox);
    }, 1000);
  });
}

export function archive(id: number) {
  const message = inbox.find((message) => message.id === id);
  if (message) {
    archived.push(message);
    inbox.splice(inbox.indexOf(message), 1);
  }
}

export function unarchive(id: number) {
  const message = archived.find((message) => message.id === id);
  if (message) {
    inbox.push(message);
    archived.splice(archived.indexOf(message), 1);
  }
}
