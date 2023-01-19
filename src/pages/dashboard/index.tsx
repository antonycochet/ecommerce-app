import NavbarDashboard from '../../components/dashboard/navbar';

export default function dashboard() {
  return (
    <div className="h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-purple-200 via-white to-stone-50">
      <NavbarDashboard />
      <header>
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-12">
              <div className="px-4 sm:px-0 w-3/12">
                <div className="h-80 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              <div className="px-4 sm:px-0 w-3/12">
                <div className="h-80 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              <div className="px-4 sm:px-0 w-3/12">
                <div className="h-80 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              <div className="px-4 sm:px-0 w-3/12">
                <div className="h-80 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
            </div>
            <div className="flex">
              <div className="px-4 sm:px-0 w-full">
                <div className="h-80 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
