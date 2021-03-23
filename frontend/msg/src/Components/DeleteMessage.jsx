import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import {useHistory} from "react-router-dom"
import {Button, Container} from "react-bootstrap"
import "../App.css"


const DeleteMessage = () => {
    let history = useHistory()

    const [secretKey,setSecretKey] = useState('')
    const [password,setPassword] = useState('')
    const [response,setResponse] = useState('')
    const [btndisable,setBtndisabled] = useState(true)


   const handleDelete = () => {
        fetch("https://secret-message-backends.herokuapp.com/delete-message",{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                secretKey:secretKey,
                password:password
            })
        }) .then((res)=>res.json())
        .then((res)=>{
          setResponse(res.message);
          setBtndisabled(true);
        })
      }
      
      useEffect(()=>{
          if(secretKey&&password){
              setBtndisabled(false)
          }else{
              setBtndisabled(true)
          }
      })
    
    return(
        <Container>
            <div>
                <h1>Delete message</h1>
                <div className="deleteMessagebtn"><Button variant="success" onClick={()=> history.push("/")}>Create Message</Button></div>
            </div>
            <label htmlFor="key">Secretkey</label>
            <input type="text" className="input-group" value={secretKey} onChange={(e)=>setSecretKey(e.target.value)}/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" className="input-group" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {response.length > 0 && <h5>Message : {response}</h5>}<br/>
            <button className="btn btn-danger" disabled={btndisable} onClick={()=>handleDelete()}>Delete</button>
            </Container>    )
}

export default DeleteMessage;
