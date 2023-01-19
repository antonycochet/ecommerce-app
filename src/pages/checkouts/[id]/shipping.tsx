import Informations from '../../../components/home/checkout/Informations';
import Form from '../../../components/home/checkout/shipping_step/Form';

export default function shipping() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="flex justify-center">
        <Form paymentIntent={undefined} />
        <Informations />
      </div>
    </div>
  );
}
