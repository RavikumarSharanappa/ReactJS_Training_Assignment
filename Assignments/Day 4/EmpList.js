import { useState } from "react";
import { dataSericeObj } from "../services/dataService";

function EmpList() {

    const [employeeArray, setEmployeesArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmpClick() {
        
    dataSericeObj.getAllEmployees().then(resData => 
        {
            setEmployeesArray(resData.data);
        });
    }

    function  clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function  deleteClick(eno)
    {
        dataSericeObj.deleteEmp(eno).then(resData => 
            {
                getEmpClick();            
            });
    }

    function  selectClick(eno)
    {
        dataSericeObj.getEmpById(eno).then(resData => 
            {
                let empObj =  resData.data;
                setEmpno(empObj.empno);
                setEname(empObj.ename);
                setJob(empObj.job);
                setSal(empObj.sal);
                setDeptno(empObj.deptno);
            }); 
    }

    function  addEmpClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal = sal;
        empObj.deptno =deptno;

        dataSericeObj.addEmp(empObj).then(resData =>
            {
                alert("New Emp Added to server");
                getEmpClick();
                clearFields();
            }); 

        clearFields();
    }

    
    function  updateEmpClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal = sal;
        empObj.deptno =deptno;
        
        dataSericeObj.updateEmp(empObj).then(resData => 
            {
                getEmpClick();
                clearFields();
            }); 
        clearFields();
    }

    let resultArray = employeeArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
          <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}><img width="30" src="./images/select.jpg" alt="" /></a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.empno)}}><img width="30" src="./images/delete.jpg" alt="" /></a>
            </td>
        </tr>;
    });
    return(
        <>
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Empno" type="text"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Ename" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="Sal" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />

            <input placeholder="Deptno" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />


            <hr />
            <input type="button" value="Get Employee" onClick={getEmpClick} />
            <input type="button" value="Add Employee" onClick={addEmpClick} />
            <input type="button" value="Update Employee" onClick={updateEmpClick} /> 

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Emp Number</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Sal</th>
                    <th>Emp Dept Number</th>
                    <th> Action </th>
                </tr>
                {resultArray}
            </table>
        </>
        </>
    );

}

export default EmpList