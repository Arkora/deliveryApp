import React, { useState } from "react";
import { Item,Grid,TitleDiv,Image,IncreaseButton,DecreaseButton,Title,Ingrendients,QuantityInput,CartIcon,CartButton } from "./styles";
import { addCart } from "../../redux/actions/Actions";
import { useDispatch } from "react-redux";





export const FoodItem = ({id,title,price,ingrendients,img}) =>{

    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    
const increase = (e) =>{
    setQuantity(quantity+1);
}

const decrease = (e) =>{
        if(quantity>0)
        setQuantity(quantity-1);
    
        
}

const pushOrder = (e) =>{
    
    dispatch(addCart({id:id,title:title,price:price,ingrendients:ingrendients,quantity:quantity}));
    setQuantity(0);
    e.preventDefault();
}
     
    return(
        <Item>

                <TitleDiv > 
                <Title />  {title}
                </TitleDiv>

            <Grid>
                
                <div>
                <Image src={img}/>
                        
                </div>   
                <div>
                    
                    {ingrendients.map(item =>{
                       return  <Ingrendients> {item} </Ingrendients>
                    })}
                    
                </div>
                <div>
                    <IncreaseButton onClick={increase} > + </IncreaseButton>
                    <DecreaseButton onClick={decrease} > - </DecreaseButton>
                    <QuantityInput  value={quantity}  onChange={(e) =>setQuantity(e.target.value)} />                   
                    <CartButton onClick={pushOrder} > <CartIcon/>  </CartButton>
                    <h3>{price}$</h3>
                </div>

            </Grid>
       </Item>
    );
}

export default FoodItem;