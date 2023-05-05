import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './create slice';

function App() {
    return (
        <div className='container'>
            <Provider store={store}>
                <Counter />
            </Provider><hr />
        </div>
    )
}

export default App