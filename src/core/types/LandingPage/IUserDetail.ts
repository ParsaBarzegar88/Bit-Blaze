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
    profilePicture: string | null;
    createdAt: object;
    updatedAt: object;
  };
  additionalPercentage: number;
}
