import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Invoices() {
  return (
	<div>
		<h2>Invoices</h2>
		<div>
		 	<Outlet />
		</div>
	</div>
  )
}
