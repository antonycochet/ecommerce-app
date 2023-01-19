import { useForm } from 'react-hook-form';
import DashboardFormInput from '../../common/form/Input/Input';

export default function Informations() {
  const products = [
    {
      img: 'https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Small Desk to decorate',
      price: '140 €',
      quantity: 1,
    },
    {
      img: 'https://images.pexels.com/photos/8129909/pexels-photo-8129909.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Small Desk to decorate',
      price: '140 €',
      quantity: 2,
    },
    {
      img: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Small Desk to decorate',
      price: '140 €',
      quantity: 2,
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    <div className="w-5/12 bg-gray-50 rounded-lg mt-8">
      <div className="flex flex-col">
        <div className="flex flex-col px-8 border-b pt-4">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="flex flex-row border-b last:border-none py-6 space-x-6"
              >
                <div className="relative">
                  <img
                    className="w-32 h-32 overflow-hidden object-cover rounded-md"
                    src={product.img}
                  />
                  <span className="bg-indigo-600 rounded-full w-7 h-7 p-1 text-sm flex justify-center items-center text-white font-semibold absolute -top-2 -right-2">
                    {product.quantity}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {product.title}
                    </h4>
                    <p className="font-semibold">{product.price}</p>
                    <p className="text-gray-500 font-normal">
                      {product.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center px-8 text-gray-500">
          <div className="w-full flex justify-between items-center space-x-6 border-b py-6">
            <DashboardFormInput
              register={register}
              errors={errors}
              value={'discount'}
              isRequired={false}
              type={'text'}
            />
            <button className="px-4 py-2.5 bg-indigo-600 text-white font-semibold rounded-md text-sm">
              Appliquer!
            </button>
          </div>
          <div className="flex justify-between py-2 w-full">
            <h3>Sous-total</h3>
            <p className="font-semibold text-gray-900">280 €</p>
          </div>
          <div className="flex justify-between py-2 w-full text-gray-200">
            <h3>Réduction</h3>
            <p className="font-semibold">-</p>
          </div>
          <div className="flex justify-between py-2 w-full">
            <h3>Frais de port</h3>
            <p className="font-semibold text-gray-900">25 €</p>
          </div>
          <div className="flex justify-between border-b py-2 w-full">
            <h3>TVA</h3>
            <p className="font-semibold text-gray-900">53.40 €</p>
          </div>
          <div className="flex justify-between py-6 w-full font-bold text-gray-900">
            <h3>Total</h3>
            <p>358.4 €</p>
          </div>
        </div>
      </div>
    </div>
  );
}
