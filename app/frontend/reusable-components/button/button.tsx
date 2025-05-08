import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  type?: 'button' | 'submit';
  href?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const classes = 'inline-block py-3 px-6 bg-[hsla(244,49%,49%,1)] text-white';

export function Button({ href, children, type, onClick }: Props) {
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
