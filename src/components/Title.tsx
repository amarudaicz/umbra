import type { FC } from 'react';
import React from 'react';

interface TitleProps {
  children?: React.ReactNode;
  className?:string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <>
        <div className={`${className} font-bold text-primary leading-none text-[5rem] sm:text-[10rem] md:text-[12rem]`}>
            {children}
        </div>

    </>
  );
};
