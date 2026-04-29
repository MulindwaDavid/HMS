import { MdNotifications, MdDarkMode, MdRefresh } from "react-icons/md";



function Topbar() {
      
    return(
        <div className="topbar">     

            {/*RIGHT: Icons */}
            <div className="topbar-right">
                <MdNotifications size={20} />
                <MdDarkMode size={20} />
                <MdRefresh size={20} />

            </div>

        </div>
    );

}

export default Topbar