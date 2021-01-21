
import React, {useEffect} from "react";
import './assets/app';

import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import {Home} from './pages/Home'
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import {Login} from "./pages/Login";
import Bands from "./pages/Bands";
import Band from "./pages/Band";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import {Register} from "./pages/Register";
import {MultiActionButton} from "./components/MultiActionButton";
import Footer from "./components/Footer"
import "./app.css"
import 'mdbreact/dist/css/mdb.css'
import UserProvider from "./providers/userProvider";
import Logout from "./components/Logout";
import Flashs from "./components/Flashs";


function App() {
    const user = {
        id: 1
    }
    useEffect(() =>{
        console.log('The project is open source : https://github.com/korrigans84/findtune.com')
    })

  return (
      <UserProvider>
          <Router>
              <div className="area" >
                <ul className="circles">
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                        <sub></sub>
                </ul>
              <Navbar />
              <Flashs />
              <div className="multi-action-button">
                <MultiActionButton />
              </div>
              <Switch>
                <Route path="/profile">
                    {user ? <Profile /> : <Link to="/login" />}
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/bands">
                  <Bands />
                </Route>
                <Route path="/band/:id">
                  <Band />
                </Route>
                <Route path="/artists">
                  <Artists/>
                </Route>
                <Route path="/artist/:id">
                  <Artist />
                </Route>
                  <Route path="/logout">
                      <Logout />
                  </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
              <Footer />
          </Router>
          
      </UserProvider>
  );
}

export default App;
