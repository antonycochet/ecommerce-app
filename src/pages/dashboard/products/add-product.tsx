import Navbar from '../../../components/dashboard/navbar';
import OverviewProduct from '../../../components/dashboard/product/add/OverviewProduct';

export default function addproduct() {
  return (
    <div className="h-screen bg-slate-50">
      <Navbar />
      <OverviewProduct />
    </div>
  );
}
