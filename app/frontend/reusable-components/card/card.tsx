import React, { ReactNode } from 'react';
import logo from '../../assets/logo.svg';  

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

export function Card({ children, title, description }: Props) {
  return (
    <section className="bg-white p-10 shadow-card min-h-[400px] w-1/2 justify-self-center rounded-2xl border border-solid border-slate-200">
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Mock company logo"
            src={logo}
            className="mx-auto h-16 w-auto"
          /> 
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900 m-0 mb-4">
            {title}
          </h2>
        </div>
      <p className="text-[hsla(243,30%,13%,.63)] text-base m-0 mb-4">{description}</p>
      {children}
    </section>
  );
}