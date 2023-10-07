import React from 'react'
import '../Sidebar/sidebar.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { SeparateSidebar } from '../Sidebar/SeparateSidebar'

export const Layout = ({children}) => {
  return (
    <div  className='content-layout'>
<SeparateSidebar />
      <Sidebar />
        
        <div className='children-layout'>
            {children}
        </div>
    </div>
  )
}
