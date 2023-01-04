import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { deleteItem,deleteIngrendient,updateQuantity} from "../../redux/actions/Actions";
import { BsTrash } from "react-icons/bs";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState("");

    const deleteProduct = () => {
        dispatch(deleteItem(item.id));    
      };
    
      const deleteIng = (data) =>{
        dispatch(deleteIngrendient(data))
      }
    
    const changeQuantity = (e) =>{
        e.preventDefault()        
        if(quantity !== ""){
            dispatch(updateQuantity({id:item.id,quantity:quantity}))
            setQuantity("")
          }else{
            alert("Write Quantity")
          }      
      }
  return (
    <div className="grid my-3 grid-cols-4 w-full py-2 px-2 bg-lime-300">
        <div>
            <h6>{item.title}</h6>
            <div className='flex gap-2 mt-3 list-none'>
                {item.ingrendients.map((ingrendient)=>{
                    return(
                        <div className='flex flex-col  items-center'>
                            <li>{ingrendient}</li> 
                            <button className='flex justify-center items-center w-5 h-5 bg-neutral-500' onClick={() => deleteIng({id:item.id,item:ingrendient})}> -</button>
                        </div>
                    )
                })}              
                
            </div>
        </div>
        <div className='flex justify-between'>
            <form onSubmit={changeQuantity} >
                <input placeholder={item.quantity} className='w-5 h-5' onChange={(e) =>setQuantity(e.target.value)}/>
            </form>
        </div>
        <div className='flex justify-between'>
            <h6>{item.price}$</h6>
        </div>
        <div className='flex justify-between'>
            <h6>{item.subTotal}$</h6>
            <button className='w-6 h-6 bg-red-500  flex justify-center items-center text-white hover:bg-red-700' onClick={deleteProduct}>
                <BsTrash size={18} />
            </button>
        </div>
    </div>
  )
}

export default CartItem