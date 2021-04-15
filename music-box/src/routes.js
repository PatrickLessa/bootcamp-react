import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicial from './pages/Inicial';
import MyMusics from './pages/MyMusics';
import NotFound from './pages/NotFound';

function Routes(){
    return(
        <Router>
            <Switch>
                {/* usamos o "exact" para que o switch ache exatamente aquela rota, pois sem ele
                    ele funciona como um .contains()
                */}
                <Route exact path="/" component={Inicial}/>
                <Route exact path="/my-musics" component={MyMusics}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;