import React from 'react';

const radioClasses = 'w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 focus:ring-indigo-500';

interface RadioButtonGroupProps {
    radioOptions: {
        value: string;
        label: string;
        children?: React.ReactNode;
    }[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonGroup = ({radioOptions, onChange}: RadioButtonGroupProps) => {
    return (
        <ul className="p-3 space-y-1 text-sm text-gray-700 mb-10">
            {radioOptions.map((option, index) => 
                <li key={`radio-list-option-${index}`}>
                    <div className="flex p-2 items-center rounded-md hover:bg-gray-100">
                        <div className="flex items-center justify-center h-8 w-8">
                            <input onChange={onChange} id={`radio-option-${index}`} name="helper-radio" type="radio" value={option.value} className={radioClasses} />
                        </div>
                        <div className="ms-4 flex p-2">
                            <label htmlFor={`radio-option-${index}`} className="items-center">{option.label}</label>
                        </div>
                    </div>
                    {option.children}
                </li>
            )}
        </ul>
    );
}