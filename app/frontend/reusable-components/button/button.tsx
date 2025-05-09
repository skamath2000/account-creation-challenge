import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  type?: 'button' | 'submit';
  href?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  role?: string;
}

const classes = 'inline-block rounded-md w-full py-3 px-6 bg-[hsla(244,49%,49%,1)] hover:bg-[hsla(244,69%,39%,1)] text-white mb-6';

export function Button({ href, children, type, onClick, role }: Props) {
  if (href) {
    return (
      <Link to={href} className={`${classes} flex justify-center`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} role={role} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
