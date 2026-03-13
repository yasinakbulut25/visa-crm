import { ArrowLeft, ArrowRight, Mail, More, Search } from "@/icons";
import { Button } from "@heroui/react";
import InputField from "../input/Input";

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
        <Button
          variant="bordered"
          className="border border-border-secondary font-medium h-11 min-w-auto"
          radius="sm"
          startContent={<Mail width={20} height={20} />}
        >
          Request Documents
        </Button>

        <Button
          variant="bordered"
          className="border-none bg-color-primary font-medium h-11 min-w-auto"
          radius="sm"
          endContent={<ArrowRight width={20} height={20} />}
        >
          Move to Next Stage
        </Button>

        <Button variant="light" isIconOnly className="h-11">
          <More width={20} height={20} />
        </Button>
      </div>
    </nav>
  );
}

export default Header;
