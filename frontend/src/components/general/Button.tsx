import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { children, className, ...rest} = props;
    const classes = twMerge(`px-6 py-1 text-xl font-bold border-2 border-black rounded ${className ?? ""}`);

    return (
        <button 
            className={classes} 
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
