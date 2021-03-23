import React, { useState } from "react"
import { useEffect } from "react";

const ShowMessage = () => {
    const [id,Setid] = useState('');
    const [message,setMessage] = useState('');

    useEffect(()=>{
        const url_string  = window.location.href;
        const url = new URL(url_string);
        Setid(url.searchParams.get('rs'));
    },[])

    useEffect (()=>{
        fetch(`https://secret-message-backends.herokuapp.com/message-by-id/${id}`)
        .then((res)=>res.json())
        .then((res) => setMessage(res.result[0]?.message))
    },[id])

    return(
        <div>
            {
              message ? <div>
                    <h1>Message</h1>
                    <h4>This is a secret message for your!!!!</h4>
                    <h3>{message}</h3>
              </div>:<div>
                <h1>ooops msg not foud</h1>
                <h4>Message has been deleted by creator</h4>
              </div>
            }
        </div>
    )
}

export default ShowMessage;