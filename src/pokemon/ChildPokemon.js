import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const ChildPokemon = () => {
  const child = useLoaderData();
  return (
    <div className='mt-[40px]'>
      <h1 className='text-lg font-bold'>Child Pokemon</h1>
      <div>Hasil child pokemon: {JSON.stringify(child).slice(0, 100)}</div>
      <Outlet />
    </div>
  )
}

export default ChildPokemon