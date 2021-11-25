import { useState } from 'react'
// import Card from './Card'

const Services = () => {

    const mydata = [{
        id: 1, Name: 'Anil', age: '28', roll: 'shooter'
    },
    {
        id: 2, Name: 'divya', age: '35', roll: 'sniper'
    },
    {
        id: 3, Name: 'jaye', age: '32', roll: 'camper'
    }
    ]

    const [newdata, setNewData] = useState(mydata)

    const updatedata = () => {
        setNewData([])
    }

    const removedata = (id) => {
        const freshdata = newdata.filter((curelem) => {
            return (
                curelem.id !== id
            )
        })
        setNewData(freshdata);
    }

    return (
        <>
            {newdata.map((ce) => {
                return (<h1 style={{ width: '55%', margin: '50px auto', backgroundColor: 'blueviolet', borderRadius: '20px' }} key={ce.id}>Name:{ce.Name}, age: {ce.age}, roll: {ce.roll}
                    <button style={{ backgroundColor: 'red', margin: '10px 30px', borderRadius: '20px' }} onClick={() => removedata(ce.id)}>Remove</button>
                </h1>)
            })}
            <button onClick={updatedata} style={{ width: '30%', margin: '50px 0 0 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >Clear button</button>

        </>
    )
}

export default Services
