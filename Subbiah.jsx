import { useContext } from "react";
import React from "react";
import Chellachamy from "./Chellachamy";
import { UserContext, ChannelContext } from "../App";

function Subbiah() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      <h4>
        Subbiah Component : {user} {channel}
      </h4>

      <Chellachamy></Chellachamy>
    </>
  );
}

export default Subbiah;
