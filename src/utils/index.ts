import { addToast, type ToastProps } from "@heroui/react";

export const showToast = (toast: Partial<ToastProps>) => {
  addToast(toast as ToastProps);
};
