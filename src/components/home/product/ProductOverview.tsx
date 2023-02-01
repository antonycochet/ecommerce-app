import { CheckIcon } from '@heroicons/react/24/solid';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import { getProduct } from '../../../graphql/queries';
import { IProduct } from '../../../ts/interfaces/dashboard/Product/IProduct';
import { updateProduct } from '../../../graphql/mutations';

import Breadcrumb from './breadcrumb/Index';
import ImageGallery from './image/ImageGallery';
import ProductReviewsCustomers from './review/ProductReviewsCustomers';
import { CartContext } from '../../../context/CartContext';
import { handleAddLocalStorageValue } from '../../../ts/helperFunctions/localStorage/handleLocalStorage';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductOverview() {
  const [product, setProduct] = useState<IProduct>();
  const router = useRouter();
  const productId = String(router.query.id);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (productId: string) => {
    const apiData: any = await API.graphql({
      query: getProduct,
      variables: { id: productId },
    });
    setProduct(apiData.data.getProduct);
  };

  const handleAddToCart = async (product: IProduct) => {
    if (product.isAvailable) {
      try {
        setShoppingCart({ products: [...shoppingCart.products, product] });
        handleAddLocalStorageValue('shoppingCartStorage', product, 'array');
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(product);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb
            <Breadcrumb product={product} />
          */}

        <div className="flex flex-row justify-between max-w-7xl mx-auto px-8">
          {/* Image gallery */}
          <div className="flex flex-col w-5/12">
            <ImageGallery product={product} />
            {product ? (
              <ProductReviewsCustomers />
            ) : (
              <div className="h-48 rounded-md bg-gray-100 animate-pulse mt-8"></div>
            )}
          </div>
          {/* Product info */}
          <div className="w-6/12 pt-8 pb-16 sm:px-6 lg:border-r lg:border-gray-200">
            <div className="lg:col-span-2">
              {product ? (
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>
              ) : (
                <div className="bg-gray-100 animate-pulse w-8/12 h-10 rounded-md"></div>
              )}
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-2">
              <h2 className="sr-only">Information produit</h2>

              {product ? (
                <p className="text-2xl tracking-tight text-gray-900">
                  {product.price} €
                </p>
              ) : (
                <div className="bg-gray-100 animate-pulse w-4/12 h-8 rounded-md"></div>
              )}

              {/* Reviews
                <ProductReviews reviews={reviews} classNames={classNames} />
                */}

              {/* Description and details */}
              <div className="mt-10">
                {product ? (
                  <p className="text-base text-gray-600 font-normal">
                    {product.fullDescription}
                  </p>
                ) : (
                  <div className="bg-gray-100 animate-pulse w-full h-36 rounded-md"></div>
                )}
              </div>

              <div className="flex space-x-6 items-center w-full mt-10">
                {product ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex w-8/12 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Ajouter au panier
                  </button>
                ) : (
                  <div className="w-8/12 bg-gray-100 rounded-md animate-pulse h-14"></div>
                )}
                <div className="flex items-center space-x-1 justify-between">
                  {product ? (
                    <>
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-500">
                        Produit disponible
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
