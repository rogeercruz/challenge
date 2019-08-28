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

import { useEndpoint } from "../../Hooks/Search/effect";
import  { useStyles } from './style';


const Home = () => {
  const classes = useStyles();
  const todosApi = "https://restcountries.eu/rest/v2";
  const [region, setRegion] = useState('');
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
  
  const countryList = useEndpoint({
    method: "GET",
    url: url
  });

  const handleInputChange = (event) => {
	if (event.target.value === '' || event.target.value === null) return;

	if(event.key === 'Enter'){
		setUrl(`${todosApi}/name/${event.target.value}`);
		setRegion('');
	}
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
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paperSearch}>
					<IconButton className={classes.iconButton} aria-label="search">
						<SearchIcon color="secondary"/>
					</IconButton>
					<InputBase
						className={classes.input}
						placeholder="Search for a country"
						inputProps={{ 'aria-label': 'search for a coutry' }}
						onKeyPress={handleInputChange}
					/>
                </Paper>    
            </Grid>

            <Grid item xs={12} sm={3}>
				<FormControl color="primary" className={classes.formControl}>
					<Select
						color="primary"
						className={classes.select}
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						value={region}
						onChange={handleChange}
						displayEmpty
					>
						<MenuItem value="" >
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
				!countryList.complete  && <div className={classes.progressContainer}> <CircularProgress className={classes.progress} /></div>
			}
			
			{
				countryList.data.map( country  =>  <LazyLoad key={country.numericCode}><FlagCard entry={country} /></LazyLoad>)
			}
      </Grid>
	
    </div>
  );
}


export default Home;
