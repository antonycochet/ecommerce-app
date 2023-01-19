import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IExtraFields } from '../../../../../../../../ts/interfaces/dashboard/Product/IProduct';

interface IHightlightExtraFields {
  handleApplyExtraFields: () => void;
  setData: Dispatch<SetStateAction<IExtraFields>>;
  data: IExtraFields;
}

export default function HightlightExtraFields({
  handleApplyExtraFields,
  setData,
  data,
}: IHightlightExtraFields) {
  const handleDeleteInput = () => {
    let copyArray = [...data.inputs];
    copyArray.pop();

    setData({ ...data, inputs: copyArray });
  };

  const handleAddInput = (id: number) => {
    let copyArray = data.inputs;
    copyArray.push({ title: '', content: '', id: id + 1 });
    setData({ ...data, inputs: copyArray });
  };

  const handleUpdateInputValue = (id: number, value: string, type: string) => {
    let copyArray: any = [...data.inputs];
    let objectToUpdate = copyArray[id];
    objectToUpdate[type] = value;
    objectToUpdate.id = id;
  };

  useEffect(() => {
    data.type = 'highlight';
  }, []);

  return (
    <div>
      <h3 className="block text-sm font-medium text-gray-900 mb-6">
        Plus de détails
      </h3>
      <div className="flex flex-col space-y-4">
        {data.inputs.map((elem, indexInputs) => {
          return (
            <div
              key={indexInputs}
              className="flex flex-row border-b last:border-none pb-4 items-center space-x-4"
            >
              <div className="flex flex-col space-y-2 w-10/12">
                <div className="relative">
                  <input
                    type="text"
                    id={'title' + indexInputs}
                    onBlur={(e) =>
                      handleUpdateInputValue(
                        indexInputs,
                        e.target.value,
                        'title'
                      )
                    }
                    className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={'title' + indexInputs}
                    className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                  >
                    Titre de la partie
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    rows={4}
                    id={'content' + indexInputs}
                    onBlur={(e) =>
                      handleUpdateInputValue(
                        indexInputs,
                        e.target.value,
                        'content'
                      )
                    }
                    className="block w-full p-4 font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor={'content' + indexInputs}
                    className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-9 peer-placeholder-shown:top-12 peer-focus:top-2 peer-focus:scale-90 font-semibold peer-focus:-translate-y-4 left-2"
                  >
                    Description
                  </label>
                </div>
              </div>
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
          onClick={() => handleApplyExtraFields()}
        >
          J'ajoute mon champ
        </button>
      </div>
    </div>
  );
}
