import { useContext, useEffect, useState } from 'react';
import user1 from '../images/conversation2.jpeg';
import { Message } from '../utils/types';
import { ConversationContext } from '../utils/context/ConversationContext';
import { getMessagefollowCon } from '../utils/api';
import { AuthContext } from '../utils/context/AuthContext';
function ChatContainer() {
    const [arrMessage, setArrMessage] = useState<Message[]>([]);
    const {conversation} = useContext(ConversationContext);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        if(conversation != undefined){  
            getMessagefollowCon(conversation?.id).then(({data})=>{
                setArrMessage(data);
            })
        }

    },[conversation])
  return (
    <div className="w-[100%] chat_container">
        {
           arrMessage.map((item, index)=>(
            <div key={index} className={item.author.id === user?.id ? "flex-row-reverse flex-end mt-[10px] ml-[10px]":"flex flex-end mt-[10px] ml-[10px] "} >
                <div className="relative w-[55px] h-[55px]">
                    <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
                </div>
                <div className={item.author.id === user?.id ? "chat mr-[10px]":"chat ml-[10px]"}>
                    <div className={item.author.id === user?.id ? "max-w-[350px] p-[10px] radius-right-bottom word-wrap bg-[#01aa85] text-white" : "bg-white max-w-[350px] p-[10px] radius-left-bottom word-wrap"} >
                       {item.content}
                    </div>
                    <span className={item.author.id === user?.id ?"mt-[5px] text-[15px] max-w-[350px] text-[#7f8384] text-right flex-row-reverse flex-end" :"mt-[5px] text-[15px] text-[#7f8384]"}>8:19 PM</span>
                </div>
            </div>

           )) 
        }
    </div>
  )
}

export default ChatContainer