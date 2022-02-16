import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { useDispatch,useSelector } from "react-redux";
import { removeIngrendient } from '../redux/actions/Actions';

export const Item = styled.div`
 
  background-color: #194a50;
  margin-top: 5px;
  color: #ffff;
`;

export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  
  row-gap: 50px;
`

export const ItemCenter = styled.div`
    
`
export const Title = styled.h4`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
`



export const ImageDiv = styled.div`
    
`

export const TitleDiv = styled.div`
   font-weight: 600;
`
export const IngrendientsDiv = styled.div`
    display: inline-block;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
`

export const Ingrendients = styled.li`
    list-style: none;    
    
`

const DeleteButton = styled.button`

`

const IngrendientsSection = styled.div`

`

const Price = styled.h3`

`







function Food(props) {

    

    const products = useSelector((state)=> state.ingrendientsReducer.ingrendients)
      
    const dispatch = useDispatch();

  
        useEffect(()=> {
            console.log(products)
        },[products,dispatch]);
    
    
    const IngrendientsRendering = ({ingrendients}) =>{
        
        if (ingrendients.length === 0 || ingrendients === undefined){           

            

        return(<h4>No Ingredients</h4>)

        }


        return(
            ingrendients.map((item,i ) => {
                
                return <IngrendientsSection> <Ingrendients key={i} > {item} </Ingrendients><DeleteButton onClick={() =>dispatch(removeIngrendient(i))}>-</DeleteButton></IngrendientsSection>
    
                
                    
                
            })
        )
    }
    
    

        return (
            <Item>
    
                    <TitleDiv > 
                    <Title />  {props.title}
                    </TitleDiv>
    
                <Grid>
                    
                    <ImageDiv>
                    <Image src={props.img}/>
                            
                    </ImageDiv>   
                    <IngrendientsDiv>
                        
                        <IngrendientsRendering ingrendients={products }  />
                        
                        
                        
                       
                        
                    </IngrendientsDiv>
                    <Price>{props.price}$</Price>
    
                </Grid>
           </Item>
        )
}
    


export default Food
