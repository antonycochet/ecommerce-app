import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IPaymentAlert {
  alertMessage: { content: string | undefined; type: string };
  alertShow: boolean;
  setAlertShow: Dispatch<SetStateAction<boolean>>;
}

export default function PaymentAlert({
  alertMessage,
  alertShow,
  setAlertShow,
}: IPaymentAlert) {
  function closeModal() {
    setAlertShow(false);
  }

  return (
    <>
      <Transition appear show={alertShow} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-red-100 p-4 text-left align-middle transition-all absolute top-12 right-12">
                  <Dialog.Title as="h3">
                    <div className="flex items-center justify-between text-red-800">
                      <div className="flex items-center space-x-2">
                        <XCircleIcon className="w-4 h-4 text-red-500" />
                        <h3 className="font-semibold">Erreur</h3>
                      </div>
                      <XMarkIcon
                        onClick={() => setAlertShow(false)}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                  </Dialog.Title>
                  <div className="ml-6">
                    <p className="text-sm text-red-500 font-medium">
                      {alertMessage.content}
                    </p>
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
