import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom"
import {Container,Button} from "react-bootstrap"
import "../App.css"
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


const NewMesssage = () => {
   
    const history = useHistory();

    const [randomString,setRandomString] = useState('');
    const [password,setPassword] = useState('');
    const [targetMail,setTargetmail] = useState('')
    const [message,setMessage] = useState('');
    const [rootUrl,setRooturl] = useState('');
    const [buttonDisabled,setButtonDisabled] = useState(true)

    useEffect(() => {
        setRooturl(`${window.location.href}message/`)
        setRandomString(Math.random().toString(36).substring(5).toUpperCase())
    },[])

    useEffect(()=>{
        if(randomString && password && message && targetMail && rootUrl){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[randomString,password,message,targetMail,rootUrl])

    const handleSubmit = () => {
        fetch("https://secret-message-backends.herokuapp.com/create-message",{
            method:"POST",
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({
                randomKey:randomString,
                password:password,
                message:message,
                targetMail:targetMail,
                targetURL:rootUrl

            })
        }).then((res) => {toast.notify("Secret Message Sent")})
        .catch((error) => console.log(error))
        

    }
    return(
   <Container>    
          
            <div>
                <h1 className="heading">Secret message </h1>
                <div className="deleteMessagebtn"><Button variant="warning" onClick={()=> history.push('/delete')}>Delete Message</Button></div>
            </div>
            <label htmlFor="random"><b>Random String</b></label><br/>
            <input type = "text" className="input-goup" value={randomString} onChange={(e)=>setRandomString(e.target.value)}/><br/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="text"  className="input-group" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor="message"><b>Mesage</b></label><br/>
            <textarea id="message" cols="60" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea><br/>
            <label htmlFor="mail"><b>Target Mail</b></label><br/>
            <input type="text" className="input-group" value={targetMail} onChange={(e)=>setTargetmail(e.target.value)}/><br/>
            <Button variant="success" type="button" disabled={buttonDisabled} onClick={()=>{handleSubmit()}}><b>Send</b></Button>
            </Container>    
            
            )
}

export default NewMesssage;