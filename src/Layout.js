import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
	 <div>
		 <h1>Welcome!</h1>
		 <Outlet />
	 </div>
  )
}
