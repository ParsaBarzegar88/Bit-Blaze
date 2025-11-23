export interface IBlogItem {
    id?: string;
    title?: string;
    caption?: string;
    estimated_reading_time?: {
        seconds?: number;
    };
    author_id?: string;
    created_at?: string;
    category_id?: string;
}

export interface IBlogs {
    data: IBlogItem[];
    totalCount: number;
}

export interface ICreateBlog {
    title: string; 
    caption?: string;
    estimated_reading_time?: string; 
    author_id: number;
    category_id: number;
}

export interface IUpdateBlog {
    title: string;
    caption: string;
    estimated_reading_time?: string; 
    author_id?: number;
    category_id?: number; 
}