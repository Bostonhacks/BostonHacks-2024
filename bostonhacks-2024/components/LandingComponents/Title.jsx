import React from 'react'

const Title = ({children}) => {
  return (
    <div className="relative flex items-center justify-center w-full my-20">
        <div className="flex-grow border-t-4 border-white mx-4" style={{ maxWidth: '100px' }}></div>
        <span className="mx-8 text-5xl lg:text-6xl font-ppSupplyMono tracking-wide text-white text-center">
        { children }
        </span>
        <div className="flex-grow border-t-4 border-white mx-4" style={{ maxWidth: '100px' }}></div>
    </div>
  )
}

export default Title