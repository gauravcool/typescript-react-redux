import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Parent from './props/Parent';
import GuestList from './state/GuestList';

const App = () => {
    return <div>
        <GuestList />
    </div>
};

// const container: any = document.querySelector('#root');
// const root: any = createRoot(container);
// root.render(App />);
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);