import { TBrand } from '../brand/tbrand';
import { TCategory } from '../category/tcategory';

export type TProduct = {
  id: number;
  title: string;
  price: number;
  stock: number;
  reference: string;
  fullDescription: string;
  image: string;
  isAvailable: boolean;
};
