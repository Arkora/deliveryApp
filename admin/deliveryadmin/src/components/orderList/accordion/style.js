import styled from "styled-components";

export const Container = styled.div`
    border: solid black 2px ;
    border-radius:5px ;
    margin: 5px ;
    
`
export const Wrap = styled.div`
    display:flex ;
    flex-direction:row ;
    justify-content:start ;
    gap:50px ;
    font-family:Verdana, Geneva, Tahoma, sans-serif;

    button{
        background-color:#198754 ;
        border-radius:5px ;
        width:max-content ;
        height:50px ;
    }
`

export const DropDown = styled.div`

    h3{
        color:#ffffff ;
    }

    hr{
        
        border:3px solid #ffffff ;
    }

    li{
        list-style: disclosure-closed;        
        list-style-position: inside;
        color:#000000 ;
    }

    p{
        color: black ;
        font-style:italic ;
    }    

    
`

export const Flex = styled.div`
    display:flex;
    flex-direction: row ;
    justify-content: start;
    gap:350px ;

    
    #toggle{
        cursor: pointer;
        color: #ffffff ;
    }
`
