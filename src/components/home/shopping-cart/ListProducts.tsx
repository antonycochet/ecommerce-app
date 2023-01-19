export default function ListProducts() {
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
  ];

  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center justify-between border-b last:border-none py-8"
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
            <div className="flex flex-row items-center leading-5 -ml-12">
              <div className="flex flex-col">
                <h4 className="font-semibold text-slate-900">
                  {product.title}
                </h4>
                <p className="text-gray-500 font-normal">{product.subtitle}</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm">Supprimer</button>
            <h3 className="font-semibold">{product.price}</h3>
          </div>
        );
      })}
    </div>
  );
}
