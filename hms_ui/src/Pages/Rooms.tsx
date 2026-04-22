import React, { useState } from "react";

/* =========================
   FORMAT HELPERS
========================= */
function formatRoomID(block: string, num: number) {
  return `${block}-${String(num).padStart(3, "0")}`;
}

function formatRoomName(block: string, num: number) {
  return `${block}${num}`;
}

/* =========================
   COMPONENT
========================= */
function Rooms() {

  /* =========================
     ROOMS STATE (DATA SOURCE)
  ========================= */
  const [rooms, setRooms] = useState([
    { id: 1, block: "A", roomNumber: 1, capacity: "single", price: 500000, status: "Available" },
    { id: 2, block: "B", roomNumber: 1, capacity: "double", price: 800000, status: "Occupied" },
    { id: 3, block: "A", roomNumber: 15, capacity: "single", price: 500000, status: "Maintenance" },
    { id: 4, block: "C", roomNumber: 1, capacity: "triple", price: 850000, status: "Available" },
    { id: 5, block: "A", roomNumber: 10, capacity: "single", price: 500000, status: "Occupied" },
    { id: 6, block: "B", roomNumber: 5, capacity: "double", price: 800000, status: "Occupied" },
    { id: 7, block: "B", roomNumber: 6, capacity: "double", price: 850000, status: "Occupied" },
    { id: 8, block: "C", roomNumber: 4, capacity: "single", price: 500000, status: "Available" },
    { id: 9, block: "C", roomNumber: 7, capacity: "single", price: 500000, status: "Maintenance" },
    { id: 10, block: "R", roomNumber: 1, capacity: "single", price: 500000, status: "Occupied" },
    { id: 11, block: "R", roomNumber: 11, capacity: "double", price: 800000, status: "Maintenance" },
  ]);

  /* =========================
     UI STATE
  ========================= */
  const [selectedBlock, setSelectedBlock] = useState("All");
  const [showForm, setShowForm] = useState(false);

  /* =========================
     FORM STATE
  ========================= */
  const [formData, setFormData] = useState({
    block: "",
    roomNumber: "",
    capacity: "",
    price: "",
    status: "",
  });

  /* =========================
     FILTER LOGIC
  ========================= */
  const filteredRooms = rooms.filter(
    (room) => selectedBlock === "All" || room.block === selectedBlock
  );

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  /* =========================
     SUBMIT FORM
  ========================= */
  function handleSubmission(e: React.FormEvent) {
    e.preventDefault();

    const newRoom = {
      id: rooms.length + 1,
      block: formData.block,
      roomNumber: formData.roomNumber ? Number(formData.roomNumber) : 0,
      capacity: formData.capacity,
      price: formData.price ? Number(formData.price) : 0,
      status: formData.status,
    };

    setRooms([...rooms, newRoom]);

    setFormData({
      block: "",
      roomNumber: "",
      capacity: "",
      price: "",
      status: "",
    });

    setShowForm(false);
  }

  /* =========================
     UI
  ========================= */
  return (
    <div className="rooms-page">

      {/* HEADER */}
      <div className="rooms-header">
        <h3>Rooms</h3>

        <div className="room-controls">

          {/* SHOW */}
          <select className="control-select">
            <option value="10">show 10</option>
            <option value="20">show 20</option>
            <option value="30">show 30</option>
          </select>

          {/* FILTER */}
          <select
            className="control-select"
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            <option value="All">All blocks</option>
            <option value="A">Block A</option>
            <option value="B">Block B</option>
            <option value="C">Block C</option>
            <option value="R">Block R</option>
          </select>

          {/* ADD BUTTON */}
          <button
            className="add-room-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Room
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="tables-section">
        <table className="rooms-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Room</th>
              <th>Block</th>
              <th>Capacity</th>
              <th>Price (UGX)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRooms.map((room) => (
              <tr key={formatRoomID(room.block, room.roomNumber)}>

                <td>{formatRoomID(room.block, room.roomNumber)}</td>
                <td>{formatRoomName(room.block, room.roomNumber)}</td>
                <td>{room.block}</td>
                <td>{room.capacity}</td>
                <td>{room.price.toLocaleString()} UGX</td>

                <td className={`status ${room.status.toLowerCase()}`}>
                  {room.status}
                </td>

                <td>
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL FORM */}
     {showForm && (
  <div className="modal-overlay">
    <div className="modal-card">

      <h2>Add New Room</h2>

      <form onSubmit={handleSubmission} className="room-form">

        <select name="block" value={formData.block} onChange={handleChange}>
          <option value="">Select Block</option>
          <option value="A">Block A</option>
          <option value="B">Block B</option>
          <option value="C">Block C</option>
          <option value="R">Block R</option>
        </select>

        <input
          type="number"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
        />

        <select name="capacity" value={formData.capacity} onChange={handleChange}>
          <option value="">Capacity</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Status</option>
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <div className="modal-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>

      </form>

    </div>
  </div>
)}

    </div>
  );
}

export default Rooms;