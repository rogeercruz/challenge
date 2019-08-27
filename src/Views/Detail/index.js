import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FlagCard from '../../Components/FlagCard';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { useEndpoint } from "../../Hooks/Detail/effect";

import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    text: {
      color: theme.palette.text.textSecondary,
      marginTop: '6px',
      fontSize: '14px'
    },

    button: {
        margin: theme.spacing(1),
      },
      leftIcon: {
        marginRight: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      iconSmall: {
        fontSize: 20,
    },

    title: {
        fontSize: '32px',
        width: '100%',
        height: '30px',
    },
    
    card: {
        backgroundColor: theme.palette.primary.main,
        paddingBottom: '32px',
        boxSizing: 'border-box',
    },
}));


const Detail = () => {
    const classes = useStyles();
    
    const country = useEndpoint({
        method: "GET",
        url: 'https://restcountries.eu/rest/v2/name/'
    });
 
    if ( typeof(country) !== 'undefined' || country != null ) {
        
        console.log(country);
        
        return (
            <Grid spacing={4} container style={{marginTop: '32px'}}>
                <Grid item xs={12} sm={12}>
                    <Button variant="contained" size="small" className={classes.button} onClick={()=>{location.hash='/'}}>
                        <ArrowBack className={clsx(classes.leftIcon, classes.iconSmall)} />
                        Voltar
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={country.flag} width={'100%'} />
                </Grid>
                <Grid item xs={12} sm={6} spacing={3} container justify="flex-start" >
                    
                    <Grid item xs={12} sm={12}>
                        <Typography component="h1" className={classes.title}>
                            {country.name}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography component="p" className={classes.text}>
                            <b>Native Name: </b> {country.nativeName}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Population: </b> {country.population}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Region: </b> {country.region}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Sub Region: </b> {country.subRegion}
                        </Typography> 
                        <Typography component="p" className={classes.text}>
                            <b>Capital: </b> {country.capital}
                        </Typography> 
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography component="p" className={classes.text}>
                            <b>Top Level Domain:</b> {country.topLevelDomain}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Currencies: </b> {country.currencies.map(currencie => `${currencie.name} `)}
                        </Typography> 
                        <Typography component="p" className={classes.text}>
                            <b> Languages: </b>{country.languages.map(language => `${language.name} `)}
                        </Typography> 
                    </Grid>       
                </Grid>    
                
            </Grid>
            
           )
     }

     return (
         <p>Loading...</p>
     )
     
};

export default Detail;
