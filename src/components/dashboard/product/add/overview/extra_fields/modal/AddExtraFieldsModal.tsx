import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardHomeReactSelect from '../../../../../../common/form/Select/ReactSelect';
import CapacityExtraFields from './input_type/CapacityExtraFields';
import ColorExtraFields from './input_type/ColorExtraFields';
import HightlightExtraFields from './input_type/HightlightExtraFields';
import { IExtraFields } from '../../../../../../../ts/interfaces/dashboard/Product/IProduct';

interface IAddExtraFieldsModal {
  setIsOpenAddExtraField: Dispatch<SetStateAction<boolean>>;
  isOpenAddExtraField: boolean;
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
  extraFields: IExtraFields[];
}

let option = [
  { value: 'color', label: 'Couleur' },
  { value: 'capacity', label: 'Contenance' },
  { value: 'hightlight', label: 'Plus de détails' },
];

export default function AddExtraFieldsModal({
  setIsOpenAddExtraField,
  isOpenAddExtraField,
  setExtraFields,
  extraFields,
}: IAddExtraFieldsModal) {
  const { control } = useForm();
  const [inputSelected, setInputSelected] = useState<string>('');
  const [data, setData] = useState<IExtraFields>({
    type: '',
    inputs: [{}],
    position: 0,
  });

  const handleApplyExtraFields = () => {
    setExtraFields([...extraFields, data]);
    try {
      closeModal();
    } catch {
      console.log('error');
    }
  };

  function closeModal() {
    setIsOpenAddExtraField(false);
  }

  const handleSelection = (value: any) => {
    setInputSelected(value);
  };

  useEffect(() => {
    InputBySelection(inputSelected);
  }, [inputSelected]);

  const InputBySelection = (type: string) => {
    let result;
    switch (type) {
      case 'capacity':
        result = (
          <CapacityExtraFields
            data={data}
            setData={setData}
            handleApplyExtraFields={handleApplyExtraFields}
          />
        );
        break;
      case 'color':
        result = (
          <ColorExtraFields
            data={data}
            setData={setData}
            handleApplyExtraFields={handleApplyExtraFields}
          />
        );
        break;
      case 'hightlight':
        result = (
          <HightlightExtraFields
            data={data}
            setData={setData}
            handleApplyExtraFields={handleApplyExtraFields}
          />
        );
    }
    return result;
  };

  return (
    <>
      <Transition appear show={isOpenAddExtraField} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-3xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-slate-800"
                    >
                      Je crée mon champ personnalisé
                    </Dialog.Title>
                    <XMarkIcon
                      onClick={closeModal}
                      className="w-5 h-5 text-slate-800 cursor-pointer"
                    />
                  </div>
                  <div className="pt-8 pb-4 space-y-4">
                    <DashboardHomeReactSelect
                      register={undefined}
                      control={control}
                      labelTitle={'Je choisi mon champ personnalisé'}
                      value={'test'}
                      placeholder={'Couleur'}
                      data={option}
                      handleSelection={handleSelection}
                    />
                    {inputSelected && InputBySelection(inputSelected)}
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
