import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    className?: string;
    size?: 'lg' | 'sm';
    type?: 'outline';
    shape?: 'round';
    loading?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}
function getBtnSizeCls(size: string | undefined) {
    return size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text';
}

function getBtnTypeCls(type: string | undefined) {
    return type === 'outline'
        ? 'border-2 box-border border-grey-500 py-0.5 hover:border-primary-500 active:bg-gray-50'
        : 'bg-primary-500 hover:bg-primary-400 py-1 active:bg-primary-600 text-white';
}

function getBtnShapeCls(shape: string | undefined) {
    return shape === 'round' ? 'rounded-full' : 'rounded-sm';
}

const Button = ({
    size,
    className,
    type,
    shape,
    onClick,
    children
}: ButtonProps): JSX.Element => {
    const c = classNames(
        'appearance-none focus:outline-none px-5',
        className,
        getBtnSizeCls(size),
        getBtnShapeCls(shape),
        getBtnTypeCls(type)
    );
    return (
        <button type='button' className={c} onClick={onClick}>
            <span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                    />
                </svg>
            </span>
            <span>{children}</span>
        </button>
    );
};

export default Button;
