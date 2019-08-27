import React, { useState, useEffect } from "react";
import axios from "axios";
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

import { makeStyles } from '@material-ui/core/styles';

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
	float: 'right',
  },
  
  root: {
    flexGrow: 1,
	marginTop: '32px',
	overflow: 'hidden',
	paddingBottom: '32px'
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
  
}));

const useEndpoint = (req) => {
	const [res, setRes] = useState({
		data: [],
		complete: false,
		pending: false,
		error: false
	});

	useEffect(
		() => {
		setRes({
			data: [],
			pending: true,
			error: false,
			complete: false
		});
		axios(req)
			.then(res =>
			setRes({
				data: res.data,
				pending: false,
				error: false,
				complete: true
			})
			)
			.catch(() =>
			setRes({
				data: [],
				pending: false,
				error: true,
				complete: true
			})
			);
		},
		[req.url]
	);
	return res;
}

const Home = () => {
  const classes = useStyles();
  const [region, setRegion] = useState('');
  const [open, setOpen] = React.useState(false);
  const todosApi = "https://restcountries.eu/rest/v2";
  const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
  
  const countryList = useEndpoint({
    method: "GET",
    url: url
  });

  const handleInputChange = (e) => {
	if (event.target.value === '' || event.target.value === null) return;

	setUrl(`${todosApi}/name/${event.target.value}`);
	setRegion('Filter by Region');
  }

  const handleChange = (event) => {
	if (event.target.value === '' || event.target.value === null) return;

	setUrl(`${todosApi}/region/${event.target.value}`)
	setRegion(event.target.value);

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
                    <SearchIcon color="secondary"/>
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search for a country"
                    inputProps={{ 'aria-label': 'search for a coutry' }}
					onChange={handleInputChange}
					style={{color: '#fff'}}
				/>
                </Paper>    
            </Grid>

            <Grid item xs={12} sm={3}>
				<FormControl className={classes.formControl}>
					<Select
						style={{borderRadius: '4px', border: 0, padding: '10px', borderRadius: '3px', color: '#fff'}}
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						value={region}
						onChange={handleChange}
						displayEmpty
					>
						<MenuItem value="">
							Filter by Region
						</MenuItem>

						<MenuItem value={'Africa'}>Africa</MenuItem>
						<MenuItem value={'Americas'}>Americas</MenuItem>
						<MenuItem value={'Asia'}>Asia</MenuItem>
						<MenuItem value={'Europe'}>Europe</MenuItem>
						<MenuItem value={'Oceania'}>Oceania</MenuItem>
					</Select>
				</FormControl>
            </Grid>
        </Grid>

        
      <Grid container spacing={4} style={{ marginTop: '16px'}}>
			{
				countryList.data.map( country  =>  <LazyLoad key={country.numericCode}><FlagCard entry={country} /></LazyLoad>)
			}
      </Grid>
	
    </div>
  );
}


export default Home;
