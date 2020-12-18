import React from 'react';

interface ComponentShowcaseProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}

const ComponentShowcase = ({ title, children }: ComponentShowcaseProps) => {
    return (
        <div className='px-8 py-4'>
            <h2 className='text-2xl border-b border-gray-300 font-bold mb-4'>
                {title}
            </h2>
            {children}
        </div>
    );
};

export default ComponentShowcase;
