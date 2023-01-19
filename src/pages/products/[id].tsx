import { useContext, useEffect } from 'react';
import Navbar from '../../components/home/navbar';
import ProductOverview from '../../components/home/product/ProductOverview';
import UserContext from '../../context/UserContext';
import { fetchProducts } from '../../ts/helperFunctions/fetchData/fetchProducts';

export default function product() {
  const user = useContext(UserContext);
  const { products, setProducts } = fetchProducts();

  return (
    <>
      <Navbar user={user} />
      <ProductOverview />
    </>
  );
}
