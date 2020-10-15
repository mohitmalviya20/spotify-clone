import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./css/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Love a new track you just heard? Click the “heart” icon next to the song on mobile or desktop, and there will be more where that came from down the road.</p>

        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}
export default Body;
