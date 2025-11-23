export interface ISaveSearchItem {
    id: number,
    userId: number,
    searchQuery: string,
    note: string,
    createdAt: string,
    updatedAt: string
}


export interface IAddSaveSearch {
  searchQuery: string,
  note: string
}