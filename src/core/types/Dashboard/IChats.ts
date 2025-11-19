export interface IAllChats {
  id: string;
  senderId: number;
  getterId: number;
  room: string;
  message: string;
  files: null;
  createdAt: string;
  updatedAt: string;
}
export interface IChatHistory {
  id: string;
  senderId: number;
  getterId: number;
  room: string;
  message: string;
  files: null;
  createdAt: string;
  updatedAt: string;
  sender: {
    id: string;
    fullName: string;
    email: string;
  };
}
