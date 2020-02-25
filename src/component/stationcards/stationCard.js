import React from "react";
import Hero from "@pxblue/react-components/core/Hero";
import HeroBanner from "@pxblue/react-components/core/HeroBanner";
import InfoListItem from "@pxblue/react-components/core/InfoListItem";
import ScoreCard from "@pxblue/react-components/core/ScoreCard";
import Info from "@material-ui/icons/Info";
import "./stationcards.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Grid
} from "@material-ui/core";
import { ChevronRight, MoreVert, CloudCircle } from "@material-ui/icons";
import * as Colors from "@pxblue/colors";
import {
  GasCylinder,
  Flow,
  Temp,
  Moisture as Humidity
} from "@pxblue/icons-mui";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import top from "../../topology_40.png";
import constants from "../../constants";

// To Fetch the Station Card
const FetchStationHeroCard = stationData => {
  debugger;
  const isTemperature =
    Object.keys(stationData.values)[constants.zero] === constants.temperature;
  const isHumidity =
    Object.keys(stationData.values)[constants.one] === constants.humidity;
  return (
    <HeroBanner htmlColor={Colors.white[50]} style={{ minWidth: 210 }}>
      <Hero
        icon={
          isTemperature ? (
            <Temp fontSize={"inherit"} htmlColor={Colors.black[500]} />
          ) : (
            <Flow fontSize={"inherit"} htmlColor={Colors.black[100]} />
          )
        }
        label={Object.keys(stationData.values)[constants.zero]}
        iconSize={48}
        value={
          stationData.values[Object.keys(stationData.values)[constants.zero]]
        }
        units={isTemperature ? constants.fahrenheit : " " + constants.KSCFH}
      />
      <Hero
        icon={
          isHumidity ? (
            <Humidity fontSize={"inherit"} htmlColor={Colors.blue[200]} />
          ) : (
            <GasCylinder fontSize={"inherit"} htmlColor={Colors.blue[300]} />
          )
        }
        label={Object.keys(stationData.values)[constants.one]}
        value={
          stationData.values[Object.keys(stationData.values)[constants.one]]
        }
        units={isHumidity ? constants.percentage : " " + constants.KSCF}
        iconSize={48}
      />
    </HeroBanner>
  );
};

// To Fetch the InfoListItem Card
const FetchInfoList = sationData => {
  const isAlaramCount = sationData.alarmCount === constants.zero;
  const isEventCount = sationData.eventCount === constants.zero;
  return (
    <List>
      <InfoListItem
        dense
        className="infoItem"
        fontColor={isAlaramCount ? Colors.black[200] : Colors.red[500]}
        iconColor={isAlaramCount ? Colors.black[200] : Colors.red[500]}
        title={sationData.alarmCount + constants.Alarm}
        icon={
          isAlaramCount ? (
            <NotificationsIcon></NotificationsIcon>
          ) : (
            <NotificationsActiveIcon></NotificationsActiveIcon>
          )
        }
      />
      <InfoListItem
        dense
        className="infoItem"
        fontColor={isEventCount ? Colors.black[200] : Colors.blue[500]}
        iconColor={isEventCount ? Colors.black[200] : Colors.blue[500]}
        title={sationData.eventCount + constants.Event}
        icon={<Info />}
      />
      <InfoListItem
        dense
        className="infoItem"
        title={"Online"}
        icon={<CloudCircle color={"inherit"} />}
      />
    </List>
  );
};
// Main Card
const StationCard = props => {
  return (
    <Grid item>
      <ScoreCard
        headerColor={
          props.stationData.alarmCount === 0
            ? Colors.blue[500]
            : Colors.red[500]
        }
        headerBackgroundImage={top}
        headerTitle={props.stationData.title}
        headerSubtitle={props.stationData.subtitle}
        headerInfo={props.stationData.deviceCount + " Devices"}
        headerFontColor={Colors.white[50]}
        actionItems={[<MoreVert onClick={() => {}} />]}
        badge={FetchStationHeroCard(props.stationData)}
        badgeOffset={0}
        actionRow={
          <List>
            <ListItem>
              <ListItemText primary="View Location" />
              <ListItemSecondaryAction>
                <ChevronRight />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        }
      >
        {FetchInfoList(props.stationData)}
      </ScoreCard>
    </Grid>
  );
};

export default StationCard;
