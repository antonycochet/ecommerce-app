import ListBrands from '../../../components/dashboard/brands/ListBrands';
import NavbarDashboard from '../../../components/dashboard/navbar';

export default function categories() {
  return (
    <div className="h-screen bg-slate-50">
      <NavbarDashboard />
      <ListBrands />
    </div>
  );
}
