import React, { useState } from "react";
import styled from "styled-components";
import Food from "./Food";
import { addIngrendient } from "../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Form = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  margin-top: 10vh;
`;

const InputBox = styled.input`
  height: 40px;
  width: max-content;
`;
const UploadButton = styled.button`
  height: 40px;
  width: max-content;
`;
const AddButton = styled.button`
  height: 20px;
  width: min-content;
`;

const Col2 = styled.div``;

const PreviewSection = styled.div`
  height: max-content;
  width: max-content;
`;

function FoodForm() {
  const dispatch = useDispatch();
  const ingrendients = useSelector(
    (state) => state.ingrendientsReducer.ingrendients
  );

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [ingrendient, setIngrendient] = useState("");
  const [category,setCategory] = useState("")
  const [price, setPrice] = useState("");

  const product = {
    title: title,
    img: imgUrl,
    ingrendients: ingrendients,
    price: price,
    category:category,
  };

  const pushIngrendient = (e) => {
    dispatch(addIngrendient(ingrendient));
     setIngrendient("");
    
  };

  const setFood = (product) =>{
    //   if( (product.ingrendients.length === 0) ||( product.category || product.title || product.price || product.img)  === "" ){
    //     alert("Fill all textboxes")
    //   }
    //   else{
    //       alert("OK")
    //   }

    axios.post("http://localhost:8000/uploadFood" ,{product})
    
        
  }


  console.log(product)

  return (
    <Form>
      <h1>Upload food</h1>
      <InputBox
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></InputBox>

      <InputBox
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></InputBox>

      <InputBox
        placeholder="Image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      ></InputBox>

       

      <Col2>
        <InputBox
          placeholder="Ingredients"
          value={ingrendient}
          onChange={(e) => setIngrendient(e.target.value)}
          
        ></InputBox>

        <AddButton onClick={pushIngrendient}>Add</AddButton>
      </Col2>
      <select className="category-select" onChange={(e)=>{
           setCategory(e.target.value)
       }} >
            <option value="">Select Category</option>
            <option value="meat">Meat</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="coffee">Coffee</option>
       </select>
      <UploadButton onClick={(e) => setFood(product)}>Upload it</UploadButton>

      <PreviewSection>
        <Food
          title={product.title}
          img={product.img}
          ingrendients={ingrendients}
          price={product.price}
          category={product.category}
        />
      </PreviewSection>
    </Form>
  );
}

export default FoodForm;