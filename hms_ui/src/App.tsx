import { Routes, Route } from "react-router-dom";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Topbar from "./components/Topbar";

import Overview from "./Pages/Overview";
import Tenants from "./Pages/Tenants";
import Log from "./Pages/Log";
import Permissions from "./Pages/Permissions";
import Help from "./Pages/Help";
import Rooms from "./Pages/Rooms";
import Payments from "./Pages/Payments";
import Reservations from "./Pages/Reservations";
import Settings from "./Pages/Settings";




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
              <Route path="/tenants"  element={<Tenants />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/activity-log" element={<Log />} />
              <Route path="/permissions" element={<Permissions />} />
              <Route path="/help" element={<Help />} />
              <Route path="/" element={<Overview />} />  //the app opens on overview

            </Routes>

          </div>

        </div>

        <Rightbar />

      </div>
    );


}
export default App
