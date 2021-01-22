import React from 'react'
import {Link} from 'react-router-dom'

function AddContact({edit, action, name, email, phone, setName, setEmail, setPhone}) {
    return (
        <div>
            <input type="text" placeholder="enter your name" value={name} onChange={e => setName(e.target.value)}/> <br></br>
            <input type="text" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)}/> <br></br>
            <input type="text" placeholder="enter your phone number" value={phone} onChange={e => setPhone(e.target.value)}/> <br></br>
            <Link to="/contact-list">
            <button onClick={action}>{edit ? "Update" : "Submit"}</button>
            </Link>
        </div>
    )
}

export default AddContact
