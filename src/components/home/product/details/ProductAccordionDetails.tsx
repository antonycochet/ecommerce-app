import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface IProductAccordionDetails {
  product: { highlights: string[]; details: string[] };
}

export default function ProductAccordionDetails({
  product,
}: IProductAccordionDetails) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded bg-gray-50 px-4 py-2 text-left text-sm font-medium text-gray-900 focus:outline-none">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded bg-gray-50 px-4 py-2 text-left text-sm font-medium text-gray-900 focus:outline-none">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p className="text-sm text-gray-600">{product.details}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
