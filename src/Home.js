import React from 'react'
import { NavLink, Outlet, useNavigation } from 'react-router-dom'

const Home = () => {

  const activeStyle = {
    textDecoration: "underline",
  };

  const navigate = useNavigation();

  return (
    <div className='p-[24px]'>
      <h1 className='text-lg font-bold'>Home</h1>
      <div className='flex justify-center items-center gap-[24px] mb-[24px]'>

        <NavLink
          to="about"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className={({ isActive }) => `${isActive && 'text-blue-700'} cursor-pointer`}
        >
          About
        </NavLink>
      
        <NavLink
          to="topics"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className={({ isActive }) => `${isActive && 'text-red-700'} cursor-pointer`}
        >
          Topics
        </NavLink>
        <NavLink
          to="data"
          className={({ isPending }) => `${isPending && 'text-red-700'} cursor-pointer`}
        >
          Data
        </NavLink>
        <NavLink
          to="pokemon/1/2"
        >
          Pokemon
        </NavLink>
        <NavLink
          to="defer/1/2"
        >
          Defer
        </NavLink>
      </div>
      <Outlet />

      {navigate.state === 'loading' && (
        <div className='flex justify-center items-center'>Loading...</div>
      )}

    </div>
  )
}

export default Home