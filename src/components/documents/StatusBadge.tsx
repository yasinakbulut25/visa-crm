import type { DocumentStatus } from "@/types/application";
import clsx from "clsx";

interface StatusConfig {
  label: string;
  containerClass: string;
}

const STATUS_MAP: Record<DocumentStatus, StatusConfig> = {
  uploaded: {
    label: "Uploaded",
    containerClass: "bg-[#EBFFEE] border-[#14AE5C] text-[#02542D]",
  },
  missing: {
    label: "Missing",
    containerClass: "bg-[#E6E6E6] border-[#767676] text-[#5A5A5A]",
  },
  revision_requested: {
    label: "Revision Requested",
    containerClass: "bg-[#FFF1C2] border-[#975102] text-[#975102]",
  },
  approved: {
    label: "Approved",
    containerClass: "bg-[#CFF7D3] border-[#02542D] text-[#02542D]",
  },
  rejected: {
    label: "Rejected",
    containerClass: "bg-[#FDD3D0] border-[#EC221F] text-[#900B09]",
  },
};

function StatusBadge({ status }: { status: DocumentStatus }) {
  const config = STATUS_MAP[status];
  return (
    <span
      className={clsx(
        "w-max px-2 py-1 rounded-lg border text-sm font-light leading-5",
        config.containerClass,
      )}
    >
      {config.label}
    </span>
  );
}

export default StatusBadge;
