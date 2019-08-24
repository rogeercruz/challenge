import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'Oxygen-Sans',
			'Ubuntu',
			'Cantarell',
			'"Helvetica Neue"',
			'sans-serif',
		].join(','),
		body1: {
			color: '#fff',
			contrastText: 'hsl(207, 26%, 17%)',
			textSecondary: '#fff',
		},
	},
	palette: {
		primary: {
			contrastText: '#FFF',
			light: '#fff',
			main: 'hsl(209, 23%, 22%)',
			veryDark: 'hsl(207, 26%, 17%)',
		},
	},
});
export default responsiveFontSizes(theme);
