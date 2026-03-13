import { Input } from "@heroui/react";
import type { ComponentProps } from "react";

function InputField({ ...props }: ComponentProps<typeof Input>) {
  return (
    <Input
      radius="sm"
      classNames={{
        input: [
          "bg-transparent text-base font-normal",
          "!text-text-default",
          "placeholder:text-sm placeholder:font-light placeholder:text-text-neutral",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "py-1 px-2 h-11 rounded-small",
          "!bg-transparent border border-border-default shadow-none",
          "data-[hover=true]:!bg-transparent",
          "group-data-[focus=true]:!bg-transparent",
        ],
      }}
      {...props}
    />
  );
}

export default InputField;
