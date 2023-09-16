interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { children, className, ...rest} = props;

    return (
        <button className={`px-6 py-1 text-xl font-bold border border-black rounded ${className}`} {...rest}>{children}</button>
    )
}

export default Button
