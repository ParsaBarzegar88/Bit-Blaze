export interface ICustomerPayment {
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

export interface ICustomerPayments {
  data: ICustomerPayment[];
  totalCount: number;
}