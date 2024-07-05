import { createRoot } from 'react-dom/client';
import UserSearch from './refs/UserSearch';
import App from './components/App';
import React from 'react';

// const Index: React.FC = () => {
//     return <div>
//         <App />
//     </div>
// };

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);