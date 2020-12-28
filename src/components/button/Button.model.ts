export interface ButtonProps {
    children: string;
    color?: string | boolean;
    theme?: string;
    appearance?: string;
    size?: string;
    shape?: string;
    className?: string;
    loading?: boolean;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
}
