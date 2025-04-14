import { createContext } from "react";
import { Conversations } from "../types"

type ConversationContextType ={
    conversation?: Conversations;
    updateConversations: (data: Conversations) => void;
}


export const ConversationContext  = createContext<ConversationContextType>({
    updateConversations:()=>{}
});