import { CheckCircleIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import DashboardFormInput from '../../../common/form/Input/Input';
import WizardStep from '../WizardStep';

interface IFormShippingStep {
  paymentIntent: undefined;
}

export default function FormShippingStep({ paymentIntent }: IFormShippingStep) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data: any) => console.log(data));

  const shippingMethods = [
    {
      type: 'standard',
      title: 'Livraison Standard',
      subtitle: 'Livraison sous 7 jours ouvrés',
      price: '5 €',
    },
    {
      type: 'fast',
      title: 'Livraison Rapide',
      subtitle: 'Recevez votre colis sous 2 jours ouvrés !',
      price: '12 €',
    },
  ];

  return (
    <div className="w-7/12">
      <div className="flex flex-col mx-auto px-20">
        <h3 className="font-bold text-4xl text-slate-900 pt-8">Brandii.</h3>
        <WizardStep currentStep="shipping" />
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-6">
              Choix de la livraison
            </h4>
            <ul className="flex flex-col space-y-4 border-b pb-8">
              {shippingMethods.map((method, index) => {
                return (
                  <li key={index}>
                    <input
                      type="radio"
                      id={method.type}
                      name="hosting"
                      value={method.type}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor={method.type}
                      className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          {method.title}
                        </div>
                        <div className="w-full">{method.subtitle}</div>
                        <div className="w-full mt-">{method.price}</div>
                      </div>
                      <CheckCircleIcon className="w-6 h-6" />
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-row justify-between items-center pt-6">
              <Link
                href="/checkouts/4/information"
                className="flex items-center text-sm"
              >
                <span>
                  <ChevronLeftIcon className="w-5 h-5 mr-1" />
                </span>
                Retour à l'étape précédente
              </Link>
              <Link
                href="/checkouts/4/payment"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
              >
                Continuer vers le paiement
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
