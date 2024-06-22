interface ChildProps {
    color: string;
    handleClickHandler: () => void;
    children: string;
}

export const Child = ({color, handleClickHandler, children}: ChildProps) => {

    return <div>
        {color} <br />
        {children} <br />
        <button onClick={handleClickHandler}>Clcik me</button>
    </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({color, handleClickHandler}) => {
    return <div>
        {color}
        <button onClick={handleClickHandler}>Clcik me</button>
    </div>
}
