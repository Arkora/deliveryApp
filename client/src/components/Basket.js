import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Trash } from "@styled-icons/bootstrap";
import { productReducer } from "../redux/reducers/CartReducer";
import { deleteCart } from "../redux/actions/Actions";


const OrdersContainer = styled.div`
    
    margin: auto;
    margin-top: 30px;
`
const OrderItem = styled.div`
   background-color: #194a50;
height: 80px;
width: 100%;
display: grid;
border: 1px white solid;
margin-top: 2px;
grid-template-columns:repeat(4,1fr);
`
const FoodTitle = styled.h3`

`
const DeleteButton = styled.button`
    height: 20px;
    width: 20px;
    
`
const TrashIcon = styled(Trash)`
    height: 15px;
    width: 15px;
    margin:auto;
`
const Quantity = styled.input`
    height: 20px;
    width: 40px;

`
const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(4,1fr);
    color: #ffff;
    
`

const Price = styled.h3`
    
`

function Basket() {

    const cart = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteCart(id));
    };

    

    return (
    //    <OrdersContainer>
    //        <DescriptionContainer> 
    //         <h3>Product</h3>
    //         <h3>Quantity</h3>
    //         <h3>Price</h3> 
    //         <></>
    //        </DescriptionContainer>
    //        <OrderItem>
    //         <FoodTitle>Fish free</FoodTitle>
    //         <Quantity/>
    //         <Price>6$</Price>
    //         <DeleteButton onClick={deleteItem(1)}><TrashIcon/></DeleteButton>

    //        </OrderItem>

    //        <OrderItem>
    //         <FoodTitle>Fish free</FoodTitle>
    //         <Quantity/>
    //         <Price>6$</Price>
    //         <DeleteButton><TrashIcon/></DeleteButton>
    //        </OrderItem>
           
    //    </OrdersContainer>

    <OrdersContainer>
    <DescriptionContainer> 
     <h3>Product</h3>
     <h3>Quantity</h3>
     <h3>Price</h3> 
     <></>
    </DescriptionContainer>
    
        {cart.map(car=>{
            return(<OrderItem>
                <FoodTitle>{car.products.title}</FoodTitle>
                <Quantity/>{car.quantity}
                <Price>6$</Price>
                <DeleteButton><TrashIcon/></DeleteButton>
                </OrderItem>)
                
        })}
     

    

</OrdersContainer>

    )
}

export default Basket
