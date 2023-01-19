import Label from '../Label/label';

interface IDashboardFormInput {
  register: any;
  errors: any;
  labelTitle: string;
  textDescription: string;
  value: string;
}

export default function DashboardFormCheckboxHelperText({
  register,
  errors,
  labelTitle,
  textDescription,
  value,
}: IDashboardFormInput) {
  return (
    <>
      <div className="flex items-center h-5">
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          {...register(value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-200 focus:ring-blue-500 focus:ring-2"
        />
      </div>
      <div className="ml-2 text-sm">
        <Label isRequired={false} labelTitle={labelTitle} />
        <p
          id="helper-checkbox-text"
          className="text-xs font-normal text-gray-500"
        >
          {textDescription}
        </p>
      </div>
    </>
  );
}
