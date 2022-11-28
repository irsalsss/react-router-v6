import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SubChildPokemon = () => {
  const sub = useLoaderData();
  console.log('sub', sub)
  return (
    <div className='mt-[40px]'>
      <h1 className='text-lg font-bold'>SubChild Pokemon</h1>
      <div>Hasil sub child pokemon: {JSON.stringify(sub).slice(0, 100)}</div>
    </div>
  )
}

export default SubChildPokemon