import React from 'react'
import { Outlet, useMatch, useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const match1 = useMatch('/shop/1')
  const match2 = useMatch('/shop/2')

  const onNavigate = (to) => {
    navigate(to)
  }

  return (
    <div className='p-[24px]'>
      <h1 className='text-lg font-bold'>Shop</h1>
      <div className='flex justify-center items-center gap-[24px]'>
        <div
          className={`cursor-pointer ${Boolean(match1) ? 'text-blue-700 font-bold underline' : 'text-black' }`}
          onClick={onNavigate.bind(null, '1')}
        >
          1
        </div>
        <div
          className={`cursor-pointer ${Boolean(match2) ? 'text-blue-700 font-bold underline' : 'text-black' }`}
          onClick={onNavigate.bind(null, '2')}
        >
          2
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Shop