export interface Stage {
  key: string;
  label: string;
  status: "completed" | "current" | "pending";
  completedDate?: string;
}

export interface RelatedApplication {
  id: string;
  type: string;
  period: string;
  status: string;
}

export interface Traveler {
  name: string;
  initials: string;
  applicationLabel: string;
  passportNumber: string;
  traveler_id: string;
  email: string;
  phone: string;
  relatedApplications: RelatedApplication[];
}

export interface Document {
  id: string;
  name: string;
  status: "uploaded" | "missing" | "revision_requested";
  uploadedDate?: string;
  uploaded_date?: string;
  revisionNote?: string;
}

export interface Note {
  id: string;
  author: string;
  content: string;
  createdAt?: string;
  created_at?: string;
}

export interface CommunicationLog {
  id: string;
  channel: string;
  subject: string;
  sentAt: string;
}

export interface IApplicationState {
  application: {
    id: string;
    type: string;
    currentStage: string;
    stages: Stage[];
    appointmentDate: string;
  };
  traveler: Traveler;
  documents: Document[];
  internalNotes: Note[];
  communicationLog: CommunicationLog[];
}
