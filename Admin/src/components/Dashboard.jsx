import React from 'react'

import Header from './Header'

const Dashboard = () => {
  return (
    <div className="flex justify-center">
        <div className="h-[100vh] w-10/12 bg-white border-b absolute right-0 border-black border-opacity-10">
            <Header/>
        </div>
    </div>
  )
}

export default Dashboard
