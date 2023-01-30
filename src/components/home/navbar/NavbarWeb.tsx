import Link from 'next/link';
import { s3PublicStorage } from '../../../ts/utils/getS3Storage';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import ShoppingCart from '../shopping-cart/Index';
import { IProduct } from '../../../ts/interfaces/dashboard/Product/IProduct';

interface menuInterface {
  classNames: (...classes: string[]) => string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: { username: string };
  signOut(): void;
  products: IProduct[];
}

export default function NavbarWeb({
  classNames,
  setOpen,
  user,
  signOut,
  products,
}: menuInterface) {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="relative bg-white z-10">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                <Popover key="boutique" className="flex">
                  {({ open }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={classNames(
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800',
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none'
                          )}
                        >
                          La boutique
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="absolute inset-0 top-1/2 bg-white shadow"
                            aria-hidden="true"
                          />

                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                <div className="col-start-1 grid grid-cols-3 gap-x-8">
                                  {products.map((product) => (
                                    <div
                                      key={product.id}
                                      className="group relative text-base sm:text-sm"
                                    >
                                      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <Link href={`/products/${product.id}`}>
                                          <img
                                            src={
                                              s3PublicStorage + product.image
                                            }
                                            alt={product.title}
                                            className="object-cover object-center"
                                          />
                                        </Link>
                                      </div>
                                      <a className="mt-4 block font-medium text-gray-900">
                                        {product.title}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user.username ? (
                  <>
                    <p className="text-sm text-gray-700">
                      Bonjour <span className="font-bold">{user.username}</span>
                    </p>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <p
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Se déconnecter
                    </p>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Se connecter
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link
                      href="/signup"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Creer un compte
                    </Link>
                  </>
                )}
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <span className="ml-3 block text-sm font-medium">FR</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <button
                  onClick={openModal}
                  className="group -m-2 flex items-center p-2"
                >
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </button>
              </div>
              {isOpen && <ShoppingCart setIsOpen={setIsOpen} isOpen={isOpen} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
