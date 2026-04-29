

function Reservations(){


    return(
        <div className="reservations-page">
            <div className="top-section">

                <h3>Reservations</h3>
            </div>


            {/*TABLE SECTION*/}
            <div className="table-section">
                <div className="reservations-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tenant</th>
                            <th>Room</th>
                            <th>Date-Booked</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                            <th>Status</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                </div>
            </div>


        </div>
    );
}

export default Reservations