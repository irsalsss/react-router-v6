import React, { Suspense } from 'react'
import { Await, Outlet, useLoaderData } from 'react-router-dom'

const DeferPokemon = () => {
  const { list } = useLoaderData();

  return (
    <div>
      <h1 className='text-lg font-bold'>Parent</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Await manages the deferred data (promise) */}
        <Await resolve={list}>
          {/* this calls back when the data is resolved */}
          {(resolvedList) => (
            <div>result: {JSON.stringify(resolvedList).slice(0, 100)}</div>
          )}
        </Await>
      </Suspense>
      <Outlet />
    </div>
  )
}

export default DeferPokemon