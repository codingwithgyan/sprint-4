import axios from "axios";
import { useState,useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/SearchContext";
import { Card } from "./Card";

export function ShowSearchResult()
{
    const [mainData,setMainData]=useState([]);
    const {search,changeSearchText}= useContext(Context);
    // console.log(useParams());
    useEffect(()=>{
        
        fetchData();
    },[]);

    useEffect(()=>{
        filterData();
    },[search]);
   
    const fetchData=()=>{
            axios.get("https://fast-reef-22226.herokuapp.com/data").then(res=>res).then(({data})=>{
                //  console.log(data);
                    setMainData(data);
            }).catch((e)=>{
                console.log(e);
            })
    };

    const filterData=()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${search}`).then(res=>res).then(({data})=>{
            // console.log(data);
               setMainData(data);
       }).catch((e)=>{
           console.log(e);
       })
    }
    
    return <div id="search-result" style={{padding:"60px"}}>
                <button onClick={()=>{
                         axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=description&_order=asc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })
                }} id="sort-alphabetically">sort-alphabetically</button>
                <button onClick={()=>{
                     axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=description&_order=desc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })

                }} id="sort-alphabetically-desc">sort-alphabetically-desc</button>

                <button onClick={()=>{
                         axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=creation_date&_order=asc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })
                }} id="sort-by-date">sort-by-date</button>
                <button onClick={()=>{
                     axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=creation_date&_order=desc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })

                }} id="sort-by-date-desc">sort-by-date-desc</button>



<button onClick={()=>{
                         axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=quality&_order=asc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })
                }} id="sort-by-quality">sort-by-quality</button>
                <button onClick={()=>{
                     axios.get(`https://fast-reef-22226.herokuapp.com/data?_sort=quality&_order=desc`).then(res=>res).then(({data})=>{
                            // console.log(data);
                            setMainData(data);
                    }).catch((e)=>{
                        console.log(e);
                    })

                }} id="sort-by-quality-desc">sort-by-quality-desc</button>


                {
                    mainData.map(e=>{
                        return <Card key={e.id} url={e.url} title={e.title} desc={e.description} author={e.author} create_data={e.creation_date} explicit={e.explicit} quality={e.quality} />
                    })
                }
                <Card/>
    </div>;
}