import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap";

export const OrdersContainer = styled.div`
  margin: auto;
  margin-top: 30px;
  color:#ffff ;
`;

export const Item = styled.div`
  background-color: #194a50; 
  border: 1px white solid;
  margin-top: 2px;
  height:21vh ;
`
export const Grid = styled.div`  
  display: grid;  
  grid-template-columns: repeat(5, 1fr);
`;


export const DeleteButton = styled.button`
  height: 30px;
  width: 30px;
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
  grid-template-columns: repeat(5, 1fr);
  color: #ffff;
`;

export const Ingrendients = styled.div`
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  float: left;
  color:black ;
`
export const OrdersList = styled.div`
  height: auto ;
  max-height:55vh ;
  overflow-y: scroll;
`

export const Footer = styled.div`
  margin-top:20px ;
  display: grid;  
  grid-template-columns: repeat(2, 1fr);
  background-color:#d8a28c ;
  height:auto ;
  height: 30vh;  
`

export const Button = styled.button`  
  background: ${props => props.primary ? "#198754 ": "#FC100D"};
  color: #ffffff;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 3px;
  cursor: pointer;
  
`;

export const TextArea = styled.textarea`
  width:40vh ;
  max-width:50vh ;
  height:10vh ;
  max-height:15vh;
`
