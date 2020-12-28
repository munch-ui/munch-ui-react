import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonProps } from './Button.model';

export default ({
    prefixIcon,
    suffixIcon,
    children,
    theme,
    color = 'primary',
    appearance = 'fill',
    size = 'default',
    shape = 'default',
    className = ''
}: ButtonProps): JSX.Element => {
    let clsProps: { [cls: string]: boolean | '' }[] = [];
    if (!theme) {
        clsProps = [
            {
                [styles[`mu-btn-${color}`]]: color && appearance === `fill`
            },
            {
                [`border border-${color}`]: color && appearance !== `ghost`
            },
            {
                [`hover:bg-gray-100 active:text-${color}`]:
                    color && appearance === `ghost`
            }
        ];
    }
    let c = classNames(
        styles[`mu-btn`],
        styles[`mu-btn-shape-${shape}`],
        styles[`mu-btn-appearance-${appearance}`],
        styles[`mu-btn-size-${size}`],
        { [styles[`mu-btn-flex`]]: !!prefixIcon || !!suffixIcon },
        ...clsProps,
        theme,
        className
    );
    return (
        <button type='button' className={c}>
            {prefixIcon && <span className='mr-2'>{prefixIcon}</span>}
            {children}
            {suffixIcon && <span className='ml-2'>{suffixIcon}</span>}
        </button>
    );
};
