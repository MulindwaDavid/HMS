import { MdError, MdWarning, MdInfo } from "react-icons/md";

function Rightbar() {
    //Data
    //Notifications (system events)
    const notifications = [
        {message: "Payment recieved from Room 12"},
        {message: "Room 5 assigned to John"},
        {message: "New Reservation created"},
    ];

    //Comments (user-related)

    const comments = [
        {
            name: "John",
            room: "Room 12",
            message: "Everything is okay",
            image: "src/assets/avatar.jpeg",
        },

        {
            name: "Mary",
            room: "Room 8",
            message: "Water issue in my room",
            image: "src/assets/image1.jpeg",
        },

        {
            name: "David",
            room: "Room 3",
            message: "Requesting cleaning service",
            image: "src/assets/image2.jpeg",
        },
    ];


        //system alerts (critical issues)
        const alerts = [
            {message: "Multiple failed login attempts",
             icon: MdWarning,   
             type: "warning",
            },
            {message: "Payment gateway connection failed",
             icon: MdError,
             type: "error",
            },
            {message: "System backup failed",
             icon: MdError,
             type: "error",
            },
        ];


    //UI

    return(
        <aside className="rightbar">
            {/*NOTIFICATIONS*/}

            <div>
                <h3>NOTIFICATIONS</h3>
                <ul className="notification-list">
                {notifications.map((item,index) => {
                    return(
                        
                        <li key={index}>{item.message}</li>
                        
                    );
                })}
                </ul>
            </div>
            <div className="divider"/>

            {/*COMMENTS*/}
            <div className="comment">
                <h3>COMMENTS</h3>
                {comments.map((comment, index) => {
                    return(
                        <div key={index} className="entity">

                        <div className="image-persona">
                            
                            <img src={comment.image}
                                alt="profile"
                                width="30"
                                height="30" 
                             />

                             <div className="persona">
                             <strong>{comment.name}</strong><br />
                                <span>{comment.room}</span>
                            </div>

                        </div>


                             <div className="message">
                                <p>{comment.message}</p>
                             </div>
                        </div>                   
                    );
                })}
            </div>
            <div className="divider"/>

            {/* SYSTEM ALERTS*/}
            <div>
                <h3>SYSTEM ALERTS</h3>



                {alerts.map((alert, index) => {
                    const Icon = alert.icon;

                    return(
                        <div key={index}>
                            <div className="alert-item">
                                <Icon size={18}/>
                                <span>{alert.message}</span>                            
                            </div>
                        
                        </div>
                    );
                })}
            </div>

        </aside>
        
    );



}

export default Rightbar