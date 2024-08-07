import {Provider} from 'react-redux';
import {store} from '../state';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
    return (<Provider store={store}>
        <h1>Hello</h1>
        <RepositoriesList />
    </Provider>);
};

export default App;