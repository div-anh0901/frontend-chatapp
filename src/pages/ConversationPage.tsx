
import "../styles/conversation.css";
import NavbarListConversation from "../components/NavbarListConversation";
import BodyChatMain from "../components/BodyChatMain";
import NavBarMain from "../components/NavBarMain";
import { useContext, useRef, useState,useEffect } from "react";
import { ConversationContext } from "../utils/context/ConversationContext";
import { MessageContext } from "../utils/context/MessageContext";
import { Conversations , Message} from "../utils/types";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/store";
import { fetchConversationsThunk } from "../utils/store/ConversationSlice";


function ConversationPage(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [
        conversation,
        setConversation,
    ] = useState<Conversations>();

    const [hightChatBox,updateHightChatBox ] = useState<number>();
    const [chatContainerRef,linkContainerRef ] = useState<HTMLDivElement>();
    const [
        message,
        setMessage,
    ] = useState<Message[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {

        dispatch(fetchConversationsThunk());
    },[])

    function sendMessage (data: Message){
        setMessage([...message, data]);
    }

    const boxRef = useRef<HTMLDivElement>(null);
    const socket = useContext(SocketContext);
    function clickToggleNavMain(){
        setIsOpen(!isOpen)
    }

    function clickToggleNav_v1(){
        const element = document.getElementById("chatMain");
        const element_v1 = document.getElementById("listConversations");
        if (element) {
            element.style.display="none"
        }
        if (element_v1) {
            element_v1.style.display="block"
        }
    }


    function clickToggleNav_v2(){
        const element = document.getElementById("listConversations");
        const element_v1 = document.getElementById("chatMain");
        if (element) {
            element.style.display="none"
        }

        if (element_v1) {
            element_v1.style.display="block"
        }
    }
    return (
        <div className="body">
            <div className="d-flex-center w-[100%] h-[100%]" >
                <ConversationContext.Provider value={{
                        conversation, 
                        updateConversations: setConversation,
                        hightChatBox,
                        updateHightChatBox,
                        chatContainerRef,
                        linkContainerRef
                    }}>
                        <MessageContext.Provider value={{message, updateMessage: sendMessage}}>
                        <NavBarMain isOpen={isOpen} />
                            <NavbarListConversation 
                                clickToggleNavMain={clickToggleNavMain} 
                                boxRef={boxRef} 
                                clickToggleNav_v2={clickToggleNav_v2}   
                            />
                            <BodyChatMain isOpen={isOpen} boxRef={boxRef} clickToggleNav_v1={clickToggleNav_v1}/>
                        </MessageContext.Provider>
                </ConversationContext.Provider>
            </div>
        </div>
    )

}

export default ConversationPage