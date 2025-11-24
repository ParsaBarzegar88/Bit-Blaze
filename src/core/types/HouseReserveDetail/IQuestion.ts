export interface IQuestion {
  id: number;
  houseId: number;
  userId: number;
  question: string;
  answer: string | null;
  answeredBy: number | null;
  createdAt: string;
  updatedAt: string;
}
