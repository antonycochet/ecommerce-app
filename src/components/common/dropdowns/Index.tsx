import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  EllipsisVerticalIcon,
  TrashIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';

export default function Dropdown() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white focus:outline-none">
            <EllipsisVerticalIcon
              className="ml-2 -mr-1 h-5 w-5 text-slate-600"
              aria-hidden="true"
            />
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
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="hover:bg-indigo-500 hover:text-white text-slate-800 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <WrenchIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Editer
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button className="hover:bg-indigo-500 hover:text-white text-slate-800 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <TrashIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Supprimer
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
