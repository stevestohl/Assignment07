// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = document.getElementById('id').value
    let fullName = document.getElementById('name').value
    let ext = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    row.insertCell().appendChild(document.createTextNode(employeeId))
    row.insertCell().appendChild(document.createTextNode(fullName))
    row.insertCell().appendChild(document.createTextNode(ext))
    row.insertCell().appendChild(document.createTextNode(email))
    row.insertCell().appendChild(document.createTextNode(department))
    // CREATE THE DELETE BUTTON
    let deleteCell = row.insertCell()
    let deleteBtn = document.createElement('button')
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // DELETE EMPLOYEE
    deleteBtn.className = 'btn btn-danger btn-sm'
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.addEventListener('click', () => table.deleteRow(row.rowIndex - 1))
    deleteCell.appendChild(deleteBtn)    
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    document.getElementById('empCount').innerText = table.rows.length
})