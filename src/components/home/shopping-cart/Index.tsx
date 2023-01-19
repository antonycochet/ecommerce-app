import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Dispatch, Fragment, SetStateAction } from 'react';
import ListProducts from './ListProducts';
import OrderTotal from './OrderTotal';

interface IShoppingCart {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function ShoppingCart({ setIsOpen, isOpen }: IShoppingCart) {
  function closeModal() {
    setIsOpen(false);
  }

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

                  {/* List of products for the checkout */}
                  <ListProducts />

                  {/* Order total informations */}
                  <OrderTotal />

                  <div className="text-right mt-8">
                    <Link
                      href={'/checkouts/4/information'}
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Je confirme mon panier
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
