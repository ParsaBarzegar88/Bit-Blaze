export interface IComment {
  dataValues: {
    id: string;
    house_id: string;
    user_id: string | null;
    title: string;
    caption: string;
    rating: string | null;
    created_at: string | object;
    parent_comment_id: string | null;
  };
  user?: {
    name?: string;
    avatar?: string;
  };
}
export interface IComments {
  data: IComment[];
  totalCount: number;
}
