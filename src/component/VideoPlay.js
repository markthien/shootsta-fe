import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import ReactPlayer from 'react-player'
import { BASE_URL } from '../config.js';

const StyledDivRoot = styled.div`
  padding: 15px;
`;

const VideoPlay = ({videoToPlay}) => {

  let url = BASE_URL + 'video/' + videoToPlay;

  useEffect(() => {
    url = BASE_URL + 'video/' + videoToPlay;
  }, [videoToPlay]); 
  
  return (
    <StyledDivRoot>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ marginBottom: 15 }}>
          <Grid container justify="center">
            {videoToPlay}
          </Grid>
        </Grid>           
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3} alignItems="center"> 
            <ReactPlayer url={url} loop playing={false} controls/>                                            
          </Grid>
        </Grid>
      </Grid>           
    </StyledDivRoot>   
  );

}

const mapStateToProps = state => {
  return { videoToPlay: state.videoToPlay };
};

const ConnectVideoPlay = connect(mapStateToProps)(VideoPlay);

export default ConnectVideoPlay;