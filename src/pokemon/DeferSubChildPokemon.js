import React, { Suspense } from 'react'
import { Await, Outlet, useAsyncValue, useLoaderData } from 'react-router-dom'

const DeferSubChildPokemon = () => {
  const { subChildDetail } = useLoaderData();
  return (
    <div>
      <h1 className='text-lg font-bold'>Sub child</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={subChildDetail}>
          <SubChildPokemon />
        </Await>
      </Suspense>
      <Outlet />
    </div>
  )
}

const SubChildPokemon = () => {
  const subChildDetail = useAsyncValue()

  return (
    <div>result: {JSON.stringify(subChildDetail).slice(0, 100)}</div>
  )
}

export default DeferSubChildPokemon