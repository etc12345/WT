import React, { useState } from "react";
import './form.css';

const Form =() =>{

    const [userRegistration,setUserRegistration]=useState({
        name:'',
        usn:'',
        universityFee:'',
        eLearningFee:'',
        specificFeeByGovt:'',
        libraryFee:'',
        examinationFee:''
    })

    const handleInput =(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         console.log(name,value)
         setUserRegistration({...userRegistration, [name]:value})
         
    }
    const submitForm =(e)=>{
        e.preventDefault();
        var totalFee = Number(userRegistration.universityFee) + Number(userRegistration.eLearningFee) + Number(userRegistration.specificFeeByGovt) + Number(userRegistration.libraryFee) + Number(userRegistration.examinationFee); 
        console.log(totalFee);
        sessionStorage.setItem("total",''+totalFee); 
        sessionStorage.setItem("name",''+userRegistration.name);
        window.location.href="http://localhost:3000/Final";
    }
    return(
        <div className="form-container">
            <form className="register-form" onSubmit={submitForm}>
                    <h1 className="form-heading"> Please Enter the Details</h1>
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" autoComplete="off" minLength="3" required="true"
                    value={userRegistration.name}
                    onChange={handleInput}
                    name="name" id="name"/><br></br><br></br>

                    <label htmlFor="usn">USN:</label>
                    <input type="text" autoComplete="off" minLength="8" required="true"
                    value={userRegistration.usn}
                    onChange={handleInput}
                    name="usn" id="usn"/><br></br><br></br>

                    <label htmlFor="university-fee">University Fee:</label>
                    <input type="number" autoComplete="off" 
                    value={userRegistration.universityFee} min="1" required="true"
                    onChange={handleInput}
                    name="universityFee" id="universityFee"/><br></br><br></br>

                    <label htmlFor="eLearningFee">E-Learning Fee:</label>
                    <input type="number" autoComplete="off" 
                    value={userRegistration.eLearningFee} min="1" required="true"
                    onChange={handleInput}
                    name="eLearningFee" id="eLearningFee"/><br></br><br></br>
                
                    <label htmlFor="specificFee">Specific Fee:</label>
                    <input type="number" autoComplete="off"
                    value={userRegistration.specificFeeByGovt} min="1" required="true"
                    onChange={handleInput}
                    name="specificFeeByGovt" id="specificFeeByGovt"/><br></br><br></br>

                    <label htmlFor="libFee">Library Fee:</label>
                    <input type="number" autoComplete="off" 
                    value={userRegistration.libraryFee} min="1" required="true"
                    onChange={handleInput}
                    name="libraryFee" id="libraryFee"/><br></br><br></br>

                    <label htmlFor="examFee">Exam Fee:</label>
                    <input type="number" autoComplete="off" 
                    value={userRegistration.examinationFee} min="1" required="true"
                    onChange={handleInput}
                    name="examinationFee" id="examinationFee"/><br></br><br></br>

                    <button className="form-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
