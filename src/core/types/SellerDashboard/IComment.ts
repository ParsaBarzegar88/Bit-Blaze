export interface ICommentData {
  id: string;
  house_id: string;
  user_id: string;
  title: string;
  caption: string;
  rating: string;
  created_at: string;
  parent_comment_id: string | null;
}
export interface IComments {
  comments: ICommentData[];
  totalCount: number;
}
