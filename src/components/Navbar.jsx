import { useContext, useState } from "react";
import { Context } from "../context/SearchContext";

export function Navbar()
{
    const [temp,setTemp]=useState("");
   const {search,changeSearchText}= useContext(Context);
  
    return <div id="navbar">
                 <input value={search} onKeyPress={(e)=>{
                    if(e.key=="Enter")
                    {
                        changeSearchText(temp);
                    }
                }} onChange={(e)=>{                  
                    setTemp(e.target.value)
                    }} style={{height:"36px",width:"550px",outline:"none",border:"1px solid gray",paddingLeft:"20px"}} className="search-box" type="text" />
    
                <button onClick={()=>{
                        changeSearchText(temp);
                }} style={{height:"38px"}} className="search">Search</button>
    </div>
}