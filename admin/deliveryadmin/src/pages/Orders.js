import React from 'react'
import styled from 'styled-components'
import AdminPanel from '../components/adminPanel/AdminPanel'

const ContentSection = styled.div`
    height: 80vh;
    width: max-content;
    background-color: #3d5a80;
    display: flex;
    margin :auto;
    margin-top: 20px;
`


function Orders() {
  return (
    <div>
      <AdminPanel />
      <ContentSection>
      <h1>Orders</h1>
      </ContentSection>
      
    </div>
  )
}

export default Orders