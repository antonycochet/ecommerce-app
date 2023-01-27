import Navbar from '../../../../components/dashboard/navbar';
import AddProduct from '../../../../components/dashboard/product/add/AddProduct';

export default function addProduct() {
  return (
    <div className="h-screen bg-slate-50">
      <Navbar />
      <AddProduct />
    </div>
  );
}
