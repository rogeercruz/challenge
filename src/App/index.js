import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Detail from '../Views/Detail';
import Home from '../Views/Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
                Photos
            </Typography>
            </Toolbar>
        </AppBar>
        
        
        <HashRouter>
            <Switch>
                <Route exact path="/" name="Search" component={Home} />
                <Route exact path="/detail" name="Search" component={Detail} />
            </Switch>
        </HashRouter>
    </div>
);

export default App;

