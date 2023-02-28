import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post'


function Posts({ setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    //console.log(posts);
    
  return (
    !posts.length ? (
        <>
        <CircularProgress />
        <h1>BACKEND IS DOWN</h1>
        </>
    ) : (
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    )
  )
}

export default Posts