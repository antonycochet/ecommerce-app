import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface IProductSizeChoices {
  product: { sizes: { name: string; inStock: boolean }[] };
  setSelectedSize: Dispatch<SetStateAction<boolean>>;
  selectedSize: boolean;
  classNames: (...classes: string[]) => string;
}

export default function ProductSizeChoices({
  product,
  setSelectedSize,
  selectedSize,
  classNames,
}: IProductSizeChoices) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Tailles</h3>
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Guide des tailles
        </a>
      </div>

      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-6">
          {product.sizes.map((size: { name: string; inStock: boolean }) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              disabled={!size.inStock}
              className={({ active }) =>
                classNames(
                  size.inStock
                    ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                    : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                  active ? 'ring-2 ring-indigo-500' : '',
                  'relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                  {size.inStock ? (
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-indigo-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md'
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1={0}
                          y1={100}
                          x2={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
