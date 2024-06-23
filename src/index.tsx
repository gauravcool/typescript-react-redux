import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import EventComponent from './events/EventComponent';

const App = () => {
    return <div>
        <EventComponent />
    </div>
};

// const container: any = document.querySelector('#root');
// const root: any = createRoot(container);
// root.render(App />);
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);