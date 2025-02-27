import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employees"

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    // axios will send employee data to restAPI
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId)
    }

}

export default new EmployeeService()