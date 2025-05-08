import React, { ChangeEvent } from 'react';

interface Props {
  label: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ onChange, label, value }: Props) {
  const id = label.replace(/ /gm, '_');

  return (
    <div>
      <label className="block text-sm">{label}</label>
      <input
        id={id}
        className="block w-full p-2 border-4 border-solid border-slate-300"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
