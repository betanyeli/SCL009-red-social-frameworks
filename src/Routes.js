import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {TemplateLogin, TemplateRegister, TemplateProfile, TemplateWall, TemplateSos} from './Templates'

function Routes() {
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

export default Routes;
