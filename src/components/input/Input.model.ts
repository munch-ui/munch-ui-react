type InputTypes = 'text' | 'email' | 'password';

export interface InputProps {
    type: InputTypes;
    size?: string;
    shape?: string;
    className?: string;
    placeholder?: string;
    textLabel?: string;
    appearance?: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
}
