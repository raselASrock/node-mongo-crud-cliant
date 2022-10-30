import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const storedUser = useLoaderData()
    const [user, setUser] = useState({storedUser})

    const handleUpdateUser = event =>{
        event.preventDefault();
        console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('User Updated Successfully')
                console.log(data);
                // event.target.reset()
            }
        })

        // fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     if (data.acknowledged) {
        //         alert('User Added Successfully');
        //         event.target.reset()
        //     }
        // })


    }

    const handleInputChange = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser)
        // console.log(value, field, newUser);
    }
    return (
        <div>
            <h2>Please Update: {storedUser.name} </h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.name} name='name' placeholder='Your Name' required/>
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name='address' placeholder='Your  Address' required/>
                <br />
                <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name='email' placeholder='Your Email' required />
                <br />
                <button type="submit"> Update User</button>
            </form>
        </div>
    );
};

export default Update;