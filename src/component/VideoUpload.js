import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { uploadVideo } from "../actions/index";

const StyledDivRoot = styled.div`
  padding: 15px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const VideoUpload = () => {  

  const classes = useStyles();

  const dispatch = useDispatch();

  const onChangeHandler = event => {
    dispatch(uploadVideo(event.target.files[0]));
  }

  return (
    <StyledDivRoot>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <input
              accept="video/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={onChangeHandler}
            />              
            <label htmlFor="contained-button-file">
              <Button 
                variant="contained" 
                color="secondary" 
                component="span" 
                size="large">
                  Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </Grid>           
    </StyledDivRoot>   
  );
}

export default VideoUpload;