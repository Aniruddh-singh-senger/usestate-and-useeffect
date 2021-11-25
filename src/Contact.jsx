import React from 'react'
import { useState } from 'react'

const Contact = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allentry, setAllEntry] = useState([])


    const entry = (e) => {
        e.preventDefault();
        if (email && password) {
            const newentry = { id:new Date().getTime().toString(), email, password }
            setAllEntry([...allentry, newentry])

            setEmail("");
            setPassword("")
        }
        else {
            alert('plz fill the data')
        }
    }

    const removedata = (id)=>{
        const remove = allentry.filter((cuelm)=> cuelm.id!==id)
        setAllEntry(remove)
    }

    const updatedata = ()=> {
        setAllEntry([])
    }


    return (
        <>
            <form action="" onSubmit={entry}>
                <div className='card-c'>
                    <h1>contact form</h1>
                    <p>if you have any query please fill this form</p>
                    <div className="mb-3">
                        <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" autoComplete='off'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleFormControlTextarea1" className="form-label">password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' style={{ width: '10%', marginBottom: '10px', borderRadius: '5px', backgroundColor: 'gold' }} >Login</button>
                </div>
            </form>

            <div>
                {
                    allentry.map((ce) => {
                        return (
                            <div className='output' key={ce.id}>
                                <p>email: {ce.email}</p>
                                <p>password: {ce.password}</p>
                                <button style={{ backgroundColor: 'red', margin: '1px  3px 30px', borderRadius: '20px' }} onClick={() => removedata(ce.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={updatedata} style={{ width: '30%', margin: '0 0 5px 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >Clear button</button>
        </>
    )
}

export default Contact
