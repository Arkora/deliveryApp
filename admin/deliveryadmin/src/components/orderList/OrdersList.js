import React from 'react'
import Accordion from './accordion/Accordion'

const OrdersList = ({orders}) => {
  return (
    <div>
    {orders.length ? (orders.map(item =>{
        return(
       <Accordion products={item.products} total={item.total} message={item.message} time={item.date} id={item._id} />
        )
       
    })) 
    
    : (<h3>No Orders</h3>)}

    </div>
  )
}

export default OrdersList