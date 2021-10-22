import React from 'react'
import './message.css'
 const Message = ()=>{
    //  const names=sessionStorage.getItem("name");
    //  const title=sessionStorage.getItem("title");
    //  const publications=sessionStorage.getItem("publications");
    //  const genre=sessionStorage.getItem("genre");
    //  const rating=sessionStorage.getItem("rating");
    const products=JSON.parse(sessionStorage.getItem("product"))
   
    const prices=JSON.parse(sessionStorage.getItem("price"))
    

     const prod=products.map((i)=>{
        return(
        <span>{i}&nbsp;&nbsp;</span>
        )
    })
    var sum=0
    const calc=()=>{
     for(var i=0;i<prices.length;i++)
     {
         sum+=Number(prices[i])
     }
     return sum
    }
    sum=calc()

    return(
    <div class='message'>
        
     <h1>Thank you For reviewing the </h1>
         {/* book:{names}    </h1>
        <h2 class="h2">Your submitted review</h2>
        <h3>Title:{title}</h3>
        <h3>Publications:{publications}</h3>
        <h3>Genre:{genre}</h3>
        <h3>Rating:{rating}</h3> */}
        <div> 
            
            
        </div>
            {prod}<br/>
           {sum}
     </div>
     )
 }


export default Message;
