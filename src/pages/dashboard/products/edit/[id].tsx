import NavbarDashboard from '../../../../components/dashboard/navbar';
import EditProduct from '../../../../components/dashboard/product/edit/EditProduct';

export default function editProduct() {
  return (
    <div className="h-screen bg-slate-50">
      <NavbarDashboard />
      <EditProduct />
    </div>
  );
}
