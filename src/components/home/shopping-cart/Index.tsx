import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Dispatch, Fragment, SetStateAction, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import ListProducts from './ListProducts';

interface IShoppingCart {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function ShoppingCart({ setIsOpen, isOpen }: IShoppingCart) {
  function closeModal() {
    setIsOpen(false);
  }

  let { shoppingCart, setShoppingCart } = useContext(CartContext);

  const handleShoppingCart = () => {
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all px-12">
                  <div className="flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Mon panier
                    </Dialog.Title>
                    <XMarkIcon
                      onClick={closeModal}
                      className="w-6 h-6 text-gray-300 cursor-pointer"
                    />
                  </div>
                  {shoppingCart.products.length ? (
                    <>
                      <ListProducts shoppingCart={shoppingCart} />
                      <div className="text-right">
                        <button
                          //href={'/checkouts/4/information'}
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleShoppingCart}
                        >
                          Je confirme mon panier
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col justify-center items-center h-80 space-y-8">
                      <FaceFrownIcon className="w-20 h-20 text-slate-700" />
                      <p className="text-center text-lg text-slate-700 font-semibold">
                        Votre panier est vide,
                        <br /> consulter nos produits{' '}
                        <span className="underline underline-offset-2">
                          ici
                        </span>
                      </p>
                    </div>
                  )}
                  {/* List of products for the checkout */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
