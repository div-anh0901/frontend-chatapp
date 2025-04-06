import logo_chat from '../images/logo_chat.png';
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuSquareUser } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { Link } from 'react-router-dom';
type Props={
    isOpen: boolean;
}
function NavBarMain({isOpen}:Props) {

    //  "w-[100px]  h-[100vh] bg-green_1 pt-[20px]"
  return (
    <div className={isOpen  ? "NavBarMain show h-[100vh] bg-green_1 pt-[20px]": "NavBarMain hide w-[0px]"}>
    <div className='w-[100%] h-[74px] d-flex-center border-b-2 border-[#fff3] pb-[20px]'>
        <img src={logo_chat} className='' alt="" />
    </div>
    <ul className='w-[100%] mt-[20px] mb-[40px]'> 
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <IoChatbubblesOutline/>
        </li>
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <LuSquareUser/>
        </li>
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <IoIosNotificationsOutline/>
        </li>
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <IoDocumentOutline/>
        </li>
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <FaRegStar/>
        </li>
        <li className="header_icon button-effect text-white text-[25px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <IoSettingsOutline/>
        </li>
    </ul>

    <ul className='w-[100%] mt-[20px]'>
    <li className="header_icon button-effect text-white text-[30px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
            <IoMoonOutline/>
        </li>
        <Link to="/login">
            <li className="header_icon button-effect text-white text-[30px] d-flex-center w-[100%] h-[74px] mt-[10px] mb-[10px]">   
                <SlLogout/>
            </li>
        </Link>
        
    </ul>
</div> 
  )
}

export default NavBarMain