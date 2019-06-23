import React, {Fragment, useState} from 'react';
import '../../App.css';
import axios from 'axios';

const AddAssignments = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);

        try{
            const res = await axios.post('/upload', formData,{
                headers: {
                    'Content_Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
        }catch(err){
            if(err.response.status === 500 ){
                console.log('There was a problem with the server');
            }else{
                console.log(err.response.data.msg);
            }
        }
    };

    return(
        <Fragment>
            <form onSubmit={onSubmit}>
        <div className="assignment_form">
            <div className="custom-file">
                <input type="file" className="custom-file-input" name="SFile" id="customFile" onChange={onChange}/>
                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
            </div>

            <input
                type='submit'
                value='Upload Assignment'
                className='form-btn'
            />
        </div>
            </form>
        </Fragment>
    )}



export default AddAssignments;
