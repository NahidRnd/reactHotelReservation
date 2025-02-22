import { Outlet, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";


function AppLayout() {

  return (
    <div className="app-layout">
      <Navbar />
      <Outlet />
      {/* <Outlet context={[ destination, setDestination, date, setDate, options, setOptions]}/> */}

    </div>
  )
}

export default AppLayout
