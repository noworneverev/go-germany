export interface BookmarkItem {
  courseId: number;
  courseName: string;
}

export interface Bookmark {
  id: number;
  items: BookmarkItem[];
}
