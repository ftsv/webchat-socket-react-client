import React from 'react';
import { Routing } from './router/router';
import { BrowserRouter as Router} from 'react-router-dom';

const App = (): JSX.Element => {
    return (
        <Router>
            <Routing />
        </Router>
    )
}

export default App;
