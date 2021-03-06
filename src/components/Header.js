import { Avatar, IconButton } from "@material-ui/core";
import { ExitToApp, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./css/Header.css";
function Header({ spotify }) {
  const [{ user },dispatch] = useDataLayerValue();
  const signout=()=>{
    dispatch({
      type: "SET_TOKEN",
      token: null,
    })
  }
  return (
    <div className="header">
      <div className="header_left">
        <SearchOutlined />
        <input
          placeholder="Search for Artists, Songs or podcasts "
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <IconButton className="signout" onClick={signout}>
        <ExitToApp/>
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
