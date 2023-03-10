import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listProducts } from '../../../graphql/queries';
import { IProduct } from '../../interfaces/dashboard/Product/IProduct';

export function fetchProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const apiData: any = await API.graphql({ query: listProducts });
    setProducts(apiData.data.listProducts.items);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, setProducts };
}
