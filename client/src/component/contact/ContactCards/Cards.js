import React from 'react'

export const Cards = ({ data }) => {
  return (
    <div>
      <li>{data.address}</li>
      <li>{data.phone}</li>
      <li>{data.email}</li>
    </div>
  )
}
