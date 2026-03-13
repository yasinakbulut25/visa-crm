export type StepStatus = "completed" | "current" | "upcoming";

export interface IStep {
  id: number;
  title: string;
  subtext?: string;
  status: StepStatus;
}
