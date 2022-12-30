import React, { useState } from "react";
import AddStudent from "./AddStudent";
import DisplayStudent from "./DisplayStudent";
import FirebaseFirestoreServices from "../FirebaseFirestoreService";

const StudentMain = () => {
  const [fetchedStudent, setFetchedStudent] = useState();
  async function addStudent(newStudent) {
    console.log(newStudent);
    try {
      const response = await FirebaseFirestoreServices.createDocument(
        "students",
        newStudent,
        newStudent.studentId
      );
      alert("Successfully Added Student");
    } catch (error) {
      alert(error.message);
    }
  }

  async function fetchStudent(studentId) {
    try {
      const response = await FirebaseFirestoreServices.readDocument(
        "students",
        studentId
      );
      setFetchedStudent(response.data());
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <AddStudent addStudent={addStudent} />
      <DisplayStudent
        fetchStudent={fetchStudent}
        fetchedStudent={fetchedStudent}
      />
    </div>
  );
};

export default StudentMain;
