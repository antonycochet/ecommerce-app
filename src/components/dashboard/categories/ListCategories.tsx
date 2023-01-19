import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listCategories } from '../../../graphql/queries';
import { TCategory } from '../../../ts/types/category/tcategory';
import ModalAddCategory from './ModalAddCategory';

export default function ListCategories() {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<TCategory[]>([]);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  async function fetchCategories() {
    const apiData: any = await API.graphql({ query: listCategories });
    setCategories(apiData.data.listCategories.items);
  }

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
      <div className="flex flex-row justify-between pb-6 w-full">
        <h3 className="text-3xl tracking-tighter font-bold text-slate-800">
          Liste des catégories
        </h3>
        <button
          className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded shadow-md shadow-indigo-500/50"
          onClick={openModal}
        >
          Ajouter une catégorie
        </button>
      </div>
      <div className="overflow-x-auto relative sm:rounded-lg w-full bg-white">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                Titre
              </th>
              <th scope="col" className="py-3 px-6">
                Description de la catégorie
              </th>
              <th scope="col" className="py-3 px-6">
                Nombre de produits
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <tr
                  key={category.id}
                  className="bg-white border-b last:border-none"
                >
                  <th
                    scope="row"
                    className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div className="flex flex-col">
                      <p>{category.title}</p>
                      <p className="font-light">{category.subTitle}</p>
                    </div>
                  </th>
                  <td className="py-4 px-6">{category.fullDescription}</td>
                  <td className="py-4 px-6">8 produits</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                      {category.isAvailable ? 'Online' : 'Offline'}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600">
                      Editer
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isOpen && <ModalAddCategory setIsOpen={setIsOpen} isOpen={isOpen} />}
      </div>
    </div>
  );
}
