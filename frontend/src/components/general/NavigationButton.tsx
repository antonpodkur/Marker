
import { Link } from "react-router-dom"


interface NavigationButtonProps {
   path: string 
   text: string
   icon: React.ComponentType<any> 
   withBottomMargin?: boolean 
   hiddenText?: boolean
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    path, 
    text, 
    icon: IconComponent, 
    withBottomMargin = true,
    hiddenText = false
}) => {
    return (
        <Link to={path} className={`inline-flex items-center py-1 px-2 ${!hiddenText ? "mx-2 justify-start" : "justify-center"} text-lg text-black ${withBottomMargin && "mb-5"} border-2 border-black rounded`}>
            <IconComponent className={` ${!hiddenText && "mr-2"}`}/>
            <span className={`${hiddenText && "hidden"}  duration-300`}>{text}</span>
        </Link>
    )
}

export default NavigationButton
