import React, {useState} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

function Form() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tag: '', selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();         //prevents refresh in browser

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

  return (
    <Paper className={classes.paper}>
        <form className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>

            <TextField name='creator' 
            variant='outlined' 
            label='Creator' 
            fullWidth
            value={postData.creator}
            onChange={(event) => setPostData({ ...postData, creator: event.target.value })}
            />
            <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
            <TextField name='Message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })} />
            <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value })} />

            <div className={classes.fileInput}>
                <FileBase
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} 
                />
            </div>

            <Button className={classes.buttonSubmit} onClick={handleSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
            <Button onClick={clear} variant='contained' color='secondary' size='small' fullWidth >Clear</Button>

        </form>
    </Paper>
  )
}

export default Form