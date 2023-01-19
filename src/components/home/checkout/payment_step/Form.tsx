import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import StripeWrapper from './stripe/StripeWrapper';
import WizardStep from '../WizardStep';

export default function FormPaymentStep() {
  return (
    <div className="w-7/12">
      <div className="flex flex-col mx-auto px-20">
        <h3 className="font-bold text-4xl text-slate-900 pt-8">Brandii.</h3>
        <WizardStep currentStep="payment" />
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold mb-6">Paiement</h4>
          <StripeWrapper />
          <div className="flex flex-row justify-between items-center pt-6">
            <Link
              href="/checkouts/4/shipping"
              className="flex items-center text-sm"
            >
              <span>
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
              </span>
              Retour à l'étape précédente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
