const rooms = [
    {
        ID: 1,
        Room: "A1",
        Block: "A",
        Capacity: "single",
        Price: 500000,
        Status: "Available",
    },

       {
        ID: 2,
        Room: "B2",
        Block: "B",
        Capacity: "double",
        Price: 800000,
        Status: "Occupied",
    },
];



function Rooms(){

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
                <select className="control-select">
                    <option>All blocks</option>
                    <option>Block A</option>
                    <option>Block B</option>
                    <option>Block C</option>
                    <option>Block D</option>
                    <option>Block R</option>
                </select>

                {/* Add room button */}
                <button className="add-room-btn">
                    + Add Room
                </button>

                </div>

            </div>

            {/* Table */}
            <div className="tables-section">
                <div className="rooms-table">
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
                        {rooms.map((rooms) => (
                            <tr key={rooms.ID}>

                                <td>{rooms.ID}</td>
                                <td>{rooms.Room}</td>
                                <td>{rooms.Block}</td>
                                <td>{rooms.Capacity}</td>
                                

                                <td>{rooms.Price.toLocaleString()} UGX 
                                </td>

                                <td className={`status ${rooms.Status.toLowerCase()}`}>
                                    {rooms.Status}
                                </td>

                                <td>
                                    <button className="action-btn">View</button>
                                    <button className="action-btn">Edit</button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </div>

            </div>
        </div>
        
    );

}

export default Rooms