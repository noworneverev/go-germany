export interface MetaData {
  current_page: number;
  total_pages: number;
  page_size: number;
  total_count: number;
}

export class PaginatedResponse<T> {
  items: T;
  metaData: MetaData;

  constructor(items: T, metaData: MetaData) {
    this.items = items;
    this.metaData = metaData;
  }
}
