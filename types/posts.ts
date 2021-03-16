export interface IPostMetadata {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
}

export interface IFullPost extends IPostMetadata {
  slug: string;
}
