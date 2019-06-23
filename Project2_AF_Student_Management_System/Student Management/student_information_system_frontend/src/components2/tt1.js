import React,{Component} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import asi4 from '../images/asi4.jpg';
import './tti1.css';
import {Link} from "react-router-dom";

export default  class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false,
            imageURL: '',
            file:null,
            ITNo:'',
            SubCode:''
        }
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){

        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        });
    }


    handleUploadImage(ev) {
        let body;
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        data.append('filename',this.state.ITNo);
        data.append('filename',this.state.SubCode);

        // this.setState({
        //     file:URL.createObjectURL(event.target.files[0])
        // });




        axios.post('http://localhost:3000/upload', data)
            .then(function (response) {
                this.setState({imageURL: `http://localhost:3000/${body.file}`, uploadStatus: true});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return(
            <div>

                <header className="header_area">
                    <div className="header-top">
                        <div className="logo">
                            <div className="logohandling">
                                <a href="#" className="text-uppercase"><Link to="/studentLogin">LOGIN</Link></a>
                                <a href="#" className="text-uppercase" className="register"><Link
                                    to="/studentRegistration">REGISTER</Link></a>
                            </div>


                        </div>
                        <div >
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-4 header-top-left">

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="main_menu">


                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">

                                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png"
                                                                                          alt=""/></a>


                            </div>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent" className="st">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about-us.html"><Link
                                        to="/mk">ABOUTUS</Link></a></li>



                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

            <div class="container">
                <h3 >Submit Assignment</h3>
                <div>   <Link to="/">Student Home</Link></div>



                <form onSubmit={this.handleUpload}>
                    <div className="form-group">

                        {/*image uploading*/}
                        <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} onChange={this.handleChange} type="file"   />

                        <image src={this.state.file}/>

                        {/*<input className="form-control" onChange={ onchange="document.getElementById('pic1').src='file://'+this.value"} type="file"/>*/}

                    </div>

                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="IT Number" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Subject Code" />
                    </div>
                    <div className="form-group">
                        {/*<input type="file"  onChange={this.handleChange}/>*/}
                        {/*<image src={this.state.file}/>*/}

                    </div>
                    <button className="btn btn-success" type>Upload</button>




                </form>

            </div>
              <  footer className="com">
                <div className="cont">

                    <div className="row footer-bottom d-flex justify-content-between">
                        <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
                            <i className="fa fa-heart-o" aria-hidden="true"></i> <a
                            href="#"></a></p>

                    </div>
                </div>
            </footer>
            </div>

        )
    }
}