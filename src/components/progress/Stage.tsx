import React, { useMemo } from "react";
import { Check, XIcon } from "@/icons";
import moment from "moment";
import clsx from "clsx";
import type { Stage as IStage, StageStatus } from "@/types/application";

function Stage({ stage }: { stage: IStage }) {
  const { label, status, completedDate } = stage;

  const configs: Record<
    StageStatus,
    {
      circle: string;
      title: string;
      sub: {
        class: string;
        value: string;
      };
      icon?: React.ReactNode;
    }
  > = useMemo(
    () => ({
      completed: {
        circle: "bg-color-secondary border-2 border-border-secondary",
        title: "text-text-gray font-normal",
        sub: {
          class: "text-text-tertiary",
          value: completedDate
            ? moment(completedDate).format("MMMM D, YYYY")
            : "N/A",
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
      },
      pending: {
        circle: "bg-white border-2 border-border-default",
        title: "text-text-secondary font-light",
        sub: {
          class: "hidden",
          value: "",
        },
      },
      approved: {
        circle: "bg-color-secondary border-2 border-[#02542D]",
        title: "text-text-gray font-normal",
        sub: {
          class: "text-[#02542D]",
          value: "Application Approved",
        },
        icon: <Check color="#fff" />,
      },
      rejected: {
        circle: "bg-[#EC221F] border-4 border-[#900B09]",
        title: "text-text-secondary font-light",
        sub: {
          class: "text-[#900B09]",
          value: "Application Rejected",
        },
        icon: <XIcon color="#fff" />,
      },
    }),
    [completedDate],
  );

  const { circle, title: titleStyle, sub: subContent, icon } = configs[status];

  return (
    <div className="min-w-37.5 flex flex-col gap-4 items-center flex-1 relative">
      <div
        className={clsx(
          "w-10 h-10 rounded-full flex items-center justify-center",
          circle,
        )}
      >
        {icon && icon}
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
