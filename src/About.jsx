import React, { useEffect, useState } from 'react'

const About = () => {

    const [chat,setChat] = useState(0)


    useEffect(()=>{
        if(chat >= 1){
            document.title = `chats (${chat})`
        }else{
            document.title = `chats`
        }
 
    });

    return (
        <>
            <div className='card-c'>
                <h1>hello please also check on the browser tab </h1>
                <h1 style={{marginLeft:'400px'}}> {chat} </h1>
                
            </div>
            
            
            <button onClick={()=> setChat(chat+ 1)} style={{ width: '30%', margin: '0 0 5px 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >Update</button>
        </>
    )
}

export default About
