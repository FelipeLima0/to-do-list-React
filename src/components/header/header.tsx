import React from 'react'
import logoHeader from '../../assets/logo.svg'

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-700 h-[12.5rem]">
      <img src={logoHeader} alt="lodo header" className="w-[7.875rem] h-12" />
    </div>
  )
}
