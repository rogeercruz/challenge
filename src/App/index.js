import React, { useState } from "react";


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../Themes/theme';
import dark from '../Themes/dark';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Content  from './content'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main, 
        width: '100vw', 
        minHeight: '100%', 
        overflow: 'hidden', 
        margin: 0
    },
}));


const App = () => {

    const [darkmode, setDarkmode] = useState(false);
    const classes = useStyles();
    console.log(darkmode);

    return(
        <ThemeProvider theme={darkmode ? dark : theme }>
            <AppBar position="static" color="primary" >
                <Container maxWidth="lg">
                    <Toolbar variant="dense" style={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6" color="inherit">
                        Where in the word?
                    </Typography>
                    <Typography variant="h6" color="inherit" onClick={()=>{setDarkmode(!darkmode)}}>
                        Dark Mode
                    </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Content />
        </ThemeProvider>
    )
};

export default App;

