export interface ICategory {
  dataValues: {
    id: number;
    name: string;
  };
}
export interface ICategories {
  data: ICategory[];
  totalCount: number;
}
