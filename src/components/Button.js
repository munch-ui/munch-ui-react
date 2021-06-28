import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'

const Button = ({
    children,
    size,
    appearance = 'default',
    full,
    disabled,
    className,
    loading,
    ...rest
}) => {
    return (
        <button
            {...rest}
            type='submit'
            className={classNames(
                className,
                'border rounded-sm hover:shadow-lg flex justify-center items-center',
                {
                    'w-full': full,
                    'px-1.5 py-2 text-base': !size,
                    'px-4 py-0.5 text-sm': size === 'sm',
                    'px-4 py-3 text-lg': size === 'lg',
                    'px-6 py-4 text-xl': size === 'xl',
                    'opacity-70': disabled || loading,
                    'bg-primary text-white active:opacity-75 border-primary':
                        appearance === 'default',
                    'text-primary': appearance === 'outline',
                    'border-danger text-danger': appearance === 'outline-danger'
                }
            )}
        >
            {loading && (
                <div className='mr-2 justify-center flex'>
                    <ClipLoader color='white' size={20} />
                </div>
            )}
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    appearance: PropTypes.oneOf(['outline', 'default', 'outline-danger']),
    full: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg', 'xl'])
}

export default Button
