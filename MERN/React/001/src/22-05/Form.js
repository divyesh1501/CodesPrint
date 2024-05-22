import React, { useState } from 'react'

function Form() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: ''
    })

    // const handleName = (e) => {
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // const handleEmail = (e) => {
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     console.log(e.target.value)
    //     setPass(e.target.value)
    // }

    const handleInput = (e) => {
        console.log(e.target.name)
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"end"}}>
                <label style={{display:"flex", gap:"20px", justifySelf:"end"}}>
                    Name:
                    <input type='text' name='name' value={formData.name} onChange={handleInput} />
                </label>
                <br />
                <label style={{display:"flex", gap:"20px", justifySelf:"end"}}>
                    Email:
                    <input type='email' name='email' value={formData.email} onChange={handleInput} />
                </label>
                <br />
                <label style={{display:"flex", gap:"20px", justifySelf:"end"}}>
                    Password:
                    <input type='password' name='pass' value={formData.pass} onChange={handleInput} />
                </label>
                <button type='submit' style={{marginTop:"20px"}}>Submit</button>
            </form>
        </>
    )
}

export default Form
