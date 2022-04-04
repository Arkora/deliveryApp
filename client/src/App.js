import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
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
