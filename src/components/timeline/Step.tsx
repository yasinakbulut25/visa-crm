import React from "react";
import type { StepStatus } from "@/types/progressTracker";
import { Check } from "@/icons";

interface StepProps {
  title: string;
  subtext?: string;
  status: StepStatus;
}

const Step: React.FC<StepProps> = ({ title, subtext, status }) => {
  const configs: Record<
    StepStatus,
    { circle: string; title: string; sub: string; icon: React.ReactNode }
  > = {
    completed: {
      circle: "bg-color-secondary border-2 border-border-secondary",
      title: "text-text-gray font-normal",
      sub: "text-text-tertiary",
      icon: <Check color="#fff" />,
    },
    current: {
      circle: "bg-color-neutral border-4 border-border-default",
      title: "text-text-default font-bold",
      sub: "text-text-secondary font-medium",
      icon: null,
    },
    upcoming: {
      circle: "bg-white border-2 border-border-default",
      title: "text-text-secondary font-light",
      sub: "hidden",
      icon: null,
    },
  };

  const { circle, title: titleStyle, sub: subStyle, icon } = configs[status];

  return (
    <div className="min-w-37.5 flex flex-col gap-4 items-center flex-1 relative">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${circle}`}
      >
        {icon}
      </div>

      <div className="w-full flex flex-col gap-1 text-center">
        <h3 className={`text-xl ${titleStyle}`}>{title}</h3>
        {subtext && (
          <p className={`text-sm uppercase ${subStyle}`}>{subtext}</p>
        )}
      </div>
    </div>
  );
};

export default Step;
