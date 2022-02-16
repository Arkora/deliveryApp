import React, { useState } from 'react'
import styled from 'styled-components'
import FoodForm from '../components/FoodForm'
import Food from '../components/Food'

const OrdersSection = styled.div`
    height:100hv;
    background-color: lightgray;
`


const FormSection = styled.div`
    height: 80vh;
    width: max-content;
    background-color: #3d5a80;
    display: flex;
    margin :auto;
    margin-top: 20px;
`

const PreviewSection = styled.div`
    height: 100vh;
    width: max-content;
`


function FoodUpload() {

    const pro= {id:"4",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:[],price:"6"}
    const [food, setFood] = useState({title:"Title",img:"img",ingrendients:[],price:"0"})
    // const FoodList= {title:"",img:"",ingrendients:[],price:"0"};

    return (
        <OrdersSection>
            <FormSection>
                <FoodForm setFood={setFood} ></FoodForm>
            </FormSection>
            
        </OrdersSection>
       
    )
}

export default FoodUpload
