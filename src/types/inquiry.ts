export type InquiryStatus = "waiting" | "progress" | "done" | "delay";

export interface Inquiry {
  id: number;
  customer: string;
  title: string;
  category: string;
  status: InquiryStatus;
  createdAt: string;
}
