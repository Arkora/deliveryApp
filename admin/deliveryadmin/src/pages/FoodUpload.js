import React from 'react'
import styled from 'styled-components'
import AdminPanel from '../components/adminPanel/AdminPanel';
import Form from '../components/form/Form';



const FormSection = styled.div`
    height: 80vh;
    width: max-content;
    background-color: #3d5a80;
    display: flex;
    margin :auto;
    margin-top: 20px;
    `

function FoodUpload() {
    
    
  

    return (
        <div>
        <AdminPanel />
            <FormSection>
                <Form />
            </FormSection>
            
        
        </div>
    )
}

export default FoodUpload
