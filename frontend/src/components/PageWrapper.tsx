import { ReactNode } from "react"

interface PageWrapperProps {
  children: ReactNode
  className?: string 
}

const PageWrapper: React.FC<PageWrapperProps> = ({children, className = ""}) => {
  return (
    <div className={`flex flex-col w-full h-full p-12 items-center ${className}`}>
      {children}
    </div>
  )
}
export default PageWrapper
