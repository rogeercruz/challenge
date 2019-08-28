import React, { useState } from "react";


import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../Themes/theme';
import dark from '../Themes/dark';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Content  from './content'

import InvertColors from '@material-ui/icons/InvertColors';


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

    return(
        <ThemeProvider theme={darkmode ? dark : theme }>
            <AppBar position="static" color="primary" >
                <Container maxWidth="lg">
                    <Toolbar variant="dense" style={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6" color="inherit">
                        Where in the word?
                    </Typography>
                    <div style={{display: 'flex'}} onClick={()=>{setDarkmode(!darkmode)}}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <InvertColors color="secondary"/>   
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{lineHeight: 2.5}}>
                        Dark Mode
                        </Typography>
                    </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Content />
        </ThemeProvider>
    )
};

export default App;

