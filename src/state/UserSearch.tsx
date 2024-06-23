import React, {useState} from 'react';

const users = [
    {name: 'Sara', age: 22},
    {name: 'Felix', age: 37},
    {name: 'Enya', age: 29}
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user)=>{
            return user.name === name
        });
        setUser(foundUser);
        setName('');
    };

    return <div>
        User Search: 
        <input value={name} onChange={e=> setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name} <br />
            {user && user.age}
        </div>
    </div>
};

export default UserSearch;