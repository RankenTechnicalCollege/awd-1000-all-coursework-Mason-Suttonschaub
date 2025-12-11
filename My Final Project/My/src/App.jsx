import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import './App.css'
import AddStudent from './components/AddStudent'

function App() {

  const [allStudents, setAllStudents] = useState(null)

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    setAllStudents(updatedStudents);
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
  gradYear: 2021
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
      <div className='row'>
        {allStudents && allStudents.map((student) =>
        (
          <div className='col-lg-2' key={student.id}>
            <div className='card'>
              <img src={student.image} alt="missing image"/>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{student.firstName}</li>
                <li className='list-group-item'>{student.lastName}</li>
                <li className='list-group-item'>{student.email}</li>
                <li className='list-group-item'>{student.gradYear}</li>
              </ul>
              </div>
              </div>)
        )}
      </div>
      {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
      <AddStudent addStudent={addStudent}/>
    </div>
    
  )
}

export default App
