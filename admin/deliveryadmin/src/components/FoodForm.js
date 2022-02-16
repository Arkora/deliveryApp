import React, { useState} from 'react'
import styled from 'styled-components'
import Food from './Food'
import { addIngrendient } from '../redux/actions/Actions'
import { useDispatch,useSelector } from "react-redux";


const Form = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 50%;
    margin-top: 10vh;
`

const InputBox = styled.input`
    height: 40px;
    width: max-content;
`
const UploadButton = styled.button`
    height: 40px;
    width: max-content;

`
const AddButton = styled.button`
    height:  20px;
    width: min-content;
`

const Col2 = styled.div`

`



const PreviewSection = styled.div`
    height: max-content;
    width: max-content;
`


function FoodForm({setFood}) {

    
    const dispatch = useDispatch();
    const test = useSelector((state)=> state.ingrendientsReducer.ingrendients)

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [ingrendient, setIngrendient] = useState("")
    const [ingrendients, setIngrendients] = useState([]);
    const [price, setPrice] = useState("");

    const product = {
        title:title,
        img:imgUrl,
        ingrendients:ingrendients,
        price:price
    }

    
    
    
    // const addIngrendient = (item) =>{
    //     if(item != null){
    //         setIngrendients(ingrendient.concat(item))
    //     }
    //     else{
    //         alert("Please type ingrendient");
    //     }
    // }

    const removeItem = (index) =>{
        
        let clone =[...ingrendients];
        clone.slice(index,1);
        setIngrendients(clone);      
        
    } 

    const pushIngrendient = (e) => {
        dispatch(addIngrendient(ingrendient));
    }

    console.log(test);

    return (

        
        
        <Form>
                <h1>Upload food</h1>
                <InputBox placeholder ="Title"  value={title} onChange={(e) => setTitle(e.target.value)}></InputBox>
                

                
                <InputBox placeholder ="Price" value={price} onChange={(e) => setPrice(e.target.value)}></InputBox>
                
                <InputBox placeholder = "Image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}></InputBox>
                
                
                <Col2>
                <InputBox placeholder = "Ingredients" value={ingrendient} onChange={(e) => setIngrendient(e.target.value)}></InputBox>

                {/* <AddButton onClick={(e) =>{setIngrendients(ingrendients.concat(ingrendient))}}>Add</AddButton> */}
                <AddButton onClick={pushIngrendient}>Add</AddButton>
                
                </Col2>
                <UploadButton onClick={(e) => setFood(product)}>Upload it</UploadButton>

                <PreviewSection>
                {/* <Food title ={title} img={imgUrl} ingrendients={ingrendients} price={price} /> */}
                <Food title ={product.title} img={product.img} ingrendients={product.ingrendients} price={product.price} updateIngredients={removeItem}  />
                </PreviewSection>
                                
        </Form>


           
        
    )
}

export default FoodForm
