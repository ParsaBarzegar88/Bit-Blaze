export interface INotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: string;
  data: {
    offerId: string;
  };
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface INotifications {
  data: INotification[];
  totalCount: number;
}

export interface INotificationSetting {
  id: number;
  userId: number;
  notificationType: string;
  criteria: object;
  createdAt: string;
  updatedAt: string;
}
