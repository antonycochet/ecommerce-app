import Navbar from '../../components/home/navbar';
import ProductOverview from '../../components/home/product/ProductOverview';
import { fetchProducts } from '../../ts/helperFunctions/fetchData/fetchProducts';

export default function product() {
  const { products, setProducts } = fetchProducts();

  return (
    <>
      <Navbar products={products} />
      <ProductOverview />
    </>
  );
}
