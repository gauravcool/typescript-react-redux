import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import UserSearch from './state/UserSearch';

const App = () => {
    return <div>
        <UserSearch />
    </div>
};

// const container: any = document.querySelector('#root');
// const root: any = createRoot(container);
// root.render(App />);
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);