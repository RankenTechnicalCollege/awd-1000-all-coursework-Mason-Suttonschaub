import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import './App.css'
import AddStudent from './components/AddStudent'
import Student from './components/Student'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [allStudents, setAllStudents] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const [keywords, setKeyWords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    if (localStorage) {
      const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));
    
    if(studentsLocalStorage){
      saveStudents(studentsLocalStorage);
    }else{
    saveStudents(students);
    }
  }
  }, []);

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    setAllStudents(updatedStudents);
    setSearchResults(updatedStudents);
  }

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem('students', JSON.stringify(students));
      console.log("saved to local storage");
    }
  }

  const removeStudent = (studentToDelete) => {
    const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  }

  const updateStudent = (updatedStudent) => {
    //console.table(updatedStudent);
    const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
    saveStudents(updatedStudentArray)
  }

  const searchStudents = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLocaleLowerCase().split(' ')
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString())
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student =>{
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) || 
        student.lastName.toLowerCase().includes(word) ||
      student.gradYear === parseInt(word)){
          return true;
        }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allStudents);
    }
  }

const students=[{
  id: nanoid(),
  firstName: "Esdras",
  lastName: "Dorey",
  email: "edorey0@hud.gov",
  image:"images/student1.jpg",
  gradYear: 2024
}, {
  id: nanoid(),
  firstName: "Edouard",
  lastName: "MacCole",
  email: "emaccole1@forbes.com",
  image:"images/student2.jpg",
  gradYear: 2023
}, {
  id: nanoid(),
  firstName: "Virgie",
  lastName: "Hyndes",
  email: "vhyndes2@hc360.com",
  image:"images/student3.jpg",
  gradYear: 2026
}, {
  id: nanoid(),
  firstName: "Gris",
  lastName: "Mounfield",
  email: "gmounfield3@intel.com",
  image: "images/student4.jpg",
  gradYear: 2020
}, {
  id: nanoid(),
  firstName: "Katheryn",
  lastName: "O' Brian",
  email: "kobrian4@godaddy.com",
  image: "images/student5.jpg",
  gradYear: 2029
}, {
  id: nanoid(),
  firstName: "Roi",
  lastName: "Szymczyk",
  email: "rszymczyk5@foxnews.com",
  image: "images/student6.jpg",
  gradYear: 2029
}, {
  id: nanoid(),
  firstName: "Karlotta",
  lastName: "Smoote",
  email: "ksmoote6@seesaa.net",
  image: "images/student7.jpg",
  gradYear: 20230
}, {
  id: nanoid(),
  firstName: "Giustina",
  lastName: "Camfield",
  email: "gcamfield7@soundcloud.com",
  image: "images/student8.jpg",
  gradYear: 0
}, {
  id: nanoid(),
  firstName: "Josh",
  lastName: "Darch",
  email: "jdarch8@cyberchimps.com",
  image: "images/student9.jpg",
  gradYear: 2019
}, {
  id: nanoid(),
  firstName: "Mitch",
  lastName: "Tingle",
  email: "mtingle9@answers.com",
  image: "images/student10.jpg",
  gradYear: 2018
}]
  return (
    <div className="container">
      <div className='row' id='allStudents'>
        <h3>Current Students</h3>
        {searchResults && searchResults .map((student) =>
        (
          <div className='col-lg-2' key={student.id}>
              <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
          </div>)
        )}
      </div>
      {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => saveStudents(students)}>Save Students</button>*/}
      <AddStudent addStudent={addStudent}/>
      <div className='row mt-4' id='searchStudents'>
        <h3>Search Students</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by First Name or Last Name</label>
          <input type='text' className='form-control' placeholder='Mason Sutton-Schaub' onChange={(e) => setKeyWords(e.currentTarget.value)} value = {keywords} />
        </div>
        <div className='col-md-4'>
          <select value={gradYear} onChange={ (e) => setGradYear(e.currentTarget.value)} className='form-select'>
            <option value=''>Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq()
            .map(year => <option key={year} value={year}>{year}</option>)
            .value()}
          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary btn-lg' onClick={searchStudents}>Search Students &nbsp;<FontAwesomeIcon icon={faSearch}/></button>
        </div>
      </div>
    </div>
    
  )
}

export default App
