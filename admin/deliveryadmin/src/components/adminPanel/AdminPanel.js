import React from 'react'
import { SideBar,LinksSection,ListOfLinks,Links } from './style'
import { Link } from 'react-router-dom'



function AdminPanel() {
    return (
        <SideBar>
            <LinksSection>
               <ListOfLinks>  <Link to="/"> <Links>FOODS</Links> </Link> </ListOfLinks>
               <ListOfLinks>  <Link to="/orders"><Links>ORDERS</Links></Link> </ListOfLinks>
               <ListOfLinks>  <Link to="/upload"><Links>UPLOAD FORM</Links></Link> </ListOfLinks>
            </LinksSection>
        </SideBar>
    )
}

export default AdminPanel
