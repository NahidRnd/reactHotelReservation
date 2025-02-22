import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"


function CityLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CityLayout
