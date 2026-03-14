import { addToast, type ToastProps } from "@heroui/react";
import moment from "moment";

export const showToast = (toast: Partial<ToastProps>) => {
  addToast(toast as ToastProps);
};

export const timeAgoShort = (timestamp: string) => {
  const now = moment();
  const past = moment(timestamp);
  const diff = moment.duration(now.diff(past));

  if (diff.asSeconds() < 60) return `${Math.floor(diff.asSeconds())}s ago`;
  if (diff.asMinutes() < 60) return `${Math.floor(diff.asMinutes())}m ago`;
  if (diff.asHours() < 24) return `${Math.floor(diff.asHours())}h ago`;
  if (diff.asDays() < 30) return `${Math.floor(diff.asDays())}d ago`;
  if (diff.asMonths() < 12) return `${Math.floor(diff.asMonths())}mo ago`;
  return `${Math.floor(diff.asYears())}y ago`;
};
