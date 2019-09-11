fetch('http://dummy.restapiexample.com/api/v1/employees')
.then((response) =>{return response.json()})
.then((data)=>{
    return data;
}).then((data)=>{
    let table = document.getElementById('container_body');
    data.forEach( employeeInfo => {
        const employee = {
            id:employeeInfo.id,
            name:employeeInfo.employee_name,
            age:employeeInfo.employee_age,
            salary:employeeInfo.employee_salary,
        };
        table.innerHTML += 
        `<tr>
        <td class="id_list">
        <a href="http://dummy.restapiexample.com/api/v1/employee/${employeeInfo.id}" target="_blank">${employee.id}</a >
        </td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>$ ${employee.salary}</td>
        </tr>`
    });
    });