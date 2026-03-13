import { ArrowLeft, ArrowRight, Mail, More, Search } from "@/icons";
import { Button } from "@heroui/react";
import InputField from "@/components/input/Input";
import ActionButton from "@/components/button/ActionButton";

function Header() {
  return (
    <nav className="flex items-center justify-between gap-6 px-6 py-3 bg-white border-b border-border-default w-full">
      <div className="flex items-center gap-3 py-0.5">
        <Button
          variant="light"
          startContent={<ArrowLeft width={20} height={20} />}
          className="font-medium"
        >
          Back
        </Button>

        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Here Event Logo" width={40} height={24} />
          <div className="flex items-center gap-2">
            <span className="font-normal text-text-secondary">
              Applications
            </span>
            <span className="font-normal text-text-secondary">/</span>
            <span className="font-bold text-text-default">#7418</span>
          </div>
        </div>
      </div>

      <div className="max-w-full min-w-50 flex-1">
        <InputField
          startContent={<Search width={20} height={20} color="#B3B3B3" />}
          placeholder="Search applications or travelers..."
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <ActionButton
          variant="bordered"
          className="border border-border-secondary"
          startContent={<Mail width={20} height={20} />}
        >
          <span className="lg:flex hidden">Request Documents</span>
        </ActionButton>

        <ActionButton
          variant="bordered"
          className="border-none bg-color-primary"
          endContent={<ArrowRight width={20} height={20} />}
        >
          <span className="lg:flex hidden">Move to Next Stage</span>
        </ActionButton>

        <ActionButton variant="light" isIconOnly>
          <More width={20} height={20} />
        </ActionButton>
      </div>
    </nav>
  );
}

export default Header;
