import type { RelatedStatus } from "@/types/application";

interface StatusBadgeProps {
  variant: RelatedStatus;
}

const variantStyles: Record<
  RelatedStatus,
  {
    text: string;
    style: string;
  }
> = {
  approved: {
    text: "Approved",
    style: "bg-[#CFF7D3] text-[#02542D]",
  },
  rejected: {
    text: "Rejected",
    style: "bg-[#FDD3D0] text-[#900B09]",
  },
};

function StatusBadge({ variant }: StatusBadgeProps) {
  const item = variantStyles[variant];
  return (
    <span
      className={`px-2 py-1 rounded-lg text-xs font-light leading-5 ${item.style}`}
    >
      {item.text}
    </span>
  );
}

export default StatusBadge;
