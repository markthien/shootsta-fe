import React, { useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect, useDispatch } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { setVideoToPlay } from "../actions/index";
import axios from 'axios';
import { BASE_URL } from '../config.js';
import { addVideo } from "../actions/index";

const StyledDivRoot = styled.div`
  padding: 15px;
`;

const VideoList = ({ videos }) => {   

  const dispatch = useDispatch();
  
  // did mount
  useEffect(() => {
    axios.get(BASE_URL + 'allVideo').then((response) => {
      dispatch(addVideo(response.data));
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
    });
  }, []);

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      maxWidth: 500,
    },
    tableCellData: {
      fontSize: '15px',
      color: '#fff',
      border: 0
    },
  }));

  const classes = useStyles();

  const onClickHandler = videoFileName => {
    dispatch(setVideoToPlay(videoFileName));
  }

  return (
    <StyledDivRoot>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ marginBottom: 15 }}>
          <Grid container justify="center">
            {
              videos.length > 0?'My Video':'No Video'
            }
            
          </Grid>
        </Grid>                 
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3} alignItems="center">
            <Table className={classes.table}>
              <TableBody>
                {videos.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell 
                      align="center" 
                      className={classes.tableCellData}
                      onClick={() => onClickHandler(row)}
                      style={{ cursor: 'pointer' }}>
                      {row}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>                                         
          </Grid>
        </Grid> 
      </Grid>           
    </StyledDivRoot>   
  );

}

const mapStateToProps = state => {
  return { videos: state.videos };
};

const ConnectVideoList = connect(mapStateToProps)(VideoList);

export default ConnectVideoList;