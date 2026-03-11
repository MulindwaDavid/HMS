import React from "react";

interface SidebarItem {
  label: string;
  icon: string;
}

function Leftbar() {

  const items: SidebarItem[] = [
    { label: "Overview", icon: "#" },
    { label: "Rooms", icon: "#" },
    { label: "Reports", icon: "#" },
    { label: "Payments", icon: "#" },
    { label: "Reservations", icon: "#" },
    { label: "Comments", icon: "#" },
    { label: "Inventory", icon: "#" }
  ];

  const settingsItem: SidebarItem[] = [
    {label:"System configuration", icon: "#"},
    {label:"Activity Log", icon: "#"},
    {label:"Permissions", icon: "#"},
    {label:"Help", icon: "#"}
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
            <button className="sidebar-btn">
            <img src={item.icon} alt="icon" />
            <span>{item.label}</span>
            </button>
          </div>
        );
      })}


      <h3 style={{color: "#1e4ed8"}}> SETTINGS</h3>

        {settingsItem.map(function(item, index) {

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
              <img src={item.icon} alt="icon" />
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