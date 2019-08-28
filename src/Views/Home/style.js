import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
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
	marginTop: '16px',

	[theme.breakpoints.up('sm')]: {
		marginTop: '0px',
		float: 'right',
	},
  },

  select: {
    fontSize:'14px', 
    borderRadius: '4px', 
    border: 0, 
    padding: '10px 10px 10px 30px', 
    borderRadius: '3px', 
    color: theme.palette.primary.contrastText,
  },

  menu: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },

  progress: {
    margin: theme.spacing(2),
  },

  progressContainer: {
	  display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
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
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
  
  input: {
    fontSize: '14px',
    color: theme.palette.primary.contrastText,
  }

}));