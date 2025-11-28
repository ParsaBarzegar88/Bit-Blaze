export interface ISendNotification {
  room: string;
  notification: {
    userId: string;
    title: string;
    message: string;
    type: string;
    data: { offerId: number };
  };
}
