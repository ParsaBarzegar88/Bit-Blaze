export interface IUserPayment {
  id: string;
  userId: string;
  bookingId: string | null;
  amount: string;
  description: string;
  status: string;
  paymentUrl: string;
  transactionId: null;
  createdAt: string;
  updatedAt: string;
}

export interface IUserPayments {
  payments: IUserPayment[];
  totalCount: number;
}
