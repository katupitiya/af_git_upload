import React, {Component} from 'react';
import logo from "../../images/logo.png";
import '../../App.css';
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
//import {Button} from "reactstrap";
import Insert from './AddAssignmentDetails';
import AddExams from './AddExams';
import Upload from '../../component/FileUpload';
import View from './ViewAssignment';
class InstructorHome extends Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <div className="main">
                    <Router>
                        <div>
                            <div className='btn'>
                                <Link to="/insert">Add Assignments</Link>
                            </div>
                            <div className='btn'>
                                <Link to="/upAssignment">Upload Assignment</Link>
                            </div>
                            <div className='btn'>
                                <Link to="/addExams">Add Exams</Link>
                            </div>
                            <div className='btn'>
                                <Link to="/viewAssign">View Assignments</Link>
                            </div>
                            <Switch>
                                <Route path="/insert" component={Insert}/>
                                <Route path="/upAssignment" component={Upload}/>}
                                <Route path="/addExams" component={AddExams}/>}
                                <Route path="/viewAssign" component={View}/>}

                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}



export default InstructorHome
