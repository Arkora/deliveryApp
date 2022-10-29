import React, { } from "react";
import {Item,TitleDiv,Title,Image,ImageDiv,Ingrendients,IngrendientsSection,IngrendientsDiv,Grid,DeleteButton,Price} from './style'




function Preview({title,img,price,ingrendients,category,removeIngrendient}) {

  return (
    <Item>
      <TitleDiv>
        <Title /> {title}
      </TitleDiv>

      <Grid>
        <ImageDiv>
          <Image src={img} />
          <h5>{category}</h5>
        </ImageDiv>
        
            
        
        <IngrendientsDiv>
          {ingrendients.length === 0 ? 
            <div>
              <h4>No Ingredients</h4>
            </div>
           : 
            ingrendients.map((item, i) => {
              return (
                <IngrendientsSection>
                  <Ingrendients key={i}>{item}</Ingrendients>
                  <DeleteButton onClick={(e) => removeIngrendient(item)} >-</DeleteButton>
                </IngrendientsSection>
              );
            })
          }
        </IngrendientsDiv>
        <Price>{price}$</Price>
      </Grid>
    </Item>
  );
}

export default Preview;