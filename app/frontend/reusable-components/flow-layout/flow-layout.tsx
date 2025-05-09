import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  children: ReactNode;
}

export function FlowLayout({ children }: Props) {
  return (
    <div className="mt-5 max-w-[1000px] mx-auto grid">
      <div className="w-full text-right mb-20">
        <Link to="/logout" reloadDocument>
          Logout
        </Link>
      </div>
      {children}
    </div>
  );
}
