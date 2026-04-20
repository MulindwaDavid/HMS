import React, { useState } from "react";  //state controls the filter.


/* FORMATTING FUNCTIONS */
function formatRoomID(block: string, num: number) {
  return `${block}-${String(num).padStart(3, "0")}`;
}

function formatRoomName(block: string, num: number) {
  return `${block}${num}`;
}


function Rooms(){
  const [rooms, setRooms]= useState([
  {
    id: 1,
    block: "A",
    roomNumber: 1,
    capacity: "single",
    price: 500000,
    status: "Available",
  },
  {
    id: 2,
    block: "B",
    roomNumber: 1,
    capacity: "double",
    price: 800000,
    status: "Occupied",
  },
  {
    id: 3,
    block: "A",
    roomNumber: 15,
    capacity: "single",
    price: 500000,
    status: "Maintenance",
  },
  {
    id: 4,
    block: "C",
    roomNumber: 1,
    capacity: "triple",
    price: 850000,
    status: "Available",
  },
  {
    id: 5,
    block: "A",
    roomNumber: 10,
    capacity: "single",
    price: 500000,
    status: "Occupied",
  },
  {
    id: 6,
    block: "B",
    roomNumber: 5,
    capacity: "double",
    price: 800000,
    status: "Occupied",
  },
  {
    id: 7,
    block: "B",
    roomNumber: 6,
    capacity: "double",
    price: 850000,
    status: "Occupied",
  },
  {
    id: 8,
    block: "C",
    roomNumber: 4,
    capacity: "single",
    price: 500000,
    status: "Available",
  },
  {
    id: 9,
    block: "C",
    roomNumber: 7,
    capacity: "single",
    price: 500000,
    status: "Maintenance",
  },
  {
    id: 10,
    block: "R",
    roomNumber: 1,
    capacity: "single",
    price: 500000,
    status: "Occupied",
  },
  {
    id: 11,
    block: "R",
    roomNumber: 11,
    capacity: "double",
    price: 800000,
    status: "Maintenance",
  },
]);

    /*Filter state */
    const [selectedBlock, setSelectedBlock] = useState("All");

    const [showForm, setShowForm] = useState(false);

    /* Filtering Logic*/
    const filteredRooms = selectedBlock === "All" ? rooms : rooms.filter((room) => room.block === selectedBlock);

    /*FORM STATE :This captures input*/
    const [formData, setFormData] = 
    useState({
      block: "",
      roomNumber: "",
      capacity: "",
      price: "",
      status: "",
      
    });

    /*Form logic: Handle input changes*/
    function handleChange (e:
      React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
      const {name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    }

    /*Form submission */
    function handleSubmission (e: React.FormEvent) {
      e.preventDefault();

      const newRoom = {
        id: rooms.length + 1,
        block: formData.block,
        roomNumber: Number(formData.roomNumber),
        capacity: formData.capacity,
        price: Number(formData.price),
        status: formData.status,
      };

      /*Visibility form */
      

      setRooms([...rooms, newRoom]); //updates table
      setShowForm(false);  //close modal

      //reset form
      setFormData({
        block: "",
        roomNumber: "",
        capacity: "",
        price: "",
        status: "",
      });
    }


    return(
        <div className="rooms-page">
            
            {/*HEADER*/}
            <div className="rooms-header">

                {/*LEFT: Title */}
                <h3>Rooms</h3>

                {/*RIGHT: controls */}
                <div className="room-controls">

                {/*show entries*/}
                <select className="control-select">
                    <option value="10">show 10</option>
                    <option value="20">show 20</option>
                    <option value="30">show 30</option>
                </select>

                {/* filters */}
                <select className="control-select"
                onChange={(e) => setSelectedBlock(e.target.value)}
                >
                    <option value= "All">All blocks</option>
                    <option value= "A">Block A</option>
                    <option value= "B">Block B</option>
                    <option value= "C">Block C</option>
                    <option value= "R">Block R</option>
                </select>

                {/* Add room button */}
                <button className="add-room-btn"
                onClick={() => setShowForm(true)}
                >
                    + Add Room
                </button>

                </div>

            </div>

            {/* Table */}
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
                        <tr key={room.id}>

                          {/* AUTO GENERATED ID */}
                            <td>{formatRoomID(room.block, room.roomNumber)}</td>

                            {/* AUTO GENERATED ROOM NAME */}
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

                {showForm &&(
                  <div className="modal-overlay">
                    <div className="modal">

                      <h2>Add New Room</h2>

                      <form onSubmit={handleSubmission} className="room-form">
                        <select name="block" value={formData.block} onChange={handleChange}>
                          <option value="">select block</option>
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
                          <option value="available">Available</option>
                          <option value="occupied">Occupied</option>
                          <option value="maintenance">Maintenance</option>
                        </select>

                        <div className="form-actions">
                          <button type="submit">
                            Save
                          </button>

                          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                        </div>
                          
                        
                      </form>
                    </div>
                  </div>
                )}

            </div>
        </div>
        
    );

}

export default Rooms

