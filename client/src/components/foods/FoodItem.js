import React, { useState } from "react";
import { addCart } from "../../redux/actions/Actions";
import { useDispatch } from "react-redux";
import {BsCart2} from 'react-icons/bs'





export const FoodItem = ({id,title,price,ingrendients,img}) =>{

    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    
const increase = () =>{
    setQuantity(quantity+1);
}

const decrease = () =>{
        if(quantity>0)
        setQuantity(quantity-1);
    
        
}

const pushOrder = (e) =>{
    
    dispatch(addCart({id:id,title:title,price:price,ingrendients:ingrendients,quantity:quantity}));    
    setQuantity(0);
    e.preventDefault();
}
     
    return(
    
    <div className="w-full h-44 bg-emerald-900  overflow-y-auto no-scrollbar p-2 rounded-md text-white my-4">
        <h3>{title}</h3>
        <div className="grid grid-cols-4 mt-2 gap-2  h-3/4 ">
            <div className="">
                <img src={img}  className="w-full h-1/2"/>
            </div>
            <div className="flex justify-center ">
                <div className="" >
                    {ingrendients.map(item =>{
                        return <li>{item}</li>
                    })}
                </div>
            </div>
            <div className=" flex w-full justify-end">
                <div className=" grid  grid-cols-4">
                    <button className="w-6 h-6 bg-red-500" onClick={decrease}>-</button>
                    <input className="w-6 h-6 text-black "   value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button className="w-6 h-6 bg-green-500" onClick={increase}>+</button>                    
                    <div className="bg-teal-600 w-8 h-8 rounded-sm flex justify-center cursor-pointer items-center" onClick={pushOrder}>
                        <BsCart2 />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <h3>{price}$</h3>
            </div>
        </div>
    </div>
    );
}

export default FoodItem;