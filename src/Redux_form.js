import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitdata } from './action/action'

const Redux_form = () => {

    const mystate = useSelector((e) => e.savedata.names);

    // console.log(mystate);

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        email: ""
    });




    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // {console.log(e.target=="")}
    }
    console.log(input);
    const submit = (e) => {
        e.preventDefault()
        dispatch(submitdata(input))

        setInput({ name: "", email: "" })

    }

    return (
        <>

            <div className='maindiv'>
                <form className='App' onSubmit={submit}>
                    <label>Name : <input type="text" name="name" value={input.name} onChange={(e) => handleInput(e)} /></label><br /><br />
                    <label>Email : <input type="text" name="email" value={input.email} onChange={(e) => handleInput(e)} /></label><br /><br />

                    <input className='submit' type="submit" value="Submit" />
                </form>

            </div>

            {
                mystate && mystate.map((e, i) => {
                    return (
                        <div key={i}>
                            <div>{i + 1}</div>
                            <div>{e.id}</div>
                            <div>{e.name}</div>
                            <div>{e.email}</div><br /><br />
                        </div>
                    )
                })
            }

        </>
    )
}

export default Redux_form


{/* <label>Email : <input type="text" name="name"  onChange={(e,data) => setData(e.target.value)} /></label><br /><br />
    <label>Contact : <input type="number" name="name"   onChange={(e,data) => setData(e.target.value)}/></label><br /><br /> */}