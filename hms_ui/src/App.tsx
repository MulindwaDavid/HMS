import { Routes, Route } from "react-router-dom";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Topbar from "./components/Topbar";

//pages
function Overview(){
  return <h2>Overview</h2>;
}

function Rooms() {
  return <h2>Rooms</h2>;
}

function Payments() {
  return <h2>Payments</h2>;
}

function Reservations() {
  return <h2>Reservations</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}


function App() {

    return(
      <div className="layout">

        <Leftbar />
        
        <div className="main-content">

          <Topbar /> {/*Stays constant across all pages*/}

          <div className="page-content">

            {/*Routes will go here*/}
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Overview />} />  //the app opens on overview

            </Routes>

          </div>

        </div>

        <Rightbar />

      </div>
    );


}
export default App
