// import {Main,OuterContainer,InnerContainer,HeaderContainer,ItemContainer,FoodContainer} from './components/MainContainer'
// import {Header} from './components/Header'
import React from 'react';
// import FoodItem from './components/FoodItem';
// import FoodList from './components/FoodList';
// import Categories from './components/Categories';
import Home from './pages/Home';
// import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Orders from './pages/Orders';



function App() {
  
  return (

    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/orders" component={Orders} ></Route>


      </Switch>


    </Router>
  
  //  <OuterContainer>       
  //     <Main>
  //       <InnerContainer>
  //         <HeaderContainer>
  //           <Header />
  //           <Categories categories = {data}/>
  //         </HeaderContainer>
  //         <FoodContainer>
  //           <FoodList foods ={data} />
  //         </FoodContainer>
                 
  //       </InnerContainer>        
  //     </Main>
  //   </OuterContainer>
    
    
    
  )
}

export default App;
