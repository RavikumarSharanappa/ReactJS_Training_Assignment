import { useState } from "react";

function Employee() {

    const [employeeArray, setEmployeesArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmpClick() {
        let data = [
            { empno: 1,  ename: "Ravi", job: "IT", sal:10000, deptno: 10,},
            { empno: 2, ename: "Avinash", job: "Non IT", sal:20000,  deptno: 20,},
            { empno: 3, ename: "Nishanth", job: "IT", sal:30000,  deptno: 30,},
            { empno: 4, ename: "Vijaya", job: "Govt Employee", sal:20000, deptno: 40,},
        ];

        setEmployeesArray(data);
    }

    function addEmpClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal = sal;
        empObj.deptno =deptno;
        

        let tempArray = [...employeeArray];
        tempArray.push(empObj);       
        setEmployeesArray( tempArray );

       clearFields();

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
        let tempArray = [...employeeArray];
        
        let  index = tempArray.findIndex( item => item.empno == eno );
        tempArray.splice(index, 1); 

        setEmployeesArray( tempArray );
    }

    function  selectClick(eno)
    {
      let empObj =   employeeArray.find(item =>  item.empno ==  eno);

      setEmpno(empObj.empno);
      setEname(empObj.ename);
      setJob(empObj.job);
      setSal(empObj.sal);
      setDeptno(empObj.deptno);
    }

    function  updateEmpClick()
    {
        let tempArray = [...employeeArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;

        setEmployeesArray( tempArray );

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

    return (
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
    );
}

export default Employee