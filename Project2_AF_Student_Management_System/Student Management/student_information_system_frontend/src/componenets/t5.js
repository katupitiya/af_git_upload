

// export  default Basic;


const React = require('react')

class Upload extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            file: null
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange}/>
                <img src={this.state.file}/>
            </div>
        );
    }
}
module.exports = Upload

// import React from 'react';
//
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             imageURL: '',
//         };
//
//         this.handleUploadImage = this.handleUploadImage.bind(this);
//     }
//
//     handleUploadImage(ev) {
//         ev.preventDefault();
//
//         const data = new FormData();
//         data.append('file', this.uploadInput.files[0]);
//         data.append('filename', this.fileName.value);
//
//         fetch('http://localhost:8000/upload', {
//             method: 'POST',
//             body: data,
//         }).then((response) => {
//             response.json().then((body) => {
//                 this.setState({ imageURL: `http://localhost:8000/${body.file}` });
//             });
//         });
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleUploadImage}>
//                 <div>
//                     <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
//                 </div>
//                 <div>
//                     <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
//                 </div>
//                 <br />
//                 <div>
//                     <button>Upload</button>
//                 </div>
//                 <img src={this.state.imageURL} alt="img" />
//             </form>
//         );
//     }
// }
//
// export default Main;



// import React from 'react';
// import {useDropzone} from 'react-dropzone';
//
// function Basic(props) {
//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
//
//     getInputProps();
//
//     const files = acceptedFiles.map(file => (
//         <li key={file.path}>
//             {file.path} - {file.size} bytes
//         </li>
//     ));
//
//     return (
//         <section className="container">
//             <div {...getRootProps({className: 'dropzone'})}>
//                 <input {...getInputProps()} />
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//             </div>
//             <aside>
//                 <h4>Files</h4>
//                 <ul>{files}</ul>
//             </aside>
//         </section>
//     );
// }
//
// export default Basic;
{/*<Basic />*/}