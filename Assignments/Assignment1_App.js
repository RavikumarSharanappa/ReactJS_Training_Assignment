import './App.css';

function App() {

    // Scalar Variables
    let sname = "Ravi";
    let sage = 25;
    let semail = "ravi@gmai.com";

   // Array of Objects
   let docsArray = [
    { doctorId: 10, doctorName: "Ravi", designation: "Hyd" , experience : 10, contactNumber: 99999999},
    { doctorId: 10, doctorName: "Manoj", designation: "Hyd" , experience : 10, contactNumber: 99999999}, 
    { doctorId: 10, doctorName: "Avinash", designation: "Hyd" , experience : 10, contactNumber: 99999999},
    { doctorId: 10, doctorName: "Mahesh", designation: "Hyd" , experience : 10, contactNumber: 99999999}
  ];


  let docsArray2 = docsArray.map((item) =>
  {
  return <tr>
    <td>{item.doctorId}</td>
    <td>{item.doctorName}</td>
    <td>{item.designation}</td>
    <td>{item.experience}</td>
    <td>{item.contactNumber}</td>
  </tr>;
});
  return (
    <>
      <h3>Data Handling in React Components</h3>     
      <table  border="2"  width="500">
        <tr>
          <th colSpan={2}>Student Details</th>
          </tr>
          <tr>
            <th>Student Name</th>
            <td>{sname}</td>
          </tr>
          <tr>
          <th>Student Age</th>
          <td>{sage}</td>
          </tr>
          <tr>
          <th>Student Email</th>
          <td>{semail}</td>
          </tr>
      </table>
<br/>
      <table  border="2"  width="500">
          <tr>
            <th>doctorId</th>
            <th>doctorName</th>
            <th>designation</th>
            <th>experience</th>
            <th>contactNumber</th>
          </tr>
          {docsArray2}
      </table>

    </>

  );
}

export default App;
