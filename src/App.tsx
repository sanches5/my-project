import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import SideBar from "./Components/SideBar";
import Todos from "./Pages/Todos";
import Messages from "./Pages/Messages";

function App() {
  return (
    <div className="main">
        <SideBar/>
        <Route path={"/todos"} exact component={Todos}/>
        <Route path={"/messages"} exact component={Messages}/>
    </div>
  );
}

export default App;
