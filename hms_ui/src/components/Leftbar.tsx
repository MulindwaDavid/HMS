import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";

//Icons
import { MdDashboard, MdPayments, MdSettings } from "react-icons/md";
import { FaBed, FaCalendarCheck } from "react-icons/fa";

//Types
interface SidebarItem {
    label: string;
    icon: IconType;
    path: string;
}

//component
 function Leftbar() {
    const navigate = useNavigate();

    //Dashboard items
    const dashboardItems: SidebarItem[] = [
        {label: "Overview", icon: MdDashboard, path: "/overview"},
        {label: "Rooms", icon: FaBed, path: "/rooms"},
        {label: "Payments", icon: MdPayments, path: "/payments"},
        {label: "Reservations", icon: FaCalendarCheck, path: "/reservations"},
    ];

    const settingsItems: SidebarItem[] = [
        {label: "Settings", icon: MdSettings, path: "/settings"},
    ];

    return(
        <nav>
            {/*PROFILE*/}
            <div className="profile">
                <img src="src/assets/profilepic.jpeg" alt="profile-pic" />
                <div>
                    <span>CUSTODIAN</span>
                    <span>SYSTEM-ADMIN</span>
                </div>
            </div>

            {/*DASHBOARD SECTION*/}

            <div>
                <h3>DASHBOARDS</h3>

                {dashboardItems.map((item, index) => {
                    const Icon = item.icon;

                    return(
                        <button 
                        key={index}
                        className="sidebar-btn"
                        onClick={() => navigate(item.path)}
                        >
                        <Icon />
                        <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/*SETTINGS SECTION*/}

            <div>
                <h3>SETTINGS</h3>

                {settingsItems.map((item, index) => {
                    const Icon = item.icon;

                    return(
                        <button
                        key={index}
                        className="sidebar-btn"
                        onClick={() => navigate(item.path)}
                        >
                        <Icon />
                        <span>{item.label}</span>
                        </button>
                    );

                })}
            </div>
        </nav>
    );
 }


 export default Leftbar