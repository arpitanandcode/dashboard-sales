export type TypeSales = {
  totalSales: number;
  salesByCategory: CategorySales;
};

type CategorySales = {
  Electronics: number;
  Furniture: number;
  Clothing: number;
  Books: number;
};
