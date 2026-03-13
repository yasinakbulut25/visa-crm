import React from "react";
import Stage from "./Stage";
import type { IStage } from "@/types/progressTracker";
import { mockData } from "@/data/mock";

const ProgressTracker: React.FC = () => {
  const steps = mockData.application.stages;

  return (
    <section className="w-full flex items-start  justify-between gap-3 bg-color-light p-6 border-b border-border-default overflow-x-auto">
      {steps.map((stage: IStage) => (
        <Stage key={stage.key} stage={stage} />
      ))}
    </section>
  );
};

export default ProgressTracker;
