import styled from 'styled-components'

export const FoodContainer = styled.div`
    width: 975px;
    height: 200px;
    border: solid;
    margin-bottom: 2px;
`
export const FoodTitle = styled.h3`
    color:#ffffff ;

`
export const Image = styled.img`
    width:100px;
    height:100px ;
`
export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
  row-gap: 50px;
`
export const Ingrendients = styled.li`
 list-style:none ;
 align-self: auto;
`