import { Button, type ButtonProps } from "@heroui/react";
import { Link } from "react-router-dom";

interface ActionButtonProps extends ButtonProps {
  to?: string;
}

function ActionButton({
  children,
  className,
  to,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      className={`font-medium h-11 min-w-auto ${className ?? ""}`}
      radius="sm"
      as={to ? Link : undefined}
      to={to}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ActionButton;
