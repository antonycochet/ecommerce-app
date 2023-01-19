import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface IProductColorChoices {
  product: { colors: { name: string; selectedClass: string; class: string }[] };
  setSelectedColor: Dispatch<SetStateAction<boolean>>;
  selectedColor: boolean;
  classNames: (...classes: string[]) => string;
}

export default function ProductColorChoices({
  product,
  setSelectedColor,
  selectedColor,
  classNames,
}: IProductColorChoices) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Couleurs</h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">
          {' '}
          Choose a color{' '}
        </RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {product.colors.map(
            (color: { name: string; selectedClass: string; class: string }) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedClass,
                    active && checked ? 'ring ring-offset-1' : '',
                    !active && checked ? 'ring-2' : '',
                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {' '}
                  {color.name}{' '}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.class,
                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                  )}
                />
              </RadioGroup.Option>
            )
          )}
        </div>
      </RadioGroup>
    </div>
  );
}
