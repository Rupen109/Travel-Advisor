import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
  
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)'); 
  const coordinates = { lat:0 , lang:0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC5XPQud-Rnc2X-2wiqrvnFxp_2rnsnXjE' }}
          defaultCenter = {coordinates}
          center = {coordinates}
          defaultZoom = {14}
          margin = {[50,50,50,50]}
          options={''}
          onChange = {''}
          onChildClick = {''}
      >

      </GoogleMapReact>
    </div>
  );
}

export default Map;