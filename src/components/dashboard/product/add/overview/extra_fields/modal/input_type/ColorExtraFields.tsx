import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IExtraFields } from '../../../../../../../../ts/interfaces/dashboard/Product/IProduct';

interface IColorExtraFields {
  handleApplyExtraFields: () => void;
  setData: Dispatch<SetStateAction<IExtraFields>>;
  data: IExtraFields;
}

export default function ColorExtraFields({
  handleApplyExtraFields,
  setData,
  data,
}: IColorExtraFields) {
  const handleDeleteInput = () => {
    let copyArray = [...data.inputs];
    copyArray.pop();

    setData({ ...data, inputs: copyArray });
  };

  const handleAddInput = (id: number) => {
    let copyArray = data.inputs;
    copyArray.push({ color: '#00000', price: 0, stock: 0, id: id + 1 });
    setData({ ...data, inputs: copyArray });
  };

  const handleUpdateInputValue = (
    id: number,
    value: string | number,
    type: string
  ) => {
    let copyArray: any = [...data.inputs];
    let objectToUpdate = copyArray[id];
    objectToUpdate[type] = value;
    objectToUpdate.id = id;
  };

  useEffect(() => {
    data.type = 'color';
  }, []);

  let inputsText = [
    {
      type: 'price',
      label: 'Prix',
    },
    {
      type: 'stock',
      label: 'Stock',
    },
  ];

  return (
    <div>
      <h3 className="block text-sm font-medium text-gray-900 mb-6">
        Couleur du produit
      </h3>
      <div className="flex flex-col space-y-4">
        {data.inputs.map((elem, indexInputs) => {
          return (
            <div key={indexInputs} className="flex items-center space-x-4">
              <input
                type={'color'}
                className="w-8 h-8"
                onBlur={(e) =>
                  handleUpdateInputValue(indexInputs, e.target.value, 'color')
                }
              />
              {inputsText.map((input, index) => {
                return (
                  <div key={index} className="relative">
                    <input
                      type="number"
                      id={input.type + index}
                      min={0}
                      defaultValue={0}
                      onBlur={(e) =>
                        handleUpdateInputValue(
                          indexInputs,
                          e.target.value,
                          input.type
                        )
                      }
                      className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer text-xl"
                      placeholder=" "
                    />
                    <label
                      htmlFor={input.type + index}
                      className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                    >
                      {input.label}
                    </label>
                  </div>
                );
              })}
              <PlusCircleIcon
                onClick={() => handleAddInput(indexInputs)}
                className="w-6 h-6 text-indigo-600 cursor-pointer"
              />
              {indexInputs === data.inputs.length - 1 &&
                data.inputs.length > 1 && (
                  <XCircleIcon
                    onClick={() => {
                      handleDeleteInput();
                    }}
                    className="w-6 h-6 text-red-600 cursor-pointer"
                  />
                )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
          onClick={handleApplyExtraFields}
        >
          J'ajoute mon champ
        </button>
      </div>
    </div>
  );
}
