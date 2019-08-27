import React, { useState } from "react";
import Detail from '../Views/Detail';
import Home from '../Views/Home';

import Container from '@material-ui/core/Container';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.wrapper, 
        width: '100vw', 
        minHeight: '100%', 
        overflow: 'hidden', 
        margin: 0
    },

    wrapper: {
        width: '100vw', 
        minHeight: '100vh'
    }
}));

const Content = ( { entry } ) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container maxWidth="lg" className={classes.wrapper}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" name="Search" component={Home} />
                        <Route exact path="/detail" name="Search" component={Detail} />
                    </Switch>
                </HashRouter>
            </Container>
        </div>
    );
}

export default Content;