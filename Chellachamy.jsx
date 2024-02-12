import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function Chellachamy() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      <h4>
        chellachamy component : user :{user} channel:{channel}
      </h4>
    </>
  );
}

export default Chellachamy;
