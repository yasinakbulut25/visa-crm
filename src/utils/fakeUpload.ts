import moment from "moment";

export type FakeUploadResult =
  | { success: true; uploadedDate: string }
  | { success: false; error: string };

const ERROR_MESSAGES = [
  "Network connection lost while uploading. Please check your internet and try again:",
  "File upload failed due to a temporary server error. Please retry:",
  "The selected file format is not supported. Please upload a PDF, JPG, PNG or DOC file:",
  "File size exceeds the maximum allowed limit of 10MB:",
  "Upload request timed out. Please try again:",
];

export const fakeUpload = (
  file: File,
  delay = 1000,
): Promise<FakeUploadResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // %50 şans
      if (isSuccess) {
        resolve({ success: true, uploadedDate: moment().format("YYYY-MM-DD") });
      } else {
        const randomError =
          ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];

        resolve({ success: false, error: `${randomError} ${file.name}` });
      }
    }, delay);
  });
};
