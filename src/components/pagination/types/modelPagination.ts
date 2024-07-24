export type ModelPagination = {
  currentPage: number;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export type ModelUsePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
};
