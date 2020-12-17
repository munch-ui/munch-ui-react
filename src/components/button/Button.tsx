import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    className?: string;
    size?: 'large' | 'small' | 'default';
    style?: 'outline' | 'default';
    onClick?: () => void;
    children: React.ReactNode;
}
function getBtnSizeCls(size: string | undefined) {
    return size === 'sm'
        ? 'px-1 py-1'
        : size === 'lg'
        ? 'px-3 py-3'
        : 'px-4 py-1';
}

function getBtnTypeCls(style: string | undefined) {
    return style === 'outline'
        ? 'bg-white hover:bg-primary-400 active:bg-primary-300'
        : 'bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-white';
}

const Button = ({
    size,
    className,
    style,
    onClick,
    children
}: ButtonProps): JSX.Element => {
    const c = classNames(
        className,
        'appearance-none outline-none',
        className,
        getBtnSizeCls(size),
        getBtnTypeCls(style)
    );
    return (
        <button type='button' className={c} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
