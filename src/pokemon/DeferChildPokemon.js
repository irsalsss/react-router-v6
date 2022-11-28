import React, { Suspense } from 'react'
import { Await, Outlet, useLoaderData } from 'react-router-dom'

const DeferChildPokemon = () => {
  const { childDetail } = useLoaderData();

  return (
    <div>
      <h1 className='text-lg font-bold'>Child</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={childDetail}
          errorElement={
            <div className='text-red-700'>Something went wrong</div>
          }
        >
          {(resolvedDetail) => (
            <div>result: {JSON.stringify(resolvedDetail).slice(0, 100)}</div>
          )}
        </Await>
      </Suspense>
      <Outlet />
    </div>
  )
}

export default DeferChildPokemon