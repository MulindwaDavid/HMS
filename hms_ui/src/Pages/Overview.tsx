

function Overview(){


    return(
        <div className="overview">
            
            {/* ===== SECTION 1: STATS ===== */}
            <div className="stats-section">
                <div className="card">Total Tenants</div>
                <div className="card">Rooms</div>
                <div className="card">Payments</div>
                <div className="card">Maintenance</div>
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