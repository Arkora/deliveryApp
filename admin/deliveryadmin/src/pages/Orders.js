import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import AdminPanel from '../components/adminPanel/AdminPanel'
import OrdersList from '../components/orderList/OrdersList'
import { getOrders } from '../api'

const ContentSection = styled.div`
     height: 90vh;
  background-color: #3256D4;
  width: 1000px;
  position: absolute;
  margin-left: 21%;
  margin-top: 20px;
  top: 20px;
  overflow-y: scroll;
`


function Orders() {

  const [orders, setOrders] = useState([])

  const fetchOrders = async () =>{
    try {
      const {data} = await getOrders()
      setOrders(data)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchOrders()
  },[orders])

  return (
    <div>
      <AdminPanel />
      <ContentSection>
        <OrdersList orders={orders}/>
      </ContentSection>
      
    </div>
  )
}

export default Orders