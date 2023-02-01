import Link from 'next/link';
import { IProduct } from '../../../ts/interfaces/dashboard/Product/IProduct';
import { s3PublicStorage } from '../../../ts/utils/getS3Storage';

interface IListProducts {
  shoppingCart: { products: IProduct[] };
}

export default function ListProducts({ shoppingCart }: IListProducts) {
  return (
    <div className="flex flex-col">
      {shoppingCart &&
        shoppingCart.products.map((product: IProduct, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-between border-b last:border-none py-8"
            >
              <div className="relative w-2/12">
                <img
                  className="w-full overflow-hidden object-cover rounded-md"
                  src={String(s3PublicStorage + product.image)}
                />
                <span className="bg-indigo-600 rounded-full w-7 h-7 p-1 text-sm flex justify-center items-center text-white font-semibold absolute -top-2 -right-2">
                  1
                </span>
              </div>
              <div className="flex flex-row items-center leading-5 w-7/12">
                <div className="flex flex-col">
                  <Link
                    href={`/products/${product.id}`}
                    className="font-semibold text-slate-900 hover:underline underline-offset-2"
                  >
                    {product.title}
                  </Link>
                  <p className="font-semibold text-sm mt-1">
                    {product.price} €
                  </p>
                  <p className="text-gray-500 font-normal text-sm mt-4">
                    {product.fullDescription.length < 120
                      ? product.fullDescription
                      : product.fullDescription.slice(0, 117) + '...'}
                  </p>
                </div>
              </div>
              <button className="text-blue-600 text-sm">Supprimer</button>
            </div>
          );
        })}
    </div>
  );
}
