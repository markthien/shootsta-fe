import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import VideoUpload from './VideoUpload';
import VideoList from './VideoList';
import VideoPlay from './VideoPlay';

const StyledDivRoot = styled.div`
  padding: 70px;
`;

const Home = ({videoToPlay, videos}) => {  

  return (
    <StyledDivRoot>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            Hello there, go ahead and upload some video :)
          </Grid>
        </Grid> 
        <Grid item xs={12} style={{ marginBottom: 5 }}>
          <Grid container justify="center">
            <VideoUpload/>
          </Grid>
        </Grid>                       
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3} alignItems="flex-start" direction="row">
              <Grid item xs={12} sm={videoToPlay?4:10} align="center">
                <VideoList/>
              </Grid>
              {
                videoToPlay &&
                <Grid item xs={12} sm={8} align="center">
                  <VideoPlay/>
                </Grid>                  
              }                        
          </Grid>
        </Grid> 
      </Grid>           
    </StyledDivRoot>   
  );
}

const mapStateToProps = state => {
  return { 
    videoToPlay: state.videoToPlay, 
    videos: state.videos 
  };
};

const ConnectHome = connect(mapStateToProps)(Home);

export default ConnectHome;