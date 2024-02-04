interface SettingsItemProps {
  title: string
  desc?: string 
  children: React.ReactNode
}

const SettingsItem: React.FC<SettingsItemProps> = ({title, desc = "", children}) => {
  return (
    <div className="flex flex-col content-center mb-6 pl-4 relative">
      <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
      <div className="mr-2 text-xl font-medium">{title}</div>
      <div className="w-full flex flex-col pl-1">
        <div className="mr-2 text-md font-light text-gray-700">{desc}</div>
        {children}
      </div>
    </div>
  )
}

export default SettingsItem
