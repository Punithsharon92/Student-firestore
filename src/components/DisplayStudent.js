import { useState } from "react";

const DisplayStudent = (props) => {
  const [studentId, setStudentId] = useState();

  const handleFetchForm = (e) => {
    e.preventDefault();
    props.fetchStudent(studentId);
  };

  return (
    <div className='display-student'>
      {props.fetchedStudent ? (
        <div>
          <div className='display-student-Heading'>
            <h2>Student Info</h2>
          </div>

          <div className='display-student-main'>
            <div className=' display-student-fetched'>
              Name : {props.fetchedStudent.name}
            </div>
            <div className=' display-student-fetched'>
              Student ID : {props.fetchedStudent.studentId}
            </div>
            <div className=' display-student-fetched'>
              Major In: {props.fetchedStudent.major}
            </div>
            <div className=' display-student-fetched'>
              Sex : {props.fetchedStudent.sex}
            </div>
            <div className=' display-student-fetched'>
              city : {props.fetchedStudent.city}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>No Data </h2>
          <small>
            You can try ID : <b> 6283</b> or Add your own Student & Fetch.
          </small>
        </div>
      )}
      <form onSubmit={handleFetchForm} className='display-student-form'>
        <div className='display-student-field'>
          <label>Enter the Student ID : </label>
          <input
            type='number'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <button type='onSubmit'>Fetch Student Info</button>
      </form>
    </div>
  );
};

export default DisplayStudent;
