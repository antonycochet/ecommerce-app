import { Dispatch, SetStateAction, useState } from 'react';

interface IDashboardFormInput {
  register: any;
  errors: any;
  labelTitle?: string | undefined;
  value: string;
  isRequired: boolean;
  type: string;
}

export default function DashboardFormInput({
  register,
  errors,
  labelTitle,
  value,
  isRequired,
  type,
}: IDashboardFormInput) {
  return (
    <div className="relative">
      <input
        type={type}
        min={0}
        {...register(value, { required: isRequired })}
        id={value}
        className="block px-4 py-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={value}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 font-semibold peer-focus:-translate-y-4 left-2"
      >
        {labelTitle}
      </label>
    </div>
  );
}
