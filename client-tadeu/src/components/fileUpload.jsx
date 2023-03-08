import React, {Fragment,useState} from "react";
import Axios from 'axios'
import ProgressBar from './modals/ProgressBar'


export default function FileUpload () {
    const [file,setFile]=useState();
    const [fileName,setFilename] = useState('Choose File');
    const [uploadedFile,setUploadedFile] = useState({});
    const [message,setMessage] = useState('');
    const [uploadBar,setUploadBar] = useState(0);

    const handleChange = (e) =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append('file',file);

        try{
            const res = await Axios.post ('/report/upload',formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                },onUploadProgress:ProgressEvent =>{
                    setUploadBar(parseInt(Math.round((ProgressEvent.loaded *100) / ProgressEvent.total)))
                }

            });

            const {fileName, filePath} = res.data;
            setUploadedFile({fileName,filePath})
            setMessage('File Uploaded')
            
        }catch(err){
            if(err.response.status ===500){
                setMessage("A problem happened at the server")
            }else{
                setMessage(err.response.data.msg)
            }
        }
    }

    return (
        <Fragment>
            {message ? <div className="filemessage">{message}</div>:""}
            <form onSubmit={onSubmit}>
                <div className="custom-file">
                    <input type='file' className="custom-file-input" id='reportFile' onChange={handleChange}></input>
                    <label className="custom-file-label" htmlFor='reportFile'>
                        {fileName}
                    </label>
                </div>
                <ProgressBar percentage={uploadBar}></ProgressBar>
                <button type="submit" className="uploadbutton">UPLOAD</button>
            </form>

        </Fragment>
    )
}