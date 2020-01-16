import React from "react";
import StationCard from "./stationcards/stationCard";
import StationCardData from "../data";
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import * as PXBThemes from "@pxblue/themes/react";
class App extends React.Component {
  render() {
    const appData = StationCardData.map(data => {
      return (
        <div style={{ marginRight: "6px", marginTop: "6px" }}>
          <StationCard stationData={data}></StationCard>
        </div>
      );
    });
    console.log(this.props.stationDataata);
    return (
      <MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
        <CssBaseline />
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>{appData}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
