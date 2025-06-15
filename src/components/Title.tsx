import type { FC } from 'react';
import React from 'react';

interface TitleProps {
  children?: React.ReactNode;
  className?:string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <>
        <div className={`${className} font-bold text-primary leading-none text-[2rem] sm:text-[6rem] md:text-[8rem]`}>
            {children}
        </div>

    </>
  );
};
