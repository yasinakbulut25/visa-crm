import React from "react";
import Step from "./Step";
import type { IStep } from "@/types/progressTracker";
import { mockData } from "@/data/mock";

const ProgressTracker: React.FC = () => {
  const steps = mockData.application.stages;

  return (
    <section className="w-full flex items-start  justify-between gap-3 bg-color-light p-6 border-b border-border-default overflow-x-auto">
      {steps.map((step: IStep) => (
        <Step key={step.key} step={step} />
      ))}
    </section>
  );
};

export default ProgressTracker;
