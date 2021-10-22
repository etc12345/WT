import React, { useState } from "react";
import './form.css'



const Form =() =>{

    const [userRegistration,setUserResgistration]=useState({
        name:"",
        price:""

    })

    const [records,setNewRecord]=useState([])
    const handleInput =(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         console.log(name,value)
         setUserResgistration({...userRegistration, [name]:value})
         
    }
    var products=[]
    var prices=[]
    const addToCart=(product,price)=>{
        
        products.push(product)
        
        prices.push(price)
        console.log(products,prices)
    }
    const order=()=>{
        sessionStorage.setItem('product',JSON.stringify(products))
        sessionStorage.setItem("price",JSON.stringify(prices))
        const total= Number()
        window.location.href="http://localhost:3000/Message";
    }
    // const submitForm =(e)=>{
    //     e.preventDefault();
    //     // let id;
    //     const name=e.target.name;
    //      const value=e.target.value;
    //      console.log(name,value)
    //     //  setUserResgistration({...userRegistration, {[name]:name,[price]:value}})
    //     //  console.log(userRegistration)
    //     // var products=[]
    //     // products.push(userRegistration.name)
    //     // var prices=[]
    //     // prices.push(userRegistration.price)

        
    //     // const newRecord={...userRegistration, id:new Date().getTime().toString()}
    //     // setNewRecord([...records,newRecord]);
    //     // console.log(records);
    //     // // setUserResgistration({name:"",usn:"",event:"",tname:"",phoneno:""});
        
    //     //     window.location.href="http://localhost:3000/Message";
            
    //     // sessionStorage.setItem("name",''+userRegistration.name);
    //     // sessionStorage.setItem("title",''+userRegistration.title);
    //     // sessionStorage.setItem("author",''+userRegistration.author);
    //     // sessionStorage.setItem("publications",''+userRegistration.publications);
    //     // sessionStorage.setItem("genre",''+userRegistration.genre);
    //     // sessionStorage.setItem("rating",''+userRegistration.rating);
        
    // }
    return(
        
        <div class='forms'>
            <h2>Review Book</h2>
            
            <div>
            {/* <label htmlFor="name">Book Name:</label>
            <input class="text" type="text" autoComplete="off" 
            value={userRegistration.name}
            onChange={handleInput}
            name="name" id="name"/>
            </div>
            <div>
            <label htmlFor="title">Title :</label><br/>
            <input class="text" type="text" autoComplete="off" 
            value={userRegistration.usn}
            onChange={handleInput}
            name="title" id="title"/>
            </div>
            <div>
            <label htmlFor="author">Author:</label>
            <input class="text" type="text" autoComplete="off"
            value={userRegistration.event}
            onChange={handleInput}
            name="author" id="author"/>
            </div>
            <div>
            <label htmlFor="publications">Publications:</label>
            <input class="text" type="text" autoComplete="off" 
            value={userRegistration.tname}
            onChange={handleInput}
            name="publications" id="publications"/>
            </div>
            <div>
            <label htmlFor="genre">Genre:</label>
            <input class="text" type="text" autoComplete="off" 
            value={userRegistration.phoneno}
            onChange={handleInput}
            name="genre" id="genre"/>
            </div>
            <div>
            <label htmlFor="rating">Rating:</label>
            <input class="text" type="text" autoComplete="off" 
            value={userRegistration.phoneno}
            onChange={handleInput}
            name="rating" id="rating"/>
            </div>
            <div>
            <button class="bt" type="submit">Submit</button> */}
            <table>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>add</th>
                </tr>
                <tr>
                    <td name="product" value={userRegistration.name}>egg</td>
                    <td name="price" value={userRegistration.price}>5</td>
                    <button name="egg" value="5" onClick={()=>addToCart(' egg ',5)}>add to cart</button>
                </tr>
                <td name="product" value={userRegistration.name}>milk</td>
                <td name="price" value={userRegistration.price}>10</td>
                <button onClick={()=>addToCart(' milk ',10)}>add to cart</button>
            </table>
            <button onClick={order}>Order</button>
            </div>
            
            {/* <div>
                {
                    records.map((curEle)=>{
                        return(
                            <div>
                                <p>{curEle.name}</p>
                                <p>{curEle.usn}</p>  
                            </div> )
                    })
                }

            </div> */}
        </div>
    )
}

export default Form;
