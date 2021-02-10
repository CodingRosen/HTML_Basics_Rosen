window.onload = function () {
    // showing example of innerHtml property
    // console.log(document.getElementById('bodyStuff').innerHTML)
    // document.getElementById('bodyStuff').innerHTML = "bob";
    console.log('page loaded...initializing js');
    registerEventListeners();
}


function registerEventListeners() {
    // All listeners should be listed here only!

    // Add Student Listener
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", addStudentToTable);

    //Clear Table Listener

    // Add multiple users etc
}


function addStudentToTable() {
    console.log('adding student...')

    let newStudent = getStudentInput();

    console.log(newStudent);
    //create the cell 
    let tdName = document.createElement("td");
    let tdMajor = document.createElement("td");
    let tdAge = document.createElement("td");

    //Add data the new cells
    tdName.innerHTML = newStudent.name;
    tdMajor.innerHTML = newStudent.major;
    tdAge.innerHTML = newStudent.age;

    //Add the cells to the new row
    let tr = document.createElement("tr");
    tr.appendChild(tdName);
    tr.appendChild(tdMajor);
    tr.appendChild(tdAge);

    //Add the row to the table
    let studentTable = document.getElementById('studentTable');
    studentTable.appendChild(tr);
}

function getStudentInput() {
    //grab the data from input fields
    let nameValue = document.getElementById('name').value; // NOTE THE VALUE property!
    let majorValue = document.getElementById('major').value;
    let ageValue = document.getElementById('age').value;

    return {
        name: nameValue,
        major: majorValue,
        age: ageValue
    }
}