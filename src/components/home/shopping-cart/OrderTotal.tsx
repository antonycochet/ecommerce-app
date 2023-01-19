export default function OrderTotal() {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-md px-8 p-3">
      <div className="flex justify-between border-b py-3 w-full">
        <h3>Sous-total</h3>
        <p className="font-semibold">280 €</p>
      </div>
      <div className="flex justify-between border-b py-3 w-full">
        <h3>Frais de port</h3>
        <p className="font-semibold">25 €</p>
      </div>
      <div className="flex justify-between border-b py-3 w-full">
        <h3>TVA</h3>
        <p className="font-semibold">53.40 €</p>
      </div>
      <div className="flex justify-between py-3 w-full font-bold">
        <h3>Total</h3>
        <p>358.4 €</p>
      </div>
    </div>
  );
}
