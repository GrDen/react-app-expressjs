import React from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
	const { invoiceId } = useParams()
  return (
	<div>Invoice { invoiceId }</div>
  )
}
