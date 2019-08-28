import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    text: {
      color: theme.palette.text.textSecondary,
      marginTop: '8px',
      fontSize: '14px'
    },

    title: {
        color: theme.palette.text.textSecondary,
        marginTop: '8px',
        marginBottom: '16px',
        fontSize: '16px'
    },
    
    card: {
        backgroundColor: theme.palette.primary.main,
        boxSizing: 'border-box',
    },

    content: {
        paddingBottom: '32px'
    }
    
}));
