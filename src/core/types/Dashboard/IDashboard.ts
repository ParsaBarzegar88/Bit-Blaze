export interface IUserDetail {
  user: {
    id: string;
    role: string;
    membershipDate: null;
    email: string;
    phoneNumber: string;
    emailVerified: boolean;
    verificationCode: string;
    verificationCodeExpires: object;
    resetCode: null;
    resetCodeExpires: null;
    fullName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    createdAt: object;
    updatedAt: object;
  };
  additionalPercentage: number;
}
export interface IDashboardSummery {
  houses: number;
  users: {
    userCount: number;
    sellers: number;
    buyers: number;
    admins: number;
  };
  bookings: {
    bookingCount: number;
    conformedBookings: number;
    canceledBookings: number;
    pendingBookings: number;
  };
  comments: number;
  averageRating: string;
}

export interface IDashboardMarketTrends {
  month: string;
  bookingCount: string;
}
