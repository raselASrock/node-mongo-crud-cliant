import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = user =>{
        const agree = window.confirm(`Are you sure you want to delet this user? ${user.name}`);
        // console.log(aggree);
            if(agree){
                // console.log('Deleting User With ID:', user._id);
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount > 0){
                        alert("User Deleted Successfully");
                        const remainingUsers = displayUsers.filter( usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers)
                    }
                })
            }
    }
    return (
        <div>
            <h2>This is Users Home:  </h2>
            <h3>All Users: {displayUsers.length}</h3>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name} 
                        {user.email} 
                        <button 
                        onClick={() => handleDelete(user)}>
                            X
                        </button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;