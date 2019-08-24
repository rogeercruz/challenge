import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Detail from '../Views/Detail';
import Home from '../Views/Home';

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" name="Search" component={Home} />
            <Route exact path="/detail" name="Search" component={Detail} />
        </Switch>
    </HashRouter>
);

export default App;

