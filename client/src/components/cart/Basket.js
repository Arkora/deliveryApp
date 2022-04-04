import React from "react";
import { Grid,OrdersContainer,DescriptionContainer,TrashIcon,Quantity,DeleteButton,Ingrendients, Item } from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { deleteCart } from "../../redux/actions/Actions";





function Basket() {
  const products = useSelector((state) => state.orderReducer.products);
  const total = useSelector((state) => state.orderReducer.total);
 

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteCart(id));    
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
            <Item>
              <div>
                <Grid>
                  <h3>{product.title}</h3>
                  <Quantity value={product.quantity}/>              
                  <h3>{product.price}$</h3>
                  <DeleteButton>
                    <TrashIcon onClick={() => deleteItem(product.id)} />
                  </DeleteButton>             
                </Grid>
              </div>
                <div>
                  {product.ingrendients.map((item,i) =>{
                    return(<Ingrendients><li>{item}</li> <button>-</button></Ingrendients>)
                  })}
                </div>
            </Item>
          );
        })
      )}
    </OrdersContainer>
  );
}

export default Basket;
