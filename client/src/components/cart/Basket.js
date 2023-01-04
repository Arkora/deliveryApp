import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { createOrder } from "../../api";
import {deleteCart } from "../../redux/actions/Actions";
import CartItem from "./CartItem";





function Basket() {
  const products = useSelector((state) => state.orderReducer.products);
  const total = useSelector((state) => state.orderReducer.total);
  const [order,setOrder] = useState({products:products,message:"",total:total})

  const dispatch = useDispatch();

  const handleOrder = async () =>{  
        
      // try {
      //   const {data} = await createOrder(order)
      //   alert(data)
      //   dispatch(deleteCart())
      //   setOrder({})
        
      // } catch (error) {
      //   console.log(error)
      // }
      console.log(order)
  }
 
  
  

  return (
    // <OrdersContainer>
    //   <DescriptionContainer>
    //     <h3>Product</h3>
    //     <h3>Quantity</h3>
    //     <h3>Price</h3>
    //     <h3>SubTotal</h3>
    //     <></>
    //   </DescriptionContainer>
    //   <OrdersList>
    //     { products === 0 ? (
    //       <div>
    //         <h4>No Products</h4>
    //       </div>
    //     ) : (
    //       products.map((product, i) => {
    //         return (
    //           <Item>
    //             <div>
    //               <Grid>
    //                 <h3>{product.title}</h3>
    //                 <Quantity placeholder={product.quantity}  onChange={(e) =>{setQuantity(e.target.value)}} onKeyDown={(e) => {changeQuantity({eve:e,id:product.id})}}/>              
    //                 <h3>{product.price}$</h3>
    //                 <h3>{product.subTotal}$</h3>
    //                 <DeleteButton>
    //                   <BsTrash size={10} onClick={(e) => deleteProduct(product.id)} />
    //                 </DeleteButton>             
    //               </Grid>
    //             </div>
    //               <div>
    //                 {product.ingrendients.map((item,i) =>{
    //                   return(<Ingrendients><li>{item}</li> <button onClick={(e) =>{deleteIng({id:product.id,item:item})}}>-</button></Ingrendients>)
    //                 })}
    //               </div>
    //           </Item>
    //         );
    //       })
    //     )}
    //   </OrdersList>
    //   {products.length >=1 ? (  
    //   <Footer>
    //     <div>
    //       <TextArea placeholder="Write comments" value={order.message} onChange={(e) =>{setOrder({...order,message:e.target.value})}} />
    //     </div>
    //     <div>          
    //     </div>
    //     <div>
    //       <Button primary onClick={handleOrder}>Order</Button>
    //       <Button onClick={(e) =>{dispatch(deleteCart())}}>Clear</Button>
    //     </div>
    //     <div>
    //       <h3>Total:{total}$</h3>
    //     </div>
    //   </Footer>) : (<h3>Add some Foods to Order...</h3>)}
    // </OrdersContainer>
    <div>
      <div className="w-full ">
        <div className="grid text-white grid-cols-4">
          <h5>Product</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
          <h5>SubTotal</h5>          
        </div>
        <div className="px-2">
          {products.map((item)=>{
            return <CartItem item={item} />
          })}                    
        </div>
        <div className={products.length?"h-56 w-full px-2 ":'hidden'}>
          <div  className="bg-rose-500 h-48 p-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-full mt-2 ">
                  <textarea className="w-full resize-none h-full" onChange={(e)=>setOrder({...order,message:e.target.value})} />
                </div>
                <div className="w-full flex justify-center items-center">
                    <div>
                      <h3>Total: {total}$</h3>
                      <div className="flex gap-2 bg-white p-4 rounded-xl mt-2">
                        <button className="bg-green-500 text-white rounded-md p-2" onClick={handleOrder}>Purchase Order</button>
                        <button className="bg-red-500 text-white rounded-md p-2" onClick={()=>dispatch(deleteCart())}>Clear Cart</button>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Basket;
