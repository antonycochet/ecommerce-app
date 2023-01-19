interface ILabel {
  labelTitle: string;
  isRequired: boolean;
}

export default function Label({ labelTitle, isRequired }: ILabel) {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-900">
      {`${labelTitle} ${isRequired ? '*' : ''}`}
    </label>
  );
}
