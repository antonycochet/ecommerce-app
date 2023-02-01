interface IProduct {
  createdAt?: any;
  updatedAt?: any;
  id?: string;
  title: string;
  price: number;
  stock: number;
  reference: string;
  fullDescription: string;
  isAvailable: boolean;
  ExtraField?: IExtraFields[] | null;
  image: File | string | null;
}

interface IExtraFields {
  type: string;
  position: number;
  inputs: {}[];
}

export type { IExtraFields, IProduct };
