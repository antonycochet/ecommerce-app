export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col border-b border-gray-100 space-y-16 pb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter text-slate-900 text-center">
            Brandii.
          </h1>
        </div>
        <div className="flex flex-row justify-evenly w-full">
          <ul className="space-y-6 text-sm font-normal text-gray-400">
            <li className="text-gray-900 text-base font-semibold">Products</li>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
          <ul className="space-y-6 text-sm font-normal text-gray-400">
            <li className="text-gray-900 text-base font-semibold">Company</li>
            <li>Company 1</li>
            <li>Company 2</li>
            <li>Company 3</li>
            <li>Company 4</li>
          </ul>
          <ul className="space-y-6 text-sm font-normal text-gray-400">
            <li className="text-gray-900 text-base font-semibold">Company</li>
            <li>Company 1</li>
            <li>Company 2</li>
            <li>Company 3</li>
            <li>Company 4</li>
          </ul>
          <ul className="space-y-6 text-sm font-normal text-gray-400">
            <li className="text-gray-900 text-base font-semibold">Company</li>
            <li>Company 1</li>
            <li>Company 2</li>
            <li>Company 3</li>
            <li>Company 4</li>
          </ul>
        </div>
        <div className="flex space-x-6 w-full">
          <div className="bg-gray-100 rounded-md flex flex-col justify-center w-full text-gray-700 space-y-2 px-16 h-32">
            <h3 className="text-lg font-bold tracking-tighter">
              Sign up for our newsletter
            </h3>
            <div className="flex justify-between items-center space-x-2">
              <input
                type="text"
                className="bg-white border border-gray-300 px-4 py-2 rounded-md w-8/12"
              />
              <button className="bg-indigo-600 px-2 py-2 rounded-md w-4/12 text-white font-semibold text-sm">
                Envoyer
              </button>
            </div>
          </div>
          <div className="bg-indigo-600 rounded-md flex flex-col justify-center items-center w-full text-gray-50 space-y-2 px-16 h-32">
            <h3 className="text-2xl font-bold tracking-tighter">
              Get early access
            </h3>
            <p className="font-light text-center">
              Consectetur elit. Sed facilisis
              <span className="font-bold ml-1">Go now</span>
            </p>
          </div>
          <div className="bg-slate-800 rounded-md flex flex-col justify-center items-center w-full text-gray-50 space-y-4 px-16 h-32">
            <h3 className="text-xl font-light tracking-tighter text-center">
              Propulsé par <br />
              <span className="font-bold">BbResponsable</span>
            </h3>
          </div>
        </div>
      </div>
      <p className="mt-12 text-gray-400">© 2022, Tous droits réservés</p>
    </div>
  );
}
