import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {BrowserRouter,Route} from "react-router-dom";
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import App from './componenets/t2';
// import  ReactDropzone from './componenets/t3'
// import  App from './componenets/t3-1'
// import  Dropzone from  './componenets/t4';
// import Upload from './componenets/t5';
//
// import ImgCrop from './componenets/t6';
//
// import  Main from './componenets/main';
// import App2 from './componenets/t7';
// import FileUploadContainer from './components2/test8';
// import FileUpload from './components2/tt1';
import Uploading from './components2/tt1-sup1.js';
// import Check1 from './components2/check1';
// import UserForm from './components2/check2';
// import Interface1 from './components3/int1';
// import UserForm from './components3/check3';
// import Navigation from './components3/check4'

// import StudentHome from './components3/studentHome'
// import ReactUploadImage from './components3/checknow';
// import studentMain from './components3/studentMain';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentView from './components3/StudentView';
import StudentUpdate from './components3/StudentUpdate';
import FileUpload from './components2/tt1';
// import SoftwereEng1 from './components3/SowtwereEn';
import SoftwareEng1 from './components3/SowtwereEn';
import SoftwareEng2 from './components3/SoftwareEng2';
import SoftwareEng3 from './components3/SoftwereEng3';
import SoftwareEng4 from './components3/SoftwareEng4';
import Engineering1 from './components3/Engineering1';
import Engineering2 from './components3/Enginnering2';
import Engineering3 from './components3/Engineering3';
import Enginnering4 from './components3/Enginnering4';
import HomeS from './components3/home';
// import FileUpload from './components 4/FileUpload';


// ReactDOM.render(<studentMain/>, document.getElementById('root'));




ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={HomeS}/>
            <Route  path='/view' component={StudentView} />
            <Route path='/updateStudent' component={StudentUpdate} />
            {/*<Route path='/lectures' component={SoftwereEng1}/>*/}
            <Route path='/uploadAssignment' component={FileUpload}/>
            <Route path='/se1' component={SoftwareEng1}/>
            <Route path='/se2' component={SoftwareEng2}/>
            <Route path='/se3' component={SoftwareEng3}/>
            <Route path='/se4' component={SoftwareEng4}/>
            <Route path='/en1' component={Engineering1}/>
            <Route path='/en2' component={Engineering2}/>
            <Route path='/en3' component={Engineering3}/>
            <Route path='/en4' component={Enginnering4}/>
            {/*<Route path='/upload2' component={FileUpload}/>*/}


            {/*<Route path='/create' component={Create} />*/}
            {/*<Route path='/show/:id' component={Show} />*/}
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// export default ()=>(
//     <BrowserRouter>
//         <switch>
//
//             {/*<Route path="/mk"   component={kio}/>*/}
//             <Route exact path="/"   component={StudentView}/>
//             <Route  path="/updateStudent"   component={StudentUpdate}/>
//             {/*<Route  path="/Admin"   component={AdminLogin}/>*/}
//             {/*<Route  path="/InstuctorLogin"   component={InstuctorLogin}/>*/}
//             {/*<Route  path="/studentLogin"   component={studentlogin}/>*/}
//             {/*<Route  path="/studentRegistration"   component={studentRegistration}/>*/}
//             {/*<Route  path="/InstrucorRegistration"   component={InstrucorRegistration}/>*/}
//             {/*<Route  path="/AdminRegistration"   component={AdminRegistration}/>*/}
//             {/*<Route  path="/AdminManagment"   component={AdminManagment}/>*/}
//             {/*<Route  path="/AdminLogin"   component={AdminLogin}/>*/}
//             {/*<Route  path="/HandlingInstructor"   component={HandlingInstructor}/>*/}
//             {/*<Route  path="/HandlingCourse"   component={HandlingCourse}/>*/}
//
//         </switch>
//
//     </BrowserRouter>);
