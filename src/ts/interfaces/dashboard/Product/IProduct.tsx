interface IProduct {
  title: string;
  price: number;
  fullDescription: string;
  isAvailable: boolean;
  stock: number;
  ExtraField?: IExtraFields[] | null;
  image: string;
}

interface IExtraFields {
  type: string;
  position: number;
  inputs: {}[];
}

export type { IExtraFields, IProduct };
