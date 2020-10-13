import React from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlist }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify"
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br></br>
      <strong className="sidebar_title">PLAYLIST</strong>
      <hr />
      {playlist?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
