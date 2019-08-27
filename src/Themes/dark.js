import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const dark = createMuiTheme({
	typography: {
		fontFamily: ['Nunito Sans', 'Roboto', 'sans-serif',].join(','),
		body1: {
			color: '#fff',
			contrastText: '#fff',
			textSecondary: '#fff',
		},
	},
	palette: {
		primary: {
			contrastText: '#fff',
			light: '#fff',
			main: 'hsl(207, 26%, 17%)',
			veryDark: 'hsl(207, 26%, 17%)',
			wrapper: 'hsl(200, 15%, 8%)',
		},
	},
});
export default responsiveFontSizes(dark);
