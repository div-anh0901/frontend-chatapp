import { createContext } from "react";
import { Conversations } from "../types"

type ConversationContextType ={
    conversation?: Conversations;
    updateConversations: (data: Conversations) => void;
    hightChatBox?: number;
    updateHightChatBox: (hight: number) => void;
    chatContainerRef?: HTMLDivElement;
    linkContainerRef: (current: HTMLDivElement) => void


}


export const ConversationContext  = createContext<ConversationContextType>({
    updateConversations:()=>{},
    updateHightChatBox:()=> {},
    linkContainerRef:()=>{}
});