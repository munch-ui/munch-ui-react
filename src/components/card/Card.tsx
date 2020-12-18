import React from 'react';

interface CardProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    actions?: React.ReactNode;
}

export default ({ title, children, actions }: CardProps) => {
    return (
        <div className='hover:shadow rounded border border-gray-200'>
            <div className='grid grid-cols-3 gap-4 border-gray-200 border-b p-3'>
                <div className='col-span-2 truncate font-semibold'>{title}</div>
                <div className='flex justify-end'>{actions}</div>
            </div>
            <div className='p-3'>{children}</div>
        </div>
    );
};
