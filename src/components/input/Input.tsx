import React from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.model';
import styles from './Input.module.css';

export default (
    {
        type,
        shape = 'default',
        size = 'default',
        placeholder,
        className,
        textLabel,
        appearance,
        prefixIcon,
        suffixIcon
    }: InputProps,
    ...props: any
) => {
    let c = classNames(
        styles[`mu-inp`],
        styles[`mu-inp-shape-${shape}`],
        styles[`mu-inp-size-${size}`],
        { [styles[`mu-inp-flex`]]: !!prefixIcon || !!suffixIcon },
        // ...clsProps,
        className
    );

    const inp = (
        <input type={type} className={c} placeholder={placeholder} {...props} />
    );
    if (appearance === 'stacked') {
        return (
            <div className='flex'>
                <label>{textLabel}</label>
                {inp}
            </div>
        );
    }

    return inp;
};
