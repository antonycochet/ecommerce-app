import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { changeKeys } from '../../../../ts/helperFunctions/changeKeys';

interface IDashboardHomeReactSelect {
  register: any;
  control: any;
  labelTitle: string;
  value: string;
  placeholder: string;
  data: {}[];
  handleSelection: (value: string) => void;
}
export default function DashboardHomeReactSelect({
  register,
  control,
  labelTitle,
  value,
  placeholder,
  data,
  handleSelection,
}: IDashboardHomeReactSelect) {
  const keyMap = {
    id: 'value',
    title: 'label',
  };

  // ChangeKeys to change id and title key to value and label to get value in React Select option
  const newArrayData = changeKeys(data, keyMap);

  return (
    <>
      <label className="block text-sm font-medium text-gray-900 mb-4">
        {labelTitle}
      </label>
      <Controller
        name={value}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            options={newArrayData}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: '#f9fafb',
                border: '1px solid #d1d5db',
                marginTop: '-10px',
                fontSize: '0.875rem',
              }),
            }}
            className="z-20"
            placeholder={placeholder}
            value={newArrayData.find((c) => c.value === value)}
            onChange={(selectedOption: any) => {
              onChange(handleSelection(selectedOption.value));
            }}
          />
        )}
      />
    </>
  );
}
