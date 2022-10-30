import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);

    }

    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser)
        // console.log(value, field, newUser);
    }
    return (
        <div>
            <h2>Add New User Here: </h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='Your Name' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='Your  Address' required/>
                <br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='Your Email' required />
                <br />
                <button type="submit"> Add User</button>
            </form>
        </div>
    );
};

export default AddUser;