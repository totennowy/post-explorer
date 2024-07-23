export type ModelPagination = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};
