import axios from 'axios';

export let dataSericeObj = 
{
    getAllDepartments,
    addDept,
    deleteDept,
    getDeptById,
    updateDept,
    getAllEmployees,
    addEmp,
    deleteEmp,
    getEmpById,
    updateEmp
};

let url = "http://localhost:3500/depts/";
let urlEmp = "http://localhost:3500/emps/";

function getAllDepartments()
{
    return axios.get(url);
}

function addDept(deptObj)
{
    return axios.post(url, deptObj);
}

function deleteDept(dno)
{
    return axios.delete(url + dno);
}

function getDeptById(dno)
{
    return axios.get(url + dno);
}

function updateDept(deptObj)
{
    return axios.put(url + deptObj.deptno, deptObj);
}


//Employee Services

function getAllEmployees()
{
    return axios.get(urlEmp);
}

function addEmp(empObj)
{
    return axios.post(urlEmp, empObj);
}

function deleteEmp(empno)
{
    return axios.delete(urlEmp + empno);
}

function getEmpById(empno)
{
    return axios.get(urlEmp + empno);
}

function updateEmp(empObj)
{
    return axios.put(urlEmp + empObj.empno, empObj);
}