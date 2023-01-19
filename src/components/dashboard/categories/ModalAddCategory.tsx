import { Dialog, Transition } from '@headlessui/react';
import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '../../../graphql/mutations';
import { TCategory } from '../../../ts/types/category/tcategory';
import { useForm } from 'react-hook-form';
import DashboardFormInput from '../../common/form/Input/Input';
import DashboardFormTextArea from '../../common/form/Textarea';
import DashboardFormCheckboxHelperText from '../../common/form/Checkbox/HelperText';

interface IModalAddCategory {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function ModalAddCategory({
  setIsOpen,
  isOpen,
}: IModalAddCategory) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCategory>();
  const onSubmit = handleSubmit((data) => addCategory(data));

  const addCategory = async (category: TCategory) => {
    console.log(category);
    try {
      if (!category.title) return;
      await API.graphql(graphqlOperation(createCategory, { input: category }));
      closeModal();
      reset();
    } catch (err) {
      console.log('error creating category:', err);
    }
  };

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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Création d'une catégorie
                  </Dialog.Title>
                  <div className="relative w-full max-w-2xl h-full md:h-auto">
                    <form onSubmit={onSubmit}>
                      <div className="p-6 space-y-6 flex flex-col w-full">
                        <DashboardFormInput
                          register={register}
                          errors={errors}
                          labelTitle={'Nom de la catégorie'}
                          value={'title'}
                          isRequired={false}
                          type={'text'}
                        />
                        <DashboardFormInput
                          register={register}
                          errors={errors}
                          labelTitle={'Sous-titre de la catégorie'}
                          value={'subTitle'}
                          isRequired={false}
                          type={'text'}
                        />
                        <DashboardFormTextArea
                          register={register}
                          errors={errors}
                          labelTitle={'Description de la catégorie'}
                          value={'fullDescription'}
                          isRequired={false}
                        />
                        <div className="flex items-center pl-4 rounded border border-gray-200 bg-gray-50">
                          <div className="flex px-2 py-4">
                            <DashboardFormCheckboxHelperText
                              register={register}
                              errors={errors}
                              labelTitle={'Disponibilité de la catégorie'}
                              textDescription={
                                'Permet de mentionner la disponibilité de la catégorie'
                              }
                              value={'isAvailable'}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center pl-6">
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Je creé la catégorie
                        </button>
                      </div>
                    </form>
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
