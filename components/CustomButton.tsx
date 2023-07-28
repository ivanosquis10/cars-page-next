import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, icon }: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {icon && (
        <div className='relative w-6 h-6'>
          <Image src={`/${icon}.svg`} alt={`Icon of a ${icon}`} className='object-contain' fill />
        </div>
      )}
    </button>
  )
}

export default CustomButton