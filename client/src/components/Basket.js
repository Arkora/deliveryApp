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
`;
const OrderItem = styled.div`
  background-color: #194a50;
  height: 80px;
  width: 100%;
  display: grid;
  border: 1px white solid;
  margin-top: 2px;
  grid-template-columns: repeat(4, 1fr);
`;
const FoodTitle = styled.h3``;
const DeleteButton = styled.button`
  height: 20px;
  width: 20px;
`;
const TrashIcon = styled(Trash)`
  height: 15px;
  width: 15px;
  margin: auto;
`;
const Quantity = styled.input`
  height: 20px;
  width: 40px;
`;
const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #ffff;
`;

const Price = styled.h3``;

function Basket() {
  const products = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteCart());
  };

  

  return (
    <OrdersContainer>
      <DescriptionContainer>
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <></>
      </DescriptionContainer>
      { products === 0 ? (
        <div>
          <h4>No Products</h4>
        </div>
      ) : (
        products.map((product, i) => {
          return (
            <OrderItem>
              <FoodTitle>{product.title}</FoodTitle>
              <Quantity />
              {product.quantity}
              <Price>6$</Price>
              <DeleteButton>
                <TrashIcon onClick={() => deleteItem()} />
              </DeleteButton>
            </OrderItem>
          );
        })
      )}
    </OrdersContainer>
  );
}

export default Basket;
