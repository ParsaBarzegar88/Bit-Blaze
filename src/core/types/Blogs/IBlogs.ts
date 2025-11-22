export interface IBlogItem {
    id: string;
    title: string;
    caption: string;
    estimated_reading_time: {
        seconds: number;
    };
    author_id: string;
    created_at: string;
    category_id: string;
}

export interface IBlogs {
    data: IBlogItem[];
    totalCount: number;
}