import { createContext } from "react";
import { Message } from "../types";


type MessageContextType ={
    message?: Message[];
    updateMessage: (data : Message) => void;
}

export const MessageContext = createContext<MessageContextType>({
    updateMessage:()=>{}
});

