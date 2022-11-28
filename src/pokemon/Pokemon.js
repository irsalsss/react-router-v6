import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const Pokemon = () => {
  const list = useLoaderData();
  return (
    <div>
      <h1 className='text-lg font-bold'>Parent</h1>
      <div>result: {JSON.stringify(list).slice(0, 100)}</div>
      <Outlet />
    </div>
  )
}

export default Pokemon