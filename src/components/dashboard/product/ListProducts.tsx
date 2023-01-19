import { API } from 'aws-amplify';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { listProducts } from '../../../graphql/queries';
import { TProduct } from '../../../ts/types/product/tproduct';
import Dropdown from '../../common/dropdowns/Index';

export default function ListProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const apiData: any = await API.graphql({ query: listProducts });
    setProducts(apiData.data.listProducts.items);
  }

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
        <div className="relative sm:rounded-lg w-full">
          <div className="flex flex-row justify-between pb-6">
            <h3 className="text-3xl tracking-tighter font-bold text-slate-800">
              Liste des produits
            </h3>
            <Link
              className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded shadow-md shadow-indigo-500/50"
              href="/dashboard/products/add-product"
            >
              Ajouter un produit
            </Link>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nom du produit
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Marque</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Categorie</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Prix</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Stock</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Disponibilité</div>
                </th>
                <th scope="col" className="py-3 px-6 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="bg-white border-b last:border-none"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.title}
                    </th>
                    <td className="py-4 px-6">{product.brand.title}</td>
                    <td className="py-4 px-6">{product.category.title}</td>
                    <td className="py-4 px-6">{product.price} €</td>
                    <td className="py-4 px-6">{product.stock}</td>
                    <td className="py-4 px-6">
                      {product.isAvailable ? (
                        <div className="flex items-center">
                          <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
                          <span>Disponible</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
                          <span>Non Disponible</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Dropdown />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
