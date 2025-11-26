import React from 'react'

const loading = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-17 h-17 mr-4">
        <div className="absolute inset-0 rounded-full border-5 border-gray-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-5 border-transparent border-t-blue-500 animate-spin"></div>
      </div>
      <div className="mt-4  text-[20px] font-[800] text-blue-500" style={{direction:"ltr"}}>
        Loading ...
      </div>
    </div>
  )
}

export default loading