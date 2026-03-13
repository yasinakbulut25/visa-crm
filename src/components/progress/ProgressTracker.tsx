import React from "react";
import { useSelector } from "react-redux";
import Stage from "./Stage";
import { selectStages } from "@/store/selectors/applicationSelectors";

const ProgressTracker: React.FC = () => {
  const stages = useSelector(selectStages);

  return (
    <section className="w-full flex items-start  justify-between gap-3 bg-color-light p-6 border-b border-border-default overflow-x-auto">
      {stages.map((stage) => (
        <Stage key={stage.key} stage={stage} />
      ))}
    </section>
  );
};

export default ProgressTracker;
