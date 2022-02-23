import React, { } from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { removeIngrendient } from "../redux/actions/Actions";

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
`;

export const ItemCenter = styled.div``;
export const Title = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ImageDiv = styled.div``;

export const TitleDiv = styled.div`
  font-weight: 600;
`;
export const IngrendientsDiv = styled.div`
  display: inline-block;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Ingrendients = styled.li`
  list-style: none;
`;

const DeleteButton = styled.button``;

const IngrendientsSection = styled.div``;

const Price = styled.h3``;

function Food(props) {
  const dispatch = useDispatch();

  const deleteIngrendient = (id) => {
    dispatch(removeIngrendient(id));
  };




  return (
    <Item>
      <TitleDiv>
        <Title /> {props.title}
      </TitleDiv>

      <Grid>
        <ImageDiv>
          <Image src={props.img} />
          <h5>{props.category}</h5>
        </ImageDiv>
        
            
        
        <IngrendientsDiv>
          {props.ingrendients.length === 0 ? 
            <div>
              <h4>No Ingredients</h4>
            </div>
           : 
            props.ingrendients.map((item, i) => {
              return (
                <IngrendientsSection>
                  <Ingrendients key={i}>{item}</Ingrendients>
                  <DeleteButton
                    onClick={() => {
                      deleteIngrendient(i);
                    }}
                  >-</DeleteButton>
                </IngrendientsSection>
              );
            })
          }
        </IngrendientsDiv>
        <Price>{props.price}$</Price>
      </Grid>
    </Item>
  );
}

export default Food;