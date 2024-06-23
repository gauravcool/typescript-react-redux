import { createRoot } from 'react-dom/client';
import UserSearch from './refs/UserSearch';
import React from 'react';

const App: React.FC = () => {
    return <div>
        <UserSearch />
    </div>
};

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);