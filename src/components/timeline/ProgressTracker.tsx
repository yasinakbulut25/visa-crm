import React from "react";
import Step from "./Step";
import type { IStep } from "@/types/progressTracker";

const ProgressTracker: React.FC = () => {
  const steps: IStep[] = [
    {
      id: 1,
      title: "Document Collection",
      subtext: "FEBRUARY 20, 2026",
      status: "completed",
    },
    {
      id: 2,
      title: "Appointment Booking",
      subtext: "CURRENT STAGE",
      status: "current",
    },
    { id: 3, title: "Submission", status: "upcoming" },
    { id: 4, title: "Processing", status: "upcoming" },
    { id: 5, title: "Decision", status: "upcoming" },
  ];

  return (
    <section className="w-full flex items-start  justify-between gap-3 bg-color-light p-6 border-b border-border-default overflow-x-auto">
      {steps.map((step) => (
        <Step
          key={step.id}
          title={step.title}
          subtext={step.subtext}
          status={step.status}
        />
      ))}
    </section>
  );
};

export default ProgressTracker;
