import { useNavigate } from "react-router-dom";
import { MdPeople, MdPayments, MdBuild } from "react-icons/md";
import { FaBed } from "react-icons/fa";

//Data structures for cards

const stats = [
    {
        title: "Total Tenants",
        value: 128,
        sub: "+12 new tenants",
        icon: MdPeople,
        path: "/tenants",
    },

    {
        title: "Rooms",
        value: 40,
        sub: "+5 new rooms",
        icon: FaBed,
        path: "/rooms",
    },

    {
        title: "Payments",
        value: "UGX 12.5M",
        sub: "+3 pending",
        icon: MdPayments,
        path: "/payments",
    },

    {
        title: "Maintenance",
        value: 5,
        sub: "pending tasks",
        icon: MdBuild,
        path: "/maintenance",
    },
];



function Overview(){

    const navigate = useNavigate();

  
    return(
        <div className="overview">
            <div className="top_section">
                <h3>Overview</h3>
            </div>
            {/* ===== SECTION 1: STATS SECTION ===== */}

              <div className="stats-section">
        {stats.map((item, index) =>{
            const Icon = item.icon;

            return(
                <div 
                className="card stat-card"
                key={index}
                onClick={() => navigate(item.path)}
                >
                    <div className="card-header">
                        <span>{item.title}</span>
                        <Icon className="card-icon" size={20} />
                    </div>

                    <h2 className="card-value">{item.value}</h2>
                    <span className="card-sub">{item.sub}</span>

                </div>
            );
        })}
    </div>
        
            {/* ===== SECTION 2: OCCUPANCY ===== */}
            <div className="chart-section">
                <div className="card">
                    <h2>Room Occupancy: The current status of all Rooms</h2>
                    <div className="chart-placeholder">
                        bar graph here
                    </div>
                </div>
            </div>

            {/* ===== SECTION 3: TENANT TABLES */}
            <div className="table-section">
                <div className="card">
                    <h2>Tenant List</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>status</th>
                                <th>Contact</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Active</td>
                                <td>07560-98574</td>
                            </tr>

                            <tr>
                                <td>Mary Jane</td>
                                <td>Pending</td>
                                <td>0775-097231</td>
                            </tr>

                            <tr>
                                <td>David Junior</td>
                                <td>Available</td>
                                <td>0703-570313</td>
                            </tr>

                            <tr>
                                <td>Kisakye Jovia</td>
                                <td>Available</td>
                                <td>0778-865743</td>
                            </tr>

                            <tr>
                                <td>Patience Kirabo</td>
                                <td>Unavailable</td>
                                <td>0726-456378</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    );
}

export default Overview