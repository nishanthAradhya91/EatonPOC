import React from "react";
import StationCard from "./stationcards/stationCard";
import StationCardData from "../data";
import "./App.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  Grid
} from "@material-ui/core";
import * as PXBThemes from "@pxblue/themes/react";
const App = props => {
  const appData = StationCardData.map(data => {
    return (
      <div className="appStyle">
        <StationCard stationData={data}></StationCard>
      </div>
    );
  });
  return (
    <MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
      <CssBaseline />
      <div style={{ padding: 10 }}>
        <Grid container>
          <div
            style={{
              display: "flex",
              maxWidth: "1200px",
              flexWrap: "wrap",
              margin: " 0 auto"
            }}
          >
            {appData}
          </div>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};
export default App;
