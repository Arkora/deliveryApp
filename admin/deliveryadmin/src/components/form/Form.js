import React,{useState,useEffect} from "react";
import Preview from "../preview/Preview";
import {InputBox,Container,Col2,AddButton,UploadButton,PreviewSection} from './style'
import {createFood,deleteFood,updateFood} from '../../api/index'
import { useNavigate} from "react-router-dom"


function Form({id,foodToUpload}) {
  let navigate = useNavigate();
  const [food, setFood] = useState({ title:"", img:"", ingrendients:[], category:"", price:"" })
  const [ingrendient,setIngrendient] = useState("")

const pushIngrendient = () =>{
  setFood({...food, ingrendients: [...food.ingrendients.concat(ingrendient)] })
  setIngrendient("")
}

const removeIngrendient = (item) =>{
  setFood({ ...food, ingrendients: food.ingrendients.filter((ingrendient) => ingrendient !== item) });
}

const handleDelete = async (e) =>{
  
  try{
    if(window.confirm("Are you sure want to delete this item?")){
        await deleteFood(id)                 
        navigate("/")   
    }
    
}catch(error){
  console.log(error)
}
}

const handleForm = async (e) =>{ 
  if(id){
    try {
      const {data,status} = await updateFood(id,food)
      alert(data)    
      navigate("/")   
    } catch (error) {
      console.log(error.message)
    }
  }else{
    try {
      const {data,status} = await createFood(food)
      alert(data)    
      
    } catch (error) {
      console.log(error.message)
    }
  }
  
 
  
}

useEffect(() => {
  if(id){
    const {title,img,category,ingrendients,price} = foodToUpload
    setFood({ title:title, img:img, ingrendients:ingrendients, category:category, price:price })
  }
  
}, [id])


  return (
    <Container>
      <h1>{id ? "Update Form" : "Upload Form"}</h1>
      
        <InputBox name="title" label="Title" placeholder="Title"  value={food.title} onChange={(e) =>setFood({...food, title: e.target.value})} />
        <InputBox name="img" label="Img"  placeholder="ImgUrl" value={food.img} onChange={(e) =>setFood({...food, img: e.target.value})} />
        <InputBox name="price" label="Price"  placeholder="Price" value={food.price} onChange={(e) =>setFood({...food, price: e.target.value})} />        
        <Col2>
          <InputBox name="igrendient" label="Ingrendient"  placeholder="Ingrendient" value={ingrendient} onChange={(e) =>setIngrendient(e.target.value)} />
          <AddButton onClick={pushIngrendient}>Add</AddButton>
        </Col2>
        <select className="category-select" value={food.category} onChange={(e) => setFood({...food, category: e.target.value})} >
              <option value="">Select Category</option>
              <option value="meat">Meat</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="coffee">Coffee</option>
        </select>
        <UploadButton onClick={(e) => handleForm()} >Save</UploadButton>
        {id ? <button onClick={(e) => handleDelete()}>Delete Food</button> : <></> }
      <PreviewSection>
        <Preview title={food.title}
          category={food.category} 
          ingrendients={food.ingrendients} 
          price={food.price}
          img={food.img}
          removeIngrendient={removeIngrendient}
        />
      </PreviewSection>
    </Container>
  );
}

export default Form;