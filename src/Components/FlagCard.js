import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style'


const FlagCard = ( { entry } ) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={4} lg={3}  onClick={()=>{ location.hash=`/detail?name=${entry.name}` }}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={entry.name}
                        height="200"
                        image={entry.flag}
                        title={entry.name}
                    />
                    <CardContent className={classes.content}>
                        <Typography component="p" className={classes.title}>
                            <b>{entry.name}</b>
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Population:</b> {entry.population}
                        </Typography>
                        <Typography component="p" className={classes.text}>
                            <b>Region:</b> {entry.region}
                        </Typography> 
                        <Typography component="p" className={classes.text}>
                            <b>Capital:</b> {entry.capital}
                        </Typography> 
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default FlagCard;