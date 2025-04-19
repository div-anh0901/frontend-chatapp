import { useContext, useEffect, useRef, useState } from 'react';
import user1 from '../images/conversation2.jpeg';
import { Message } from '../utils/types';
import { ConversationContext } from '../utils/context/ConversationContext';
import { getMessagefollowCon } from '../utils/api';
import { AuthContext } from '../utils/context/AuthContext';
import { SocketContext } from '../utils/context/SocketContext';
import {addMessage, fetchMesagesThunk} from '../utils/store/MessageSlice'
import { AppDispatch, RootState } from '../utils/store';
import { useDispatch, useSelector } from 'react-redux';
function ChatContainer() {
    const {conversation} = useContext(ConversationContext);
    const chatBoxRef = useRef<HTMLDivElement>(null);
    const socket = useContext(SocketContext)
    const {user} = useContext(AuthContext)
    const dispatch = useDispatch<AppDispatch>();
    const messages = useSelector(
        (state: RootState) => state.message.messages
      );

   

    useEffect(()=>{
            if(conversation != undefined){
                dispatch(fetchMesagesThunk(conversation.id));
            }
             return()=>{
               socket.on("onMessage", data=>{
                    dispatch(addMessage({content: data.content, id: data.id, author: data.author, createdAt: data.createdAt}))
                })
            }
    },[conversation]);
  return (
    <div className="w-[100%] chat_container" ref={chatBoxRef}>
        {
           messages.map((item, index)=>(
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