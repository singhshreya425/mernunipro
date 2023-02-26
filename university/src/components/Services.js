import axios from "axios"
import { useEffect,useState } from "react";
import './Services.css'

function Services() {
    const [data,setData]= useState([])
    useEffect(()=>{
     axios.get('http://localhost:3001/api/services')
     .then(res=>{
        console.log(res.data.data)
        console.log("hello")
        setData(res.data.data)
     })
     .catch(err=>{
        console.log(err)
     })
    },[])
    return (
        <div className="flex">
         
         {
              data.length> 0?
              data.map((x)=>{
                return(
                    <div className="card">
                      <div className="title"> shreya </div>
                      <div className="desc">  {x.description} </div>
                      <div className="title">{x._id}</div>
                    </div>
                )
              })
               :'No Data Found'
            }
            
        </div>
    )
}
export default Services