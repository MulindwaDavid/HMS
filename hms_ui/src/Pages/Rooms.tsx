import { useState } from "react";  //state controls the filter.

const rooms = [
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
];

/* FORMATTING FUNCTIONS */
function formatRoomID(block: string, num: number) {
  return `${block}-${String(num).padStart(3, "0")}`;
}

function formatRoomName(block: string, num: number) {
  return `${block}${num}`;
}


function Rooms(){

    const [selectedBlock, setSelectedBlock] = useState("All");

    /* Filtering Logic*/
    const filteredRooms = selectedBlock === "All" ? rooms : rooms.filter((room) => room.block === selectedBlock);

    return(
        <div className="rooms-page">
            
            {/*HEADER*/}
            <div className="rooms-header">

                {/*LEFT: Title */}
                <h2>Rooms</h2>

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
                <button className="add-room-btn">
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

            </div>
        </div>
        
    );

}

export default Rooms