import React, { ChangeEvent } from 'react';

interface Props {
  label: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ onChange, label, value }: Props) {
  const id = label.replace(/ /gm, '_');

  return (
    <div className="mb-6 last-of-type:mb-12">
      <label className="mb-2 block text-sm">{label}</label>
      <input
        id={id}
        className="block w-full rounded-md p-2 border-2 border-b-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
