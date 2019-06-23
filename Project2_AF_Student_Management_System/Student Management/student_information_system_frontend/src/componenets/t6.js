import React ,{Component} from 'react';
import DropZone from 'react-dropzone';

class ImgCrop extends Component{

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    }


    render() {
        return(
            <div><h1>Drop</h1>
                <DropZone onDrop={this.onDrop}> Drop here

                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            Click me to upload a file!
                        </div>
                    )}

                </DropZone>
            </div>
        );
    }

}
export  default ImgCrop;