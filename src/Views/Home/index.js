import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: 0,
        minWidth: '240px',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.primary.main,
		borderRadius: '4px',
    },
  
  root: {
    flexGrow: 1,
    marginTop: '40px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperSearch: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },

  card: {
      backgroundColor: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.text.textSecondary,
  }
}));

const Home = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div className={classes.root}>
        
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paperSearch}>
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search for a country"
                    inputProps={{ 'aria-label': 'search for a coutry' }}
                />
                </Paper>    
            </Grid>

            <Grid item xs={12} sm={3}>
                    <form autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <Select
                                style={{borderRadius: '4px', border: 0, padding: '10px', borderRadius: '3px', color: '#fff'}}
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                            >
                               
                                <MenuItem value="">
                                    <em>Filter by Region</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>

            </Grid>
        </Grid>

        
      <Grid container spacing={3} style={{ marginTop: '16px'}}>
        <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="placeholder"
                    height="150"
                    image="https://via.placeholder.com/250"
                    title="Img"
                    />
                    <CardContent>
                    <Typography component="p" className={classes.text}>
                        Lorem
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}


export default Home;
