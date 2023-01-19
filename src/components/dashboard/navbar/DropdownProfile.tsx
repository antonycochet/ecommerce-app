import { Menu, Transition } from '@headlessui/react';
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  AdjustmentsHorizontalIcon,
  ArrowTopRightOnSquareIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import router from 'next/router';

export default function DropdownProfile() {
  async function signOut() {
    try {
      await Auth.signOut().then(() => {
        router.push('/');
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="flex mx-3 text-sm">
            <span className="sr-only">Mon profil</span>
            <UserCircleIcon className="w-9 h-9 rounded-full" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-1">
              <Menu.Item>
                <Link
                  href="/dashboard/profile"
                  className="text-gray-900 flex w-full items-center px-2 py-2 text-sm hover:bg-blue-500 hover:text-white border-b"
                >
                  <AdjustmentsHorizontalIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Mon profile
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="text-gray-900 flex w-full items-center px-2 py-2 text-sm hover:bg-blue-500 hover:text-white"
                >
                  <ArrowTopRightOnSquareIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Se déconnecter
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
