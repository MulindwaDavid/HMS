import type { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdPayments } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

import { MdSettings } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";

import { NavLink } from "react-router-dom";


interface SidebarItem {
  label: string;
  icon: IconType;
  path: string;
}

function Leftbar() {

  const items: SidebarItem[] = [
    { label: "Overview", icon: MdDashboard, path: "/overview" },
    { label: "Rooms", icon: FaBed, path: "/rooms" },
    { label: "Reports", icon: HiOutlineDocumentReport, path: "/reports" },
    { label: "Payments", icon: MdPayments, path: "/payments" },
    { label: "Reservations", icon: FaCalendarCheck, path: "/reservations" },
    { label: "Comments", icon: FaCommentDots , path: "/comments"},
    { label: "Inventory", icon: FaBox, path: "/inventory"}
  ];

  const settingsItem: SidebarItem[] = [
    {label:"System configuration", icon: MdSettings, path: "/settings"},
    {label:"Activity Log", icon: MdHistory, path: "/history"},
    {label:"Permissions", icon: MdSecurity, path: "/security"},
    {label:"Help", icon: MdHelpOutline, path: "/help"}
  ];

  return (

    <nav>

      <div className="Admin_profile">
        <img src="src/assets/avatar.jpeg" alt="profile-pic" />

        <div>
        <span>KYANDIGA</span><br />
        <span style={{color: "#1e4ed8"}}>SYSTEM-ADMIN</span>
        </div>

      </div>

      <h3 style={{color: "#1e4ed8"}}>DASHBOARDS</h3>

      {items.map(function(item, index) {

        const Icon = item.icon;

        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px"
            }}

            className="sidebar-item"
          >
            
            <NavLink to={item.path}
              className={({ isActive}) => isActive ? "sidebar-btn active" : "sidebar-btn"}
            >
             <Icon size={18} />
            <span>{item.label}</span>
            </NavLink>
          </div>
        );
      })}


      <h3 style={{color: "#1e4ed8"}}> SETTINGS</h3>

        {settingsItem.map(function(item, index) {

          const Icon = item.icon;

          return(

            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px"
            }}
            className="sidebar-item"
            >

              <button className="sidebar-btn">
               <Icon size={18} />
              <span>{item.label}</span>
              </button>
            </div>

          );
        }
        )}

    </nav>

  );
}

export default Leftbar