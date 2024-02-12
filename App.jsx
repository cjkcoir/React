import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import StatePrevious from "./Components/StatePrevious";
import ChidreForm2 from "./Components/ChidreForm2";
import ChidreForm3 from "./Components/ChidreForm3";
import UseStateObject from "./Components/UseStateObject";
import LoginFormValidationCodeStepBY from "./Components/LoginFormValidationCodeStepBY";
import PostToLocalServer3000 from "./Components/PostToLocalServer3000";
import FetchJsonServer from "./Components/FetchJsonServer";
import TableObject from "./Components/TableObject";
import Subbiah from "./Components/Subbiah";

export const UserContext =React.createContext();
export const ChannelContext=React.createContext();
function App() {

  return (
    <div className="App">

    <UserContext.Provider value={"Jeyam"}>

      <ChannelContext.Provider value={"Family"}>

        <Subbiah></Subbiah>
      </ChannelContext.Provider>
    </UserContext.Provider>



    </div>
  );
}

export default App;
