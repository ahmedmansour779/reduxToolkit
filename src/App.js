import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './create slice/CreateSlice';

function App() {
    return (
        <div className='container-fluid'>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default App