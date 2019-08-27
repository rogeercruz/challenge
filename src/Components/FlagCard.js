import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    text: {
      color: theme.palette.text.textSecondary,
      marginTop: '6px',
      fontSize: '12px'
    },
    card: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const FlagCard = ( { entry } ) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={entry.name}
                        height="150"
                        image={entry.flag}
                        title={entry.name}
                    />
                    <CardContent>
                        <Typography component="p" className={classes.text}>
                            {entry.name}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            Population: {entry.population}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            Region: {entry.region}
                        </Typography> 
                        <Typography component="p" className={classes.text}>
                            Capital: {entry.capital}
                        </Typography> 
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default FlagCard;