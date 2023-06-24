import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/events/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailedPage/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
function App() {
  
  
  
  const location = useLocation();
  const hideNavBar = location.pathname === '/';
  return (
    <>
     
     {!hideNavBar && <NavBar />}
      
      
        <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/events/:id' Component={EventDetailedPage} />
        <Route exact path='/events' Component={EventDashboard} />
        <Route path='/createEvent' Component={EventForm} /> 
        <Route path='/manage' Component={EventForm} />
        </Routes>
      
    
    </>
  );
}

export default App;
