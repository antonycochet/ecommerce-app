import FormInformationStep from '../../../components/home/checkout/information_step/Form';
import Informations from '../../../components/home/checkout/Informations';

export default function information() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="flex justify-center">
        <FormInformationStep />
        <Informations />
      </div>
    </div>
  );
}
