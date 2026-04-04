import React from "react";

function Rightbar() {

  // ================= DATA =================

  // Notifications (system events)
  const notifications = [
    { message: "Payment received from Room 12" },
    { message: "Room 5 assigned to John" },
    { message: "New reservation created" },
  ];

  // Comments (user-related)
  const comments = [
    {
      name: "John",
      room: "Room 12",
      message: "Everything is okay",
      image: "/src/assets/profilepic.jpeg",
    },
    {
      name: "Mary",
      room: "Room 8",
      message: "Water issue in my room",
      image: "/src/assets/profilepic.jpeg",
    },
    {
      name: "David",
      room: "Room 3",
      message: "Requesting cleaning service",
      image: "/src/assets/profilepic.jpeg",
    },
  ];

  // System alerts (critical issues)
  const alerts = [
    { message: "Multiple failed login attempts" },
    { message: "Payment gateway connection failed" },
    { message: "System backup failed" },
  ];

  // ================= UI =================
  return (
    <div>

      {/* NOTIFICATIONS */}
      <div>
        <h3>NOTIFICATIONS</h3>

        {notifications.map((item, index) => {
          return (
            <p key={index}>{item.message}</p>
          );
        })}

      </div>

      {/* COMMENTS */}
      <div>
        <h3>COMMENTS</h3>

        {comments.map((comment, index) => {
          return (
            <div key={index}>

              <img
                src={comment.image}
                alt="profile"
                width="30"
                height="30"
              />

              <div>
                <strong>{comment.name}</strong><br />
                <span>{comment.room}</span>
                <p>{comment.message}</p>
              </div>

            </div>
          );
        })}

      </div>

      {/* SYSTEM ALERTS */}
      <div>
        <h3>SYSTEM ALERTS</h3>

        {alerts.map((alert, index) => {
          return (
            <p key={index}>{alert.message}</p>
          );
        })}

      </div>

    </div>
  );
}

export default Rightbar;