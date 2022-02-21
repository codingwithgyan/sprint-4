import { createContext, useState } from "react";
export const Context=createContext();
export const ContextProvider=({children})=>{
    const [search,setSearch]=useState("");
    const changeSearchText=(txt)=>{
            
            setSearch(txt);
    }
    return <Context.Provider value={{search,changeSearchText}}>{children}</Context.Provider>
}