import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');

    return <div>
        <h3>Guest List</h3>
        <input onChange={e=> setName(e.target.value)} />
        <button>Add User</button>
    </div>
};

export default GuestList;