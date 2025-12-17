import React, {useState} from "react"
import {nanoid} from 'nanoid'
import './AddStudent.css'
import { FontAwesomeIcon } from '@fortAwesome/react-fontawesome';
import { faCirclePlus, faSearch } from '@fortawesome/free-solid-svg-icons';

function AddStudent (props){
  //id, firstName, lastName, email, photo
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [gradYear, setGradYear] = useState('');

  const doWork = ()=> {
    const newStudent = {"id":nanoid(),
        "firstName":firstName,
        "lastName":lastName,
        "email":email,
        "image":URL.createObjectURL(selectedFile),
        "gradYear":parseInt(gradYear)
      }
    props.addStudent(newStudent)
  }

  const imageUpdate = (e) => {
    setSelectedFile(e.target.files[0])
  }
  return (
    <div className='row mt-5' id='addStudent'>
      <h3>Add Cats</h3>
      <div className='row'>
        <div className='col-md-2'>
        <label htmlFor='txtFirstName'className='form-label'>First Name</label>
        </div>
        <div className='col-md-2'>
        <label htmlFor='txtLastName'className='form-label'>Last Name</label>
        </div>
        <div className='col-md-2'>
        <label htmlFor='txtEmail'className='form-label'>Owner's Email Address</label>
        </div>
        <div className='col-md-2'>
        <label htmlFor='fileUpload'className='form-label'>Kitty Image</label>
        </div>
        <div className='col-md-2'>
        <label htmlFor='txtGradYear'className='form-label'>Date Of Birth</label>
        </div>
      </div>
      <div className='col-md-2'>
        <input type='text' id='txtFirstName' placeholder='First Name' className='form-control' onChange={(e) => setFirstName(e.currentTarget.value)} value={firstName}/>
      </div>
      <div className='col-md-2'>
        <input type='text' id='txtLastName' placeholder='Last Name' className='form-control' onChange={(e) => setLastName(e.currentTarget.value)} value={lastName}/>
      </div>
      <div className='col-md-2'>
        <input type='email' id='txtEmail' placeholder='Email Address' className='form-control' onChange={(e) => setEmail(e.currentTarget.value)} value={email}/>
      </div>
      <div className='col-md-2'>
        <input type="file" name='file' id="fileUpload" onChange={imageUpdate}/>
      </div>
      <div className='col-md-2'>
        <input type='text' id='textGradYear' placeholder='Date Of Birth' className='form-control' onChange={(e) => setGradYear(e.currentTarget.value)} value={gradYear}/>
      </div>
        <div className='col-md-2'>
          <button type="button" id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Cat &nbsp;<FontAwesomeIcon icon={faCirclePlus}/></button>
      </div>
      </div>
  )
}

export default AddStudent