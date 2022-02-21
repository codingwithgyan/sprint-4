import { useState } from "react";
import logo from "../logo.png";
export function Home()
{
    const [search,setSearch]=useState("");
    const submitForm=()=>{
            
            window.location.href=`/search?q=${search}`
    }
    return <div>
                <img src={logo} height="100px" width="300px"/><br/><br/>
                <input onKeyPress={(e)=>{
                    
                    if(e.key=="Enter")
                    {

                        submitForm();
                    }
                }} onChange={(e)=>{                  
                    setSearch(e.target.value)
                    }} style={{height:"36px",width:"550px",borderRadius:"20px",outline:"none",border:"1px solid gray",paddingLeft:"20px"}} className="search-box" type="text" />
    </div>;
}