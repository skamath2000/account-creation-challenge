import React from 'react';

interface AlertProps {
    onClose: () => void;
    message: string;
}

export const Alert = ({onClose, message}: AlertProps) => {
    return (
         <dialog open id="dialog" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-between items-center w-full" role="alert">
            <span className="block sm:inline mr-2">{message}</span>
            <button className="close w-8 rounded-md hover:bg-red-200 p-1" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
        </dialog>
    );
};
