import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Parent from './props/Parent';

const App = () => {
    return <div>
        <Parent />
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);