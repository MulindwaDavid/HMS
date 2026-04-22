
{/*Mock Data */}
const tenants = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        phone: "0700000000",
        email: "john@example.com",
        room: "A1",
        dateIn: "2026-04-01",
        dateOut: "2026-06-01",
        status: "Active",
    },

       {
        id: 2,
        firstName: "Mary",
        lastName: "Jane",
        phone: "0775000000",
        email: "mary@example.com",
        room: "B2",
        dateIn: "2026-03-15",
        dateOut: "2026-05-15",
        status: "pending",
    },
];



function Tenants(){


    return(
        <div className="tenant-page">

        {/*HEADER*/}
        <div className="tenants-header">
            
            {/*Left*/}
            <h3>Tenants</h3>

            {/*Middle-section*/}
            <input type="text" 
            className="search-input"
            placeholder="Search tenants"
             />

            {/*RIGHT*/}
            <div className="tenant-controls">
                <select className="control-select">
                    <option>show 10</option>
                    <option>show 20</option>
                    <option>show 30</option>
                </select>

                <button className="add-tenant-button">
                    + Add
                </button>
            </div>
        </div>


        {/*TABLE SECTION*/}
        <div className="table-section">
            <table className="tenants-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Room</th>
                        <th>Date In</th>
                        <th>Date Out</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {/*Rendering the mock data*/}
                    {tenants.map((tenants) => (
                        <tr key={tenants.id}>

                            <td>{tenants.id}</td>
                            
                            {/*Full name*/}
                            <td>{tenants.firstName} {tenants.lastName}</td>
                            <td>{tenants.phone}</td>
                            <td>{tenants.email}</td>
                            <td>{tenants.room}</td>
                            <td>{tenants.dateIn}</td>
                            <td>{tenants.dateOut}</td>
                            
                            <td className={`status ${tenants.status.toLowerCase()}`}>{tenants.status}</td>

                            <td>
                                <button className="action-btn">View</button>
                                <button className="action-btn">Edit</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/*MODAL OVERLAY*/}
        <div className="modal_overlay">
            <div className="modal">
                {/*Form will go here*/}
            </div>
        </div>

        </div>
    );
}

export default Tenants