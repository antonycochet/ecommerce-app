import FormPaymentStep from '../../../components/home/checkout/payment_step/Form';
import Informations from '../../../components/home/checkout/Informations';

export default function shipping() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="flex justify-center">
        <FormPaymentStep />
        <Informations />
      </div>
    </div>
  );
}
