import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Nunito Sans', 'Roboto', 'sans-serif',].join(','),
		body1: {
			color: 'hsl(207, 26%, 17%)',
			contrastText: 'hsl(207, 26%, 17%)',
			textSecondary: 'hsl(207, 26%, 17%)',
		},
	},
	palette: {
		primary: {
			contrastText: 'hsl(207, 26%, 17%)',
			light: '#fff',
			main: '#fff',
			veryDark: 'hsl(207, 26%, 17%)',
			wrapper: ' hsl(0, 0%, 98%)'
		},
		secondary: {
			main: 'hsl(207, 26%, 17%)',
		},
	},
});
export default responsiveFontSizes(theme);
