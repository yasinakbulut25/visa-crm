import { ArrowLeft, Mail, Search } from "@/icons";
import InputField from "@/components/input/Input";
import ActionButton from "@/components/button/ActionButton";
import { mockData } from "@/data/mock";
import NextStageButton from "./NextStageButton";
import StageActions from "./StageActions";

function Header() {
  return (
    <nav className="flex items-center justify-between gap-6 px-6 py-3 bg-white border-b border-border-default w-full">
      <div className="flex items-center gap-3 py-0.5">
        <ActionButton
          variant="light"
          color="default"
          className="sm:flex hidden"
          startContent={<ArrowLeft width={20} height={20} />}
          aria-label="Back"
        >
          Back
        </ActionButton>

        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Here Event Logo" width={40} height={24} />
          <div className="flex items-center gap-2">
            <span className="sm:flex hidden font-normal text-text-secondary">
              Applications
            </span>
            <span className="font-normal text-text-secondary">/</span>
            <span className="font-bold text-text-default">
              {mockData.application.id}
            </span>
          </div>
        </div>
      </div>

      <div className="md:flex hidden max-w-full min-w-50 flex-1">
        <InputField
          startContent={<Search width={20} height={20} color="#B3B3B3" />}
          placeholder="Search applications or travelers..."
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <ActionButton
          variant="bordered"
          color="primary"
          startContent={<Mail width={20} height={20} />}
          aria-label="Request Documents"
        >
          <span className="lg:flex hidden">Request Documents</span>
        </ActionButton>

        <NextStageButton />

        <StageActions />
      </div>
    </nav>
  );
}

export default Header;
