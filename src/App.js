import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TemplateLogin from './Templates/TemplateLogin'
import TemplateRegister from './Templates/TemplateRegister'
import TemplateProfile from './Templates/TemplateProfile'
import TemplateWall from './Templates/TemplateWall'
import TemplateSos from './Templates/TemplateSos'
import './App.css';


function App() {
  return (
    <>
   
<BrowserRouter>
       <Switch>
         <Route exact path="/" component={TemplateLogin}></Route>
         <Route exact path="/register" component={TemplateRegister}></Route>
         <Route exact path="/profile" component={TemplateProfile}></Route>
         <Route exact path="/wall" component={TemplateWall}></Route>
         <Route exact path="/sos" component={TemplateSos}></Route>
       </Switch>
      
     </BrowserRouter>
     </>
  );
}

export default App;

 