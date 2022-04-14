import React,{useState} from 'react'
import {Container,Wrap,DropDown,Flex} from './style'
import moment from 'moment'
import { deleteOrder } from '../../../api'

const Accordion = ({id,products,total,message,time}) => {
    const [isClicked, setIsClicked] = useState(false)

    const toggle = () =>{
      setIsClicked(!isClicked)
    }

    const handleReady = async(id) => {
      try {
          await deleteOrder(id)
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <Container>
      <Flex>
        <div>
          <h3>{products.length} {products.length >1 ? ("products") : ("product")}</h3>
        </div>
        <div>
          <h5>{moment(time).fromNow()}</h5>
        </div>
        <div>
          <h3 id='toggle' onClick={toggle}>{isClicked ? ("-") : ("+")}</h3>
        </div>
      </Flex>
      {isClicked ? 
      (
      <DropDown>
        <hr/>
        {products.map(item =>{
          return(<div>
            <h3>{item.title} quantity: x{item.quantity}</h3>
            {item.ingrendients.map(item =>{
              return(<ul><li>{item}</li></ul>)
            })}
          </div>)
        })}
        
        <h4>Comments:</h4>
        <p>'{message}'</p>
        <hr/>
        <Wrap>
          <div>
            <h3>Total:{total}$</h3>
          </div>  
          <div>
            <button onClick={(e) => {deleteOrder(id)}}>Ready to deliver</button>  
          </div>     
        </Wrap>
        
      </DropDown>) :
       (null)}

    </Container>
  )
}

export default Accordion