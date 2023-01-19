import ListCategories from '../../../components/dashboard/categories/ListCategories';
import NavbarDashboard from '../../../components/dashboard/navbar';

export default function categories() {
  return (
    <div className="h-screen bg-slate-50">
      <NavbarDashboard />
      <ListCategories />
    </div>
  );
}
