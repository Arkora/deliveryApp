import React, {useState,useEffect} from 'react';
import {BsHouse,BsBasket} from 'react-icons/bs'
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";




export const Header = ({setCategory}) =>{



    const products = useSelector((state) => state.orderReducer.products);
    const [cart, setCart] = useState([])
    
    useEffect(() =>{
        setCart(products)
    },[products,cart]);
  

    return(        
        <div className="w-full grid grid-cols-3 mb-10 h-8">
                <Link to="/" > 
                    <div className="w-12 bg-[#d8a28c] h-12 rounded-sm flex justify-center items-center"  onClick={(e) =>setCategory("")}> <BsHouse size={25} /> </div> 
                </Link>  
                
                <div className="flex justify-center w-full" >
                </div>
                <Link className="flex justify-end" to="/orders" >
                 <div className="w-12  bg-[#d8a28c] h-12 rounded-sm flex justify-center items-center">   <BsBasket size={25}  /> </div>
                </Link>
                
        </div>
        
    );
}

export default Header