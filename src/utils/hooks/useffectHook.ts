import { useContext, useEffect, useState } from "react";
import { User } from "../types";
import { getAuthUser } from "../api";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
    const [loading,setLoading] = useState(true);
    const { user, updateUser } = useContext(AuthContext);
    const controller = new AbortController();

    useEffect(()=>{
        getAuthUser().then(({data})=>{
            updateUser(data);
            setTimeout(()=>setLoading(false), 1000)
        }).catch((err)=>{
            toast.error("Doesn't infomation user", {
                position: "top-center"
              } )
              setTimeout(()=>setLoading(false), 1000)
        })
        return ()=>{
            controller.abort()
        }
    },[])

    return {user, loading};
}


