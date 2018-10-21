
import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './component/Home';



export default(
<Route path="/" component={App}>
    <IndexRoute component = {Home} />
</Route>
);