
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"
import { twMerge } from "tailwind-merge"


interface NavigationButtonProps {
   path: string 
   text: string
   icon: React.ComponentType<any> 
   expand?: boolean
   hiddenText?: boolean
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    path, 
    text, 
    icon: IconComponent, 
    expand = false,
    hiddenText = false
}) => {
    function getStyles(): string {
        if (expand) {
            return twMerge(buttonVariants({ variant: "outline" }), "w-full justify-start")
        }
        return buttonVariants({ variant: "outline" })
    }
    return (
        <Link to={path} className={getStyles()}>
            <IconComponent className={` ${!hiddenText && "mr-2"}`}/>
            <span className={`${hiddenText && "hidden"}  duration-300`}>{text}</span>
        </Link>
    )
}

export default NavigationButton
