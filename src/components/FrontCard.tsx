interface FrontCardProps{
    isReverse:boolean;
}
const FrontCard = ({isReverse}: FrontCardProps) => {
  return (
   
   <div className={`bg-gray-300 w-200 h-100 flex ${
    isReverse ? 'flex-row-reverse' : ''
  }`}>
      <div className="flex items-center pl-5 w-70">

      </div>

      
    </div>
  )
}

export default FrontCard
