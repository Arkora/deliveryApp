import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap";

export const OrdersContainer = styled.div`
  margin: auto;
  margin-top: 30px;
`;

export const Item = styled.div`
  background-color: #194a50; 
  border: 1px white solid;
  margin-top: 2px;
  height:120px ;
`
export const Grid = styled.div`  
  display: grid;  
  grid-template-columns: repeat(4, 1fr);
`;


export const DeleteButton = styled.button`
  height: 20px;
  width: 20px;
`;
export const TrashIcon = styled(Trash)`
  height: 15px;
  width: 15px;
  margin: auto;
`;
export const Quantity = styled.input`
  height: 20px;
  width: 40px;
`;
export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #ffff;
`;

export const Ingrendients = styled.div`
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  float: left;
`
