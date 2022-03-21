import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FoodContainer = styled.div`
    width: 975px;
    height: 200px;
    border: solid;
    margin-bottom: 2px;
`
const FoodTitle = styled.h3`
    color:#ffffff ;

`
const Image = styled.img`
    width:100px;
    height:100px ;
`
 const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
  row-gap: 50px;
`
const Ingredients = styled.li`
 list-style:none ;
 align-self: auto;
`

function FoodsList(props) {
  return (
    <FoodContainer>
       <Link to={`/update${props.id}`}> <FoodTitle>{props.title}</FoodTitle> </Link>
        <Grid>
            <div>
            <Image src={props.img}></Image>
            </div>    
            <div>
                {props.ingrendients.map((item) =>{
                    return(  <Ingredients> {item} </Ingredients>)
                        
                })}                
            </div>
            <div>  
                <h3>{props.price}$</h3>             
            </div>
        </Grid>
        
    </FoodContainer>
  )
}

export default FoodsList