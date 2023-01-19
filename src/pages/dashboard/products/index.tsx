import Navbar from '../../../components/dashboard/navbar';
import ListProducts from '../../../components/dashboard/product/ListProducts';

export default function products() {
  return (
    <div className="h-screen bg-slate-50">
      <Navbar />
      <ListProducts />
    </div>
  );
}
