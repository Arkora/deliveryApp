import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { createOrder } from "../../api";
import {deleteCart } from "../../redux/actions/Actions";
import CartItem from "./CartItem";
import Alert from "../Alert";





function Basket() {
  const products = useSelector((state) => state.orderReducer.products);
  const total = useSelector((state) => state.orderReducer.total);
  const [order,setOrder] = useState({products:products,message:"",total:total})
  const [alert, setAlert] = useState({ res: "", err: "" })

  const dispatch = useDispatch();

  const handleOrder = async () =>{  
        
      try {
        const {data} = await createOrder(order)
        dispatch(deleteCart())
        setOrder({})
        setAlert({...alert,res:data})        
      } catch (error) {
        setAlert({...alert,err:error.response.data})        
      }
  } 

  return (    
    <div>
      <div className="w-full ">
        <div className="grid text-white grid-cols-4">
          <h5>Product</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
          <h5>SubTotal</h5>          
        </div>
        <div className={alert.res || alert.err?"flex justify-center items-center mt-10" :'hidden'}>
          <Alert  alert={alert} setAlert={setAlert}/>
        </div>
        <div className="px-2">
          {products.map((item)=>{
            return <CartItem item={item} />
          })}                    
        </div>
        <div className={products.length?"h-56 w-full px-2 ":'hidden'}>
          <div  className="bg-slate-800 h-48 p-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-full mt-2 ">
                  <textarea className="w-full resize-none h-full" placeholder="Write your comments here" onChange={(e)=>setOrder({...order,message:e.target.value})} />
                </div>
                <div className="w-full flex justify-center items-center">
                    <div>
                      <h3 className="text-white">Total: {total}$</h3>
                      <div className="flex gap-2 bg-white p-4 rounded-xl mt-2">
                        <button className="bg-green-500 hover:bg-green-700 text-white rounded-md p-2" onClick={handleOrder}>Purchase Order</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white rounded-md p-2" onClick={()=>dispatch(deleteCart())}>Clear Cart</button>
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
