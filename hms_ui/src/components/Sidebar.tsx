import React from "react";




function Sidebar(){


    return(

        <nav>

            <div>
                <img src="src/assets/avatar.jpeg" alt=" profile-pic" />
                <span>KYANDIGA</span> <br />
                <span>SYSTEM-ADMIN</span>             
                
            </div>

            <h3>DASHBOARDS</h3>

            <div>
                <img src="#" alt="pic" />
                <button>Overview</button>
            </div>

            <div>
                <img src="#" alt="pic" />
                <button>Rooms</button>
            </div>

            <div>
                <img src="#" alt="pic" />
                <button>Reports</button>
            </div>

            <div>
                <img src="#" alt="pic" />
                <button>Payments</button>
            </div>
            
            <div>
                <img src="#" alt="pic" />
                <button>Reservations</button>
            </div>
            
            <div>
                <img src="#" alt="pic" />
                <button>Comments</button>
            </div>

             <div>
                <img src="#" alt="pic" />
                <button>Inventory</button>
            </div>

        </nav>




    );

}

export default Sidebar