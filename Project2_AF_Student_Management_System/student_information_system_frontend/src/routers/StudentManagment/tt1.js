import React,{Component} from 'react';
import axios from 'axios';
import asi4 from '../../images/asi4.jpg';
import {Link} from "react-router-dom";

export default  class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false,
            imageURL: '',
            file:null
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
                <ul className="navigation">
                    <li><a href="tt1.js">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>

            <div class="container">
                <h3 >Submit Assignment</h3>
                <Link to="/homes">Student Home</Link>



                <form onSubmit={this.handleUpload}>
                    <div className="form-group">

                        {/*image uploading*/}
                        <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} onChange={this.handleChange} type="file"   />

                        <image src={this.state.file}/>

                        {/*<input className="form-control" onChange={ onchange="document.getElementById('pic1').src='file://'+this.value"} type="file"/>*/}

                    </div>

                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
                    </div>
                    <div className="form-group">
                        {/*<input type="file"  onChange={this.handleChange}/>*/}
                        {/*<image src={this.state.file}/>*/}

                    </div>
                    <button className="btn btn-success" type>Upload</button>




                </form>

            </div>
            </div>

        )
    }
}