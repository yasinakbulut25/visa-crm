import { Button, type ButtonProps } from "@heroui/react";

function ActionButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      className={`font-medium h-11 min-w-auto ${className ?? ""}`}
      radius="sm"
      {...props}
    >
      {children}
    </Button>
  );
}

export default ActionButton;
