import React, { useState } from "react";

const AddStudent = (props) => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState();
  const [major, setMajor] = useState("");
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");

  const handleStudentForm = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      studentId,
      major,
      sex,
      city,
    };
    props.addStudent(newStudent);
  };

  return (
    <div className='add-student'>
      <h2> ADD A NEW STUDENT</h2>
      <form onSubmit={handleStudentForm} className='add-student__form'>
        <div className='add-student__field'>
          <label> Name : </label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='add-student__field'>
          <label> Student ID :</label>
          <input
            type='number'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className='add-student__field'>
          <label> Major In : </label>
          <input
            type='text'
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>
        <div className='add-student__field'>
          <label> Sex : </label>
          <input
            type='text'
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          />
        </div>
        <div className='add-student__field'>
          <label>City : </label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
