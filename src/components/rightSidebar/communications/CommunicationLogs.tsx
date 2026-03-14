import { useSelector } from "react-redux";
import { selectCommunicationLog } from "@/store/selectors/applicationSelectors";
import { Mail, Message } from "@/icons";
import type { CommunicationLog } from "@/types/application";

type ChannelType = "email" | "sms";

type ChannelConfig = {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CHANNEL_CONFIG: Record<ChannelType, ChannelConfig> = {
  email: {
    label: "Email",
    Icon: Mail,
  },
  sms: {
    label: "SMS",
    Icon: Message,
  },
};

function CommunicationLogs() {
  const communicationLogs = useSelector(selectCommunicationLog);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-bold text-text-default leading-6">
          Communication Log
        </h2>
        <p className="text-sm font-light text-text-secondary leading-5">
          Automated message to traveller
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {communicationLogs.map((log: CommunicationLog) => {
          const config = CHANNEL_CONFIG[log.channel as ChannelType];
          const Icon = config.Icon;

          return (
            <div key={log.id} className="flex items-start gap-2">
              <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded bg-[#E6E6E6]">
                <Icon width={16} height={16} />
              </div>

              <div className="flex flex-col">
                <p className="text-xs text-text-default font-semibold leading-4">
                  {config.label} Sent
                </p>

                <p className="text-sm text-text-secondary font-light leading-5">
                  {log.subject}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommunicationLogs;
