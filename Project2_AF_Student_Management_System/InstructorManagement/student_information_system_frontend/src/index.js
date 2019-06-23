import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import main2 from './main2';
import instructorLogin from './routers/InstructorLogin/InstructorLogin';
import instructorHome from './routers/Instructor/InstructorHome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={main2} />
            <Route path='/ILogin' component={instructorLogin} />
            <Route path='/IHome' component={instructorHome} />
            {/*<Route path='/add-train' component={AddTrain} />*/}
        </div>
    </Router>,
    document.getElementById('root')
);