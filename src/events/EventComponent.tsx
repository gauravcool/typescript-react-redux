const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        
    };

    return <div>
        <h1>Event Component</h1>
        <input onChange={e=>console.log(e)} />
    </div>
};

export default EventComponent;