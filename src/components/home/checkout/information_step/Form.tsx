import {
  ChevronLeftIcon,
  HomeIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import DashboardFormInput from '../../../common/form/Input/Input';
import WizardStep from '../WizardStep';

export default function FormInformationStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className="w-7/12">
      <div className="flex flex-col mx-auto px-20">
        <h3 className="font-bold text-4xl text-slate-900 pt-8">Brandii.</h3>
        <WizardStep />
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Link
                href="/signin"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md text-center hover:bg-indigo-700"
              >
                Vous avez déjà un compte ?
              </Link>
              <div className="relative flex py-8 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-800 font-semibold">
                  Ou
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-6">
              Information de livraison
            </h4>
            <div className="flex flex-col space-y-4 border-b pb-8">
              <div className="flex flex-row justify-between space-x-4">
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Nom'}
                    value={'name'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Prénom'}
                    value={'firstname'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
              </div>
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Adresse mail'}
                value={'mail'}
                isRequired={false}
                type={'text'}
              />
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Adresse'}
                value={'adress'}
                isRequired={false}
                type={'text'}
              />
              <div className="flex flex-row justify-between space-x-8">
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Code postal'}
                    value={'zip'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Ville'}
                    value={'city'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
              </div>
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Numéro de téléphone'}
                value={'phone'}
                isRequired={false}
                type={'text'}
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-6">
              <Link href="/" className="flex items-center text-sm">
                <span>
                  <ChevronLeftIcon className="w-5 h-5 mr-1" />
                </span>
                Retour à la boutique
              </Link>
              <Link
                href="/checkouts/4/shipping"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
              >
                Continuer vers l'expédition
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
