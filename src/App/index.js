import React from 'react';
import Detail from '../Views/Detail';
import Home from '../Views/Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../Themes/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Container from '@material-ui/core/Container';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary" >
            <Container maxWidth="lg">
                <Toolbar variant="dense" style={{padding: 0}}>
                <Typography variant="h6" color="inherit">
                    Where in the word?
                </Typography>
                </Toolbar>
            </Container>
        </AppBar>
        
        <div style={{backgroundColor: 'hsl(207, 26%, 17%)', width: '100vw', minHeight: '100%', overflow: 'hidden', margin: 0}}>
            <Container maxWidth="lg" style={{backgroundColor: 'hsl(207, 26%, 17%)', width: '100vw', minHeight: '100vh'}}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" name="Search" component={Home} />
                        <Route exact path="/detail" name="Search" component={Detail} />
                    </Switch>
                </HashRouter>
            </Container>
        </div>

    </ThemeProvider>
);

export default App;

