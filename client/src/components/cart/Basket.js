import React,{useState,useEffect} from "react";
import { Grid,OrdersContainer,DescriptionContainer,TrashIcon,Quantity,DeleteButton,Ingrendients,Item,OrdersList,Footer,Button, TextArea } from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { createOrder } from "../../api";
import { deleteItem,deleteIngrendient,updateQuantity,deleteCart } from "../../redux/actions/Actions";





function Basket() {
  const products = useSelector((state) => state.orderReducer.products);
  const total = useSelector((state) => state.orderReducer.total);
  const [quantity, setQuantity] = useState("");  
  const [order,setOrder] = useState({products:products,message:"",total:total})

  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(deleteItem(id));    
  };

  const deleteIng = (data) =>{
    dispatch(deleteIngrendient(data))
  }

  const changeQuantity = (data) =>{
    if(data.eve.keyCode === 13){
      if(quantity !== ""){
        dispatch(updateQuantity({id:data.id,quantity:quantity}))
        setQuantity("")
      }else{
        alert("Write Quantity")
      }      
    }    
  }

  const handleOrder = async () =>{  
        
      try {
        const {data} = await createOrder(order)
        alert(data)
        dispatch(deleteCart())
        setOrder({})
        
      } catch (error) {
        console.log(error)
      }
  }
 
  
  

  return (
    <OrdersContainer>
      <DescriptionContainer>
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>SubTotal</h3>
        <></>
      </DescriptionContainer>
      <OrdersList>
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
                    <Quantity placeholder={product.quantity}  onChange={(e) =>{setQuantity(e.target.value)}} onKeyDown={(e) => {changeQuantity({eve:e,id:product.id})}}/>              
                    <h3>{product.price}$</h3>
                    <h3>{product.subTotal}$</h3>
                    <DeleteButton>
                      <TrashIcon onClick={(e) => deleteProduct(product.id)} />
                    </DeleteButton>             
                  </Grid>
                </div>
                  <div>
                    {product.ingrendients.map((item,i) =>{
                      return(<Ingrendients><li>{item}</li> <button onClick={(e) =>{deleteIng({id:product.id,item:item})}}>-</button></Ingrendients>)
                    })}
                  </div>
              </Item>
            );
          })
        )}
      </OrdersList>
      {products.length >=1 ? (  
      <Footer>
        <div>
          <TextArea placeholder="Write comments" value={order.message} onChange={(e) =>{setOrder({...order,message:e.target.value})}} />
        </div>
        <div>          
        </div>
        <div>
          <Button primary onClick={handleOrder}>Order</Button>
          <Button onClick={(e) =>{dispatch(deleteCart())}}>Clear</Button>
        </div>
        <div>
          <h3>Total:{total}$</h3>
        </div>
      </Footer>) : (<h3>Add some Foods to Order...</h3>)}
    </OrdersContainer>
  );
}

export default Basket;
