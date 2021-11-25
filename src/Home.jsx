import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

  const [user, setUser] = useState([])

const getuser = async () => {
  try{
    const getdata = await fetch ('https://jsonplaceholder.typicode.com/albums/1/photos')
    setUser(await getdata.json())
  }catch (error){
console.log("my erroris"+ error);
  }
  
}

  useEffect(()=>{
    getuser()
  },[])
  return (
    <>
    
    <div style={{ width: '50%', margin: '50px auto' }}>
      <h1 >Welcome to the development world</h1>
      <p style={{ width: '50%', margin: '10px auto', fontSize: '15px' }}>we are provide the best learning resource </p>
    </div>
    <div className='card-s'>
    {
      user.map((ce)=>{
     return <Card
     key={ce.id}
     id={ce.id}
     url={ce.url}
     title={ce.title}
     thumbnailUrl={ce.thumbnailUrl}

      
      />})
    }
    
    </div>
    </>
  )
}

export default Home
