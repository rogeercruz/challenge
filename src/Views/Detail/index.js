import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useEndpoint } from "../../Hooks/Detail/effect";
import { useStyles } from './style';

const Detail = () => {
    const classes = useStyles();
    
    const country = useEndpoint({
        method: "GET",
        url: 'https://restcountries.eu/rest/v2/name/'
    });
 
    if ( typeof(country) !== 'undefined' || country != null ) {
        
        return (
            <Grid spacing={4} container className={classes.container}>
                <Grid item xs={12} sm={12}>
                    <Button color="primary" variant="contained" size="small" className={classes.button} onClick={()=>{location.hash='/'}}>
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
        <div className={classes.progressContainer}> <CircularProgress className={classes.progress} /></div>
     )
     
};

export default Detail;
