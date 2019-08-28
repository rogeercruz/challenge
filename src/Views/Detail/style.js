import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    text: {
      color: theme.palette.text.textSecondary,
      marginTop: '6px',
      fontSize: '14px'
    },

    button: {
        margin: 0,
      },

    leftIcon: {
        marginRight: theme.spacing(1),
    },

    rightIcon: {
        marginLeft: theme.spacing(1),
    },

    iconSmall: {
        fontSize: 20,
    },

    title: {
        fontSize: '32px',
        width: '100%',
        height: '30px',
    },
    
    card: {
        backgroundColor: theme.palette.primary.main,
        paddingBottom: '32px',
        boxSizing: 'border-box',
    },

    container : {
        marginTop: '32px', 
        marginBottom: '32px'
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
}));