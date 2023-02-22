import React, {useEffect, useState} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

function Form({ currentId, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();         //prevents refresh in browser

        if(currentId){
            dispatch(updatePost(currentId, postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();    //clears form after submit
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

  return (
    <Paper className={classes.paper}>
        <form className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>{currentId? `Editing '${post.title}' Memory`: 'Creating a Memory'}</Typography>

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