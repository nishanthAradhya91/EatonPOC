import React from "react";
import Hero from "@pxblue/react-components/core/Hero";
import HeroBanner from "@pxblue/react-components/core/HeroBanner";
import InfoListItem from "@pxblue/react-components/core/InfoListItem";
import ScoreCard from "@pxblue/react-components/core/ScoreCard";
import Info from "@material-ui/icons/Info";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
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
  const isTemperature =
    Object.keys(stationData.values)[0] === constants.temperature;
  const isHumidity = Object.keys(stationData.values)[1] === constants.humidity;
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
        label={Object.keys(stationData.values)[0]}
        iconSize={48}
        value={stationData.values[Object.keys(stationData.values)[0]]}
        units={isTemperature ? constants.fahrenheit : constants.KSCFH}
      />
      <Hero
        icon={
          isHumidity ? (
            <Humidity fontSize={"inherit"} htmlColor={Colors.blue[200]} />
          ) : (
            <GasCylinder fontSize={"inherit"} htmlColor={Colors.blue[300]} />
          )
        }
        label={Object.keys(stationData.values)[1]}
        value={stationData.values[Object.keys(stationData.values)[1]]}
        units={isHumidity ? constants.percentage : constants.KSCF}
        iconSize={48}
      />
    </HeroBanner>
  );
};

// To Fetch the InfoListItem Card
const FetchInfoList = sationData => {
  return (
    <List style={{ padding: "16px 0" }}>
      <InfoListItem
        dense
        style={{ height: 36 }}
        fontColor={
          sationData.alarmCount === 0 ? Colors.black[200] : Colors.red[500]
        }
        iconColor={Colors.red[500]}
        title={sationData.alarmCount + " Alarm"}
        icon={
          sationData.alarmCount === 0 ? (
            <NotificationsIcon style={{ color: "grey" }}></NotificationsIcon>
          ) : (
            <NotificationsActiveIcon
              style={{ color: "red" }}
            ></NotificationsActiveIcon>
          )
        }
      />
      <InfoListItem
        dense
        style={{ height: 36 }}
        fontColor={
          sationData.eventCount === 0 ? Colors.black[200] : Colors.blue[500]
        }
        iconColor={Colors.blue[500]}
        title={sationData.eventCount + " Event"}
        icon={
          <Info
            style={{
              color: sationData.eventCount === 0 ? "grey" : "aquablue",
              transform: [{ rotate: "90deg" }]
            }}
          />
        }
      />
      <InfoListItem
        dense
        style={{ height: 36 }}
        title={"Online"}
        icon={<CloudCircle color={"inherit"} />}
      />
    </List>
  );
};
class StationCard extends React.Component {
  render() {
    return (
      <ScoreCard
        style={{ maxWidth: 400 }}
        headerColor={
          this.props.stationData.alarmCount === 0
            ? Colors.blue[500]
            : Colors.red[500]
        }
        headerBackgroundImage={top}
        headerTitle={this.props.stationData.title}
        headerSubtitle={this.props.stationData.subtitle}
        headerInfo={this.props.stationData.deviceCount + " Devices"}
        headerFontColor={Colors.white[50]}
        actionItems={[<MoreVert onClick={() => alert("something did")} />]}
        badge={FetchStationHeroCard(this.props.stationData)}
        badgeOffset={0}
        actionRow={
          <List style={{ margin: 0 }}>
            <ListItem>
              <ListItemText primary="View Location" />
              <ListItemSecondaryAction>
                {" "}
                <ChevronRight />{" "}
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        }
      >
        {FetchInfoList(this.props.stationData)}
      </ScoreCard>
    );
  }
}
export default StationCard;
