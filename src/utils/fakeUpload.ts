/* eslint-disable @typescript-eslint/no-unused-vars */
import moment from "moment";

export type FakeUploadResult =
  | { success: true; uploadedDate: string }
  | { success: false; error: string };

export const fakeUpload = (
  file: File,
  delay = 1000,
): Promise<FakeUploadResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // %50 şans
      if (isSuccess) {
        resolve({ success: true, uploadedDate: moment().format("YYYY-MM-DD") });
      } else {
        resolve({ success: false, error: "Upload failed. Network error." });
      }
    }, delay);
  });
};
