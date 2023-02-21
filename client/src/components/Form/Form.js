import React, {useState} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
function Form() {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tag: '', selectedFile: ''
    });

    const handleSubmit = () => {

    }

  return (
    <Paper className={classes.paper}>
        <form className={classes.form} autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField name='creator' 
            variant='outlined' 
            label='Creator' 
            fullWidth
            value={postData.creator}
            onChange={}
            />
        </form>
    </Paper>
  )
}

export default Form