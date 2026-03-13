import React from "react";
import { Check } from "@/icons";
import moment from "moment";
import type { Stage as IStage } from "@/types/application";

function Stage({ stage }: { stage: IStage }) {
  const { label, status, completedDate } = stage;

  const configs: Record<
    string,
    {
      circle: string;
      title: string;
      sub: {
        class: string;
        value: string;
      };
      icon: React.ReactNode;
    }
  > = {
    completed: {
      circle: "bg-color-secondary border-2 border-border-secondary",
      title: "text-text-gray font-normal",
      sub: {
        class: "text-text-tertiary",
        value: moment(completedDate).format("MMMM D, YYYY"),
      },
      icon: <Check color="#fff" />,
    },
    current: {
      circle: "bg-color-neutral border-4 border-border-default",
      title: "text-text-default font-bold",
      sub: {
        class: "text-text-secondary font-medium",
        value: "current stage",
      },
      icon: null,
    },
    pending: {
      circle: "bg-white border-2 border-border-default",
      title: "text-text-secondary font-light",
      sub: {
        class: "hidden",
        value: "",
      },
      icon: null,
    },
  };

  const { circle, title: titleStyle, sub: subContent, icon } = configs[status];

  return (
    <div className="min-w-37.5 flex flex-col gap-4 items-center flex-1 relative">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${circle}`}
      >
        {icon}
      </div>

      <div className="w-full flex flex-col gap-1 text-center">
        <h3 className={`text-xl ${titleStyle}`}>{label}</h3>
        {
          <p className={`text-sm uppercase ${subContent.class}`}>
            {subContent.value}
          </p>
        }
      </div>
    </div>
  );
}

export default Stage;
