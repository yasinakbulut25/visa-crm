import { Button, type ButtonProps } from "@heroui/react";
import { Link } from "react-router-dom";

type ActionButtonColor = "default" | "primary" | "dark";
type ActionButtonVariant = "solid" | "bordered" | "light";

interface ActionButtonProps extends Omit<ButtonProps, "color" | "variant"> {
  to?: string;
  color?: ActionButtonColor;
  variant?: ActionButtonVariant;
}

const colorVariantStyles: Record<
  ActionButtonColor,
  Record<ActionButtonVariant, string>
> = {
  default: {
    solid: "bg-button-default text-text-secondary border-none",
    bordered: "bg-transparent border border-border-tertiary text-text-default",
    light: "bg-transparent hover:bg-zinc-200 border-none text-text-default",
  },
  primary: {
    solid: "bg-button-primary text-black border-none",
    bordered: "bg-transparent border border-border-secondary text-text-default",
    light: "bg-transparent hover:bg-zinc-200 border-none text-text-default",
  },
  dark: {
    solid: "bg-button-dark text-white border-none",
    bordered:
      "bg-transparent border border-border-tertiary text-text-secondary",
    light:
      "bg-transparent hover:bg-zinc-200 border-none text-text-default",
  },
};

function ActionButton({
  children,
  className,
  to,
  color = "default",
  variant = "solid",
  ...props
}: ActionButtonProps) {
  const colorClass = colorVariantStyles[color][variant];

  return (
    <Button
      className={`font-medium h-11 min-w-auto ${colorClass} ${className ?? ""}`}
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
