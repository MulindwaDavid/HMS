import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

//Icons
import { MdDashboard, MdPayments, MdPeople, MdHistory, MdSecurity, MdHelpOutline, MdSettings } from "react-icons/md";
import { FaBed, FaCalendarCheck } from "react-icons/fa";

//Types
interface SidebarItem {
    label: string;
    icon: IconType;
    path: string;
}

//component
 function Leftbar() {
    

    //Dashboard items
    const dashboardItems: SidebarItem[] = [
        {label: "Overview", icon: MdDashboard, path: "/overview"},
        {label: "Tenants", icon: MdPeople, path: "/tenants"},
        {label: "Rooms", icon: FaBed, path: "/rooms"},
        {label: "Payments", icon: MdPayments, path: "/payments"},
        {label: "Reservations", icon: FaCalendarCheck, path: "/reservations"},
    ];

    const settingsItems: SidebarItem[] = [
        {label: "System Configuration", icon: MdSettings, path: "/settings"},
        {label: "Activity Log", icon: MdHistory, path: "/activity-log"},
        {label: "Permissions", icon: MdSecurity, path: "/permissions"},
        {label: "Help", icon: MdHelpOutline, path: "/help"},
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
                       <NavLink 
                       to={item.path}
                       key={index}
                       className={({ isActive }) =>
                    isActive ? "sidebar-btn active": "sidebar-btn"
                    }
                    
                    >
                        <Icon />
                        <span>{item.label}</span>
                       </NavLink>
                    );
                })}
            </div>

            {/*SETTINGS SECTION*/}

            <div>
                <h3>SETTINGS</h3>

                {settingsItems.map((item, index) => {
                    const Icon = item.icon;

                    return(
                       <NavLink
                       to={item.path}
                       key={index}
                       className={({ isActive }) => 
                       isActive ? "sidebar-btn active": "sidebar-btn"}
                    >
                        <Icon />
                        <span>{item.label}</span>
                       </NavLink>
                    );

                })}
            </div>
        </nav>
    );
 }


 export default Leftbar