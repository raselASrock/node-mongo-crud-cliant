import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const handleDelete = user =>{
        const aggree = window.confirm(`Are you sure you want to delet this user? ${user.name}`);
        // console.log(aggree);
            if(aggree){
                console.log('Deleting User With ID:', user._id);
            }
    }
    return (
        <div>
            <h2>This is Users Home:  </h2>
            <h3>All Users: {users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}>
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