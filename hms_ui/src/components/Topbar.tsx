import { MdArrowBack, MdArrowForward, MdNotifications, MdDarkMode, MdRefresh } from "react-icons/md";


function Topbar() {


    return(
        <div className="topbar">

            {/*LEFT: Navigation arrows*/}

            <div className="topbar-left">
                <MdArrowBack size={20} />
                <MdArrowForward size={20} />
            </div>

            {/*CENTER: Search */}

            <div className="topbar-center">
                <input type="text" placeholder="Search..." />
            </div>

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