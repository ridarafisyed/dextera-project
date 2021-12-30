/** @format */

import React, { Fragment, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Box, Button, Paper, Grid } from "@mui/material";
import { Circle } from "@mui/icons-material";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.7577,
    longitude: -95.4376,
    zoom: 3,
  });

  return (
    <Fragment>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicmlkYXJhZmlzeWVkIiwiYSI6ImNreGl6YTI1MjBmY3UyeHFrOGZkbXF5OGwifQ.NUApjzkixtVerjPFX8TL7Q"
        mapStyle="mapbox://styles/ridarafisyed/ckxizv9yu4xgl15p3spw6lpez"
        zoom={viewport.zoom}
        onViewportChange={setViewport}
        height="100%"
        width="100%"
      >
        <Marker
          latitude={40.7128}
          longitude={-74.006}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle color="secondary" />
        </Marker>
        <Marker
          latitude={47.6062}
          longitude={-74.006}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle color="secondary" />
        </Marker>
        <Marker
          latitude={41.8781}
          longitude={-87.6298}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle color="secondary" />
        </Marker>
      </ReactMapGL>
    </Fragment>
  );
};

export default Map;
