export interface ICategory {
  id: number;
  name: string;
}
export interface ICategories {
  data: ICategory[];
  totalCount: number;
}
