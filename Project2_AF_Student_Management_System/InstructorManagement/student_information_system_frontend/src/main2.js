import React, {Component} from 'react';
import admin from './images/admin.svg';
import student from './images/student.svg';
import instructor from './images/instructor.svg';
import logo from './images/logo.png';
import './App.css';
import { Button} from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";
//import { createBrowserHistory } from 'history'
//import { withRouter} from 'react-router';

class main2 extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </header>
                <div className="row">
                    <div className="column">
                        <LinkContainer style={{marginLeft: "100px"}} to="/add">
                            <Button className="btn"><img src={admin} alt="my image1"
                                                         className="btn-img"/></Button>
                        </LinkContainer>
                    </div>
                    <div className="column">
                        <LinkContainer style={{marginLeft: "130px"}} to="/ILogin">
                            <Button className="btn"><img src={instructor} alt="my image2" className="btn-img"/></Button>
                        </LinkContainer>
                    </div>
                    <div className="column">
                        <LinkContainer style={{marginLeft: "150px"}} to="/add">
                            <Button className="btn"><img src={student} alt="my image3" className="btn-img"/></Button>
                        </LinkContainer>
                    </div>
                </div>
                {/*<div className="row">*/}
                {/*<div className="column">*/}
                {/*<img src={admin} alt="Snow"/>*/}
                {/*</div>*/}
                {/*<div className="column">*/}
                {/*<img src={admin} alt="Forest"/>*/}
                {/*</div>*/}
                {/*<div className="column">*/}
                {/*<img src={admin} alt="Mountains"/>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>

        );
    }

}



export default main2