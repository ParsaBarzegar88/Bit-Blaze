export interface ISendMessage {
  room: string;
  sender: string;
  message: string;
  getterId: number;
}
export interface IGetChatMessage {
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
