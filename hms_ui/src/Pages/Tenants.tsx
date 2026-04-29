import { useState } from "react";

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
    status: "Pending",
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Kato",
    phone: "0703123456",
    email: "david.kato@mail.com",
    room: "A10",
    dateIn: "2026-02-10",
    dateOut: "2026-05-10",
    status: "Active",
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Nabirye",
    phone: "0789123456",
    email: "sarah.nabirye@mail.com",
    room: "C4",
    dateIn: "2026-01-20",
    dateOut: "2026-04-20",
    status: "Checked_out",
  },
  {
    id: 5,
    firstName: "Michael",
    lastName: "Okello",
    phone: "0756789123",
    email: "michael.okello@mail.com",
    room: "B5",
    dateIn: "2026-03-01",
    dateOut: "2026-06-01",
    status: "Active",
  },
  {
    id: 6,
    firstName: "Grace",
    lastName: "Achieng",
    phone: "0709988776",
    email: "grace.achieng@mail.com",
    room: "C7",
    dateIn: "2026-02-05",
    dateOut: "2026-05-05",
    status: "Overdue",
  },
  {
    id: 7,
    firstName: "Paul",
    lastName: "Ssemwogerere",
    phone: "0771234567",
    email: "paul.ssem@mail.com",
    room: "R1",
    dateIn: "2026-03-10",
    dateOut: "2026-06-10",
    status: "Active",
  },
  {
    id: 8,
    firstName: "Linda",
    lastName: "Namutebi",
    phone: "0704455667",
    email: "linda.namutebi@mail.com",
    room: "A15",
    dateIn: "2026-01-15",
    dateOut: "2026-04-15",
    status: "Checked_out",
  },
  {
    id: 9,
    firstName: "Brian",
    lastName: "Mugisha",
    phone: "0783344556",
    email: "brian.mugisha@mail.com",
    room: "B6",
    dateIn: "2026-03-22",
    dateOut: "2026-06-22",
    status: "Pending",
  }
];



function Tenants(){

    {/*Search state*/}
    const [searchTerm, setSearchTerm] = useState("");


    {/*Filtered data*/}
    const filteredTenants = tenants.filter((tenant) => {
        const query = searchTerm.toLowerCase();

        return(
            `${tenant.firstName} ${tenant.lastName}`.toLowerCase().includes(query) ||
            tenant.phone.toLowerCase().includes(query) ||
            tenant.email.toLowerCase().includes(query) ||
            tenant.room.toLowerCase().includes(query) ||
            tenant.status.toLowerCase().includes(query) 
        );
    });


    {/*Form State*/}
    const [showForm, setShowForm] = useState(false);

    return(
        <div className="tenants-page">

        {/*HEADER*/}
        <div className="tenants-header">
            
            {/*Left*/}
            <h3>Tenants</h3>

            {/*Middle-section*/}
            <input type="text" 
            className="search-input"
            placeholder="Search tenants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             />

            {/*RIGHT*/}
            <div className="tenant-controls">
                <select className="control-select">
                    <option>show 10</option>
                    <option>show 20</option>
                    <option>show 30</option>
                </select>

                <button 
                    className="add-tenant-button"
                    onClick={() => setShowForm(true)}
                >
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
                        
                        <th>Room</th>
                        <th>Date In</th>
                        <th>Date Out</th>
                        <th>Email</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {/*Rendering the mock data*/}
                    {filteredTenants.map((tenants) => (
                        <tr key={tenants.id}>

                            <td>{tenants.id}</td>
                            
                            {/*Full name*/}
                            <td>{tenants.firstName} {tenants.lastName}</td>
                            <td>{tenants.phone}</td>
                            <td>{tenants.room}</td>
                            <td>{tenants.dateIn}</td>
                            <td>{tenants.dateOut}</td>
                            <td>{tenants.email}</td>
                            
                            <td className={`status ${tenants.status.toLowerCase()}`}>{tenants.status}</td>

                           

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/*MODAL OVERLAY*/}

        {showForm && (
        <div className="modal_overlay">
            <div className="modal">
                {/*Form will go here*/}

                <button onClick={() => setShowForm(false)}>
                    close 
                </button>
            </div>
        </div>

        )}

        </div>
    );
}

export default Tenants