import React, { useContext } from 'react'
import avatar from '../images/download.png';
import { RiSearchLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { listUser, listConversation } from "../data";
import moment from "moment";
import { AuthContext } from '../utils/context/AuthContext';
import { FaChevronRight } from "react-icons/fa6";
type Props ={
    clickToggleNavMain : ()=>void,
    boxRef: React.RefObject<HTMLDivElement>,
    clickToggleNav_v2: ()=>void
}


function NavbarListConversation({clickToggleNavMain,boxRef,clickToggleNav_v2}:Props) {
    const {user} = useContext(AuthContext);
    return (
        <div ref={boxRef} id='listConversations' className="all-transition lg:w-[400px] md:w-[300px] sm:w-[100%] all-transition h-[100vh] bg-[white] listConversations">
            <div className="w-[100%] h-[100px]  border-b-1 border-b-[#7f838433]">
                <div className="d-flex-center-space-between h-[100px] pl-[20px] pr-[20px] ">
                    <div className="d-flex-center"> 
                        <img src={avatar} alt="" />
                        <div className="ml-[20px]">
                            <h4 className="font-semibold text-[18px]">{user?.email}</h4>
                            <p className="text-[15px] text-[#7f8384]">{user?.username}</p>
                        </div>
                    </div>
                    <div className='d-flex-center'>
                        <div className="h-[42px] w-[42px] font-semibold rounded-xl bg-[#01aa8526] d-flex-center text-[#01aa85] mr-[10px]" onClick={clickToggleNavMain}>
                            <PiDotsThreeOutlineVerticalFill/>
                        </div>
                        <div className="btn-green-light w-[35px] h-[35px] rounded-[50%] md:w-[0px] md:h-[0px] " onClick={clickToggleNav_v2}>
                            <FaChevronRight/>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="sider-user w-[100%] pb-[20px] border-b-1 border-b-[#7f838433]">
                <div className="w-[100%] d-flex-center-space-between pl-[20px] pr-[20px] pt-[10px] ">
                    <h4 className="font-semibold text-[18px]">Status</h4>
                    <p className="text-[#01aa85]">View All</p>
                </div>
                <ul className="w-[100%] d-flex-center-space-between slide-scroll pl-[20px] pt-[20px]">
                    {
                        listUser.map((data,index)=>(
                            <li key={index} className="mr-[10px]"> 
                                <div className="h-[70px] w-[70px]  d-flex-center rounded-[50%] border-2 border-[#01aa85]">
                                    <img src={data.avatar} className="h-[60px] w-[60x] rounded-[50%]" alt="" />
                                </div>
                                <div className="text-center text-[12px] pt-[10px] w-[50px] ">
                                    <p className="text-elllispis">{data.username}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="user-conversation w-[100%]">
                <div className="w-[100%] mt-[10px] pr-[20px] pl-[20px] d-flex-center-space-between">
                    <div className="font-semibold text-[18px]">
                        <h4>Message (20)</h4>
                    </div>
                    <div className="w-[42px] h-[42px] bg-[#eff1f2] d-flex-center rounded-[50%]">
                        <RiSearchLine/>
                    </div>
                </div>
                <div className="w-[100%]">
                    <ul className="w-[100%] conversations">
                        {
                            listConversation.map((data,index)=>(
                                <li key={index} className="w-[100%] h-[100px] border-b-1 border-b-[#7f838433] conversation-item  d-flex-center-space-between pl-[20px] pr-[20px]">
                                    <div className="d-flex-center">
                                        <img className="h-[50px] w-[50x] rounded-[50%]" src={data.avatar} alt="" />
                                        <div className="ml-[10px]">
                                            <h4 className="font-semibold text-[15px] ">{data.username}</h4>
                                            <p className="text-[#7f8384] text-[15px] lastMessage">{data.lastMessaged}</p>
                                        </div>
                                    </div>
                                    <div className="text-[15px] text-[#7f8384]">
                                        <p>{moment(data.date).startOf("hour").fromNow() }</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarListConversation