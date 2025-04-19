
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import user1 from '../images/conversation2.jpeg';

import { RxSpeakerLoud } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { RiAddBoxLine } from "react-icons/ri";
import { LuSticker } from "react-icons/lu";
import { MdInsertEmoticon } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import ChatContainer from "./ChatContainer";
import { useContext, useState } from "react";
import { ConversationContext } from "../utils/context/ConversationContext";
import { toast } from "react-toastify/unstyled";
import { createMessage } from "../utils/api";
import { MessageContext } from "../utils/context/MessageContext";
type Props={
    isOpen: boolean,
    boxRef: React.RefObject<HTMLDivElement>,
    clickToggleNav_v1: ()=> void
}


function BodyChatMain({isOpen,boxRef,clickToggleNav_v1}:Props) {
    const [messageText,setMessageText] = useState<string>("");
    const { updateMessage} = useContext(MessageContext);


    const [conDefaut, setConDefaut] = useState({
        "createdAt": "2025-04-13T19:53:59.640Z",
        "creator": {id: 4, email: 'today2@gmail.com', username: 'today2 123123123'},
        "id": 1011,
        "recipient": {id: 1, email: 'john@gmail.com', username: 'john Morgan 1231312'}
    })
    const { conversation} = useContext(ConversationContext);
    function onclickSendMessage (){
        try {
            if(conversation != undefined && conversation.id !== 1011 ){
                if(messageText !== ""){
                    createMessage({content: messageText, conversationId: conversation.id}).then(({data})=>{
                        setMessageText("")
                    }).catch((err)=>{
                        console.log(err)
                    })
                }else {
                    toast.error("Required enter message", {
                        position: "top-center"
                    })
                }
                
            }else {
                toast.error("Send message fail", {
                    position: "top-center"
                  })
            }
        } catch (error) {
              toast.error("Send message fail", {
                    position: "top-center"
                })
        }


  }


  return (
    <div ref={boxRef} id="chatMain" className={isOpen ? "w-conversation_500 body_chat h-[100vh] relative z-1 all-transition": "w-conversation_400 body_chat h-[100vh] relative z-1 all-transition"}>
        <div className="w-[100%]">
            <div className="w-[100%] h-[100px] border-b-1 border-b-[#7f838433]">
                <div className="d-flex-center-space-between h-[100px] p-[20px]">
                    <div className="d-flex-center">
                        <div className="btn-green-light w-[35px] h-[35px] rounded-[50%] mr-[10px]  md:w-[0px] md:h-[0px]" onClick={clickToggleNav_v1}>
                            <FaChevronLeft/>
                        </div>
                        <div className="relative w-[60px] h-[60px] ">
                            <img className="w-[60px] h-[60px] rounded-[50%]" src={user1} alt="" />
                            <div  className="bg-[#01aa85] w-[15px] h-[15px] absolute border-2 border-white rounded-[50%] bottom-0 right-0"></div>
                        </div>
                        
                        <div className="pl-[20px] sm:hidden lg:block">
                            <h4 className="font-semibold text-[18px]">{conversation?.recipient.username}</h4>
                            <p className="text-[15px] text-[#7f8384]">online</p>
                        </div>
                    </div>


                    <div className="">
                        <ul className="d-flex-center">
                            <li className="d-flex-center h-[22px] text-[20px] font-semibold text-[#01aa85] w-[52px] border-r-1 border-r-[#01aa85]">
                                <RxSpeakerLoud/>
                            </li>
                            <li className="d-flex-center h-[22px] text-[20px] font-semibold text-[#01aa85] w-[52px] border-r-1 border-r-[#01aa85]">
                                <LuSearch/>
                            </li>
                            <li className="d-flex-center h-[22px] text-[20px] font-semibold text-[#01aa85] w-[52px] border-r-1 border-r-[#01aa85]">
                                <HiOutlineVideoCamera/>
                            </li>
                            <li className="d-flex-center h-[22px] text-[20px] font-semibold text-[#01aa85] w-[52px] border-r-1 border-r-[#01aa85]">
                                <FiPhone/>
                            </li>
                            <li className="d-flex-center h-[22px] text-[20px] font-semibold text-[#01aa85] w-[52px] border-r-1 border-r-[#01aa85]">
                                <LuLayoutPanelLeft/>
                            </li>
                            <li className="h-[42px] w-[42px] font-semibold text-[25px] rounded-xl bg-white d-flex-center text-[#01aa85] ml-[10px]">
                                <PiDotsThreeOutlineVerticalFill/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ChatContainer/>

            <div className="w-[100%]">
                <div style={{
                    bottom: "40px"
                }} className="absolute w-[100%] z-2">
                    <div className="w-[95%] m-auto rounded-xl h-[60px] bg-white">
                        <div className="h-[60px] w-[100%] d-flex-center-space-between"> 
                            <div className="d-flex-center ml-[20px]">
                                <div className="w-[42px] mr-[15px] h-[42px] rounded-[50%] d-flex-center bg-[#e3f7f3] text-[20px] text-[#01aa85] bg-[">
                                    <RiAddBoxLine/>
                                </div>
                                <div className="w-[42px] mr-[15px] h-[42px] rounded-[50%] d-flex-center bg-[#e3f7f3] text-[20px] text-[#01aa85] bg-[">
                                    <LuSticker/>
                                </div>
                                <div className="w-[42px] mr-[15px] h-[42px] rounded-[50%] d-flex-center bg-[#e3f7f3] text-[20px] text-[#01aa85] bg-[">
                                    <MdInsertEmoticon/>
                                </div>
                            </div>
                            
                            <div className="w-[65%]">
                                <input onChange={(e)=> setMessageText(e.target.value)} name="message" value={messageText} className="w-[100%] outline-none p-[10px]" placeholder="Write your message..."  type="text" />
                            </div>

                            <div className="d-flex-center ml-[20px]">
                                <div className="w-[42px] mr-[15px] h-[42px] rounded-[50%] d-flex-center bg-[#e3f7f3] text-[20px] text-[#01aa85]">
                                    <FaMicrophone/>
                                </div>
                                <div 
                                    onClick={onclickSendMessage}
                                    className="w-[42px] mr-[15px] h-[42px] rounded-[50%] d-flex-center bg-[#01aa85] text-[20px] text-white"
                                >
                                    <IoSend/>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodyChatMain