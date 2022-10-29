import styled from 'styled-components'

export const SideBar = styled.div`
  position: absolute;  
  width: 17em;
  height: 100%;
  top: 0;
  overflow:hidden;
  background-color: #19222a;
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;
`
export const Links = styled.a`
    color: rgba(255,255,255,0.9);
        font-size: 0.75em;
        padding: 1.05em	1em;
        position: relative;
        display:block;
        font-weight:700 ;
        
        &:hover{
          background-color: rgba(0,0,0,0.9);}
`

export const LinksSection = styled.ul`
    list-style:none;
    display: block;
    padding: 0;
    margin: 0;
    
`

export const ListOfLinks = styled.li`
    margin-left: 0;
      padding-left: 0;
      
      display:inline-block;
      width: 100%;
      
`

