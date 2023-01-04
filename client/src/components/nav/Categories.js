import React from "react";
import Cake from '../../assets/cake.svg'
import Coffee from '../../assets/coffeecup.svg'
import Pizza from '../../assets/pizza.svg'
import Soup from '../../assets/soup.svg'
import Steak from '../../assets/steak.svg'






const Categories = ({setCategory}) =>{
    
    
    
    return(        
        <div className="flex gap-10 justify-center " >
            <div className="w-16 h-16 cursor-pointer bg-white rounded-full flex justify-center items-center" onClick={(e) =>setCategory("meat")}>
                <img src={Steak} className="w-1/2 h-1/2"  />
            </div>
            <div className="w-16 h-16 cursor-pointer bg-white rounded-full flex justify-center items-center" onClick={(e) =>setCategory("pizza")}>
                <img src={Pizza} className="w-1/2 h-1/2"  />
            </div>
            <div className="w-16 h-16 cursor-pointer bg-white rounded-full flex justify-center items-center" onClick={(e) =>setCategory("soup")}>
                <img src={Soup} className="w-1/2 h-1/2"  />
            </div>
            <div className="w-16 h-16 cursor-pointer bg-white rounded-full flex justify-center items-center" onClick={(e) =>setCategory("coffee")}>
                <img src={Coffee} className="w-1/2 h-1/2"  />
            </div>
            <div className="w-16 h-16 cursor-pointer bg-white rounded-full flex justify-center items-center" onClick={(e) =>setCategory("dessert")}>
                <img src={Cake} className="w-1/2 h-1/2"  />
            </div>
            
        </div>
    )
}

export default Categories;