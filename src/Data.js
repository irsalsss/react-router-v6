import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

const Data = () => {

  const pokemon = useLoaderData();
  console.log('pokemon', pokemon)
  
  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  )
}

export default Data