import { TBrand } from '../brand/tbrand';
import { TCategory } from '../category/tcategory';

export type TProduct = {
  id: number;
  title: string;
  subTitle: string;
  price: number;
  fullDescription: string;
  size: string;
  weight: number;
  quantity: number;
  //image: FileList;
  isAvailable: boolean;
  reference: string;
  stock: number;
  composition: string;
  productCategoryId: string;
  productBrandId: string;
  brand: TBrand;
  category: TCategory;
};
