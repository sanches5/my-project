import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';
import SideBar from "./Components/SideBar";
import Todos from "./Pages/Todos";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="main">
        <SideBar/>
        <Route path={"/todos"} exact component={Todos}/>
        <Route path={"/messages"} exact component={Messages}/>
        <Route path={"/profile"} exact component={Profile}/>
    </div>
  );
}

export default App;
