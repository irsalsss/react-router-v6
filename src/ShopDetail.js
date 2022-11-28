import React from 'react'
import { useParams } from 'react-router-dom'

const ShopDetail = () => {
  const { shopId } = useParams();
  return (
    <div>ShopDetail {shopId}</div>
  )
}

export default ShopDetail