import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createProduct } from '../../../../graphql/mutations';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  ArrowUturnLeftIcon,
  InformationCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/20/solid';
import {
  IExtraFields,
  IProduct,
} from '../../../../ts/interfaces/dashboard/Product/IProduct';
import { useRouter } from 'next/router';
import DragAndDrop from '../common/extra_fields/DragAndDrop';
import AddExtraFieldsModal from '../common/extra_fields/modal/AddExtraFieldsModal';
import OverviewGallery from '../common/gallery/OverviewGallery';
import OverviewWizard from '../common/wizard/OverviewWizard';
import Link from 'next/link';

const initialValue = {
  title: '',
  price: 0,
  stock: 0,
  reference: '',
  fullDescription: '',
  isAvailable: true,
  //ExtraField: [],
  image: null,
};

export default function AddProduct() {
  const [product, setProduct] = useState<IProduct>(initialValue);
  const [extraFields, setExtraFields] = useState<IExtraFields[]>([]);
  const [isOpenAddExtraField, setIsOpenAddExtraField] =
    useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });
  const onSubmit = () => {
    if (product.image !== null && typeof product.image !== 'string') {
      Storage.put('products/' + product.image.name, product.image, {
        resumable: true,
        completeCallback: (event) => {
          setProduct((prevState) => ({
            ...prevState,
            image: String(event.key),
          }));
        },
        errorCallback: (err) => {
          console.error('Unexpected error while uploading', err);
        },
      });
    }
  };

  const handleChangeInputContent = (value: string | number, type: any) => {
    setProduct((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const addProduct = async (product: any) => {
    try {
      if (!product.title) return;
      await API.graphql(graphqlOperation(createProduct, { input: product }));
      router.push('/dashboard/products');
    } catch (err) {
      console.log('error creating product:', err);
    }
  };

  useEffect(() => {
    if (typeof product.image === 'string') {
      addProduct(product);
    }
  }, [product.image]);

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
      <div className="flex flex-row items-center pb-8 w-full justify-between">
        <div className="flex flex-row items-center space-x-2 w-5/12">
          <Link
            className="bg-indigo-600 rounded-md p-2 mr-4 flex items-center text-white"
            href={'/dashboard/products'}
          >
            <ArrowUturnLeftIcon className="w-4 h-4" />
          </Link>
          <h3 className="text-2xl tracking-tighter font-bold text-slate-800">
            Ajout d'un produit
          </h3>
          <InformationCircleIcon className="w-5 h-5 text-slate-400 cursor-pointer" />
        </div>
        <OverviewWizard
          handleSubmit={handleSubmit(onSubmit)}
          product={product}
        />
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row w-full justify-between">
          <OverviewGallery setProduct={setProduct} />
          <div className="flex flex-col w-6/12">
            <div className="flex flex-col space-y-4">
              <div className="relative w-full">
                <input
                  type="text"
                  id="title"
                  className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                  placeholder=" "
                  {...(register('title'),
                  {
                    onChange: (e) =>
                      handleChangeInputContent(e.target.value, 'title'),
                  })}
                />
                <label
                  htmlFor="title"
                  className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                >
                  Titre
                </label>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="relative w-4/12">
                  <input
                    type="number"
                    id="price"
                    min={0}
                    className="relative block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer text-xl"
                    placeholder=" "
                    {...(register('price'),
                    {
                      onChange: (e) =>
                        handleChangeInputContent(
                          Number(e.target.value),
                          'price'
                        ),
                    })}
                  />
                  <div className="px-2 bg-white absolute right-8 top-1/2 transform -translate-y-1/2 font-semibold rounded-md">
                    €
                  </div>
                  <label
                    htmlFor="price"
                    className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                  >
                    Prix
                  </label>
                </div>
                <div className="relative w-4/12">
                  <input
                    type="number"
                    id="stock"
                    min={0}
                    className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer text-xl"
                    placeholder=" "
                    {...(register('stock'),
                    {
                      onChange: (e) =>
                        handleChangeInputContent(
                          Number(e.target.value),
                          'stock'
                        ),
                    })}
                  />
                  <label
                    htmlFor="stock"
                    className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                  >
                    Stock
                  </label>
                </div>
                <div className="relative w-4/12">
                  <input
                    type="text"
                    id="reference"
                    className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                    placeholder=" "
                    {...(register('reference'),
                    {
                      onChange: (e) =>
                        handleChangeInputContent(e.target.value, 'reference'),
                    })}
                  />
                  <label
                    htmlFor="reference"
                    className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                  >
                    Référence produit
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <textarea
                  rows={8}
                  id="description"
                  className="block w-full p-4 font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                  placeholder=" "
                  {...(register('fullDescription'),
                  {
                    onChange: (e) =>
                      handleChangeInputContent(
                        e.target.value,
                        'fullDescription'
                      ),
                  })}
                ></textarea>
                <label
                  htmlFor="description"
                  className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-9 peer-placeholder-shown:top-12 peer-focus:top-2 peer-focus:scale-90 font-semibold peer-focus:-translate-y-4 left-2"
                >
                  Description
                </label>
              </div>
              <div className="overflow-hidden flex flex-col border-2 border-gray-200 border-dashed rounded-md w-full px-4 pb-4 relative space-y-4">
                {product.ExtraField?.length ? (
                  <>
                    {/* List of extra fields */}
                    {<DragAndDrop extraFields={extraFields} />}
                    <button
                      onClick={() => setIsOpenAddExtraField(true)}
                      className="bg-indigo-600 text-white font-medium rounded-md mt-4 py-2 ml-auto px-4 text-sm hover:bg-indigo-700"
                    >
                      Ajouter un champ supplémentaire
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsOpenAddExtraField(true)}
                      className="absolute flex flex-row items-center bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-5 py-5 justify-center shadow-xl cursor-pointer"
                    >
                      <PlusCircleIcon className="w-8 h-8 text-blue-600 mr-2 absolute -top-3 -right-5" />
                      <h3 className="font-semibold tracking-tight text-slate-700 text-sm">
                        Ajoutez des champs personnalisés
                      </h3>
                    </button>
                    <div className="bg-gray-100 rounded-md w-full h-16 animate-pulse"></div>
                    <div className="flex flex-row justify-between space-x-2">
                      <div className="bg-gray-100 rounded-md w-7/12 h-16 animate-pulse"></div>
                      <div className="bg-gray-100 rounded-md w-5/12 h-16 animate-pulse"></div>
                    </div>
                    <div className="bg-gray-100 rounded-md w-full h-24 animate-pulse"></div>
                  </>
                )}
              </div>
              {/* Modal extra field */}
              {isOpenAddExtraField && (
                <AddExtraFieldsModal
                  setIsOpenAddExtraField={setIsOpenAddExtraField}
                  isOpenAddExtraField={isOpenAddExtraField}
                  setExtraFields={setExtraFields}
                  extraFields={extraFields}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
