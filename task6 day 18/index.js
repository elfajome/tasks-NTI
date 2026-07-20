
let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let ageInput = document.getElementById('age');
let emailInput = document.getElementById('email');
let action = document.getElementById('action');
let submitBtn = document.getElementById('submit');
let dataTable = document.getElementById('data-table');

let userData = JSON.parse(localStorage.getItem('userData')) || [];

userData.forEach(function (user) {
    createRow(user.id, user.firstName, user.lastName, user.age, user.email);
});

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;

    let user = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email
    };

    userData.push(user);
    localStorage.setItem('userData', JSON.stringify(userData));

    createRow(user.id, firstName, lastName, age, email);

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';

    submitBtn.textContent = 'Submit';
});

function createRow(id, firstName, lastName, age, email) {
    let createRow = document.createElement('tr');
    let createFirstName = document.createElement('td');
    let createLastName = document.createElement('td');
    let createAge = document.createElement('td');
    let createEmail = document.createElement('td');
    let createAction = document.createElement('td');

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');

    createFirstName.textContent = firstName;
    createLastName.textContent = lastName;
    createAge.textContent = age;
    createEmail.textContent = email;tqt

    createRow.appendChild(createFirstName);
    createRow.appendChild(createLastName);
    createRow.appendChild(createAge);
    createRow.appendChild(createEmail);
    createAction.appendChild(deleteBtn);
    createAction.appendChild(editBtn);
    createRow.appendChild(createAction);
    dataTable.appendChild(createRow);

    deleteBtn.addEventListener('click', function () {
        createRow.remove();

        userData = userData.filter(user => user.id !== id);
        localStorage.setItem('userData', JSON.stringify(userData));
    });

    editBtn.addEventListener('click', function () {
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        ageInput.value = age;
        emailInput.value = email;
        createRow.remove();

        userData = userData.filter(user => user.id !== id);
        localStorage.setItem('userData', JSON.stringify(userData));

        submitBtn.textContent = 'Update';
    });

    submitBtn.textContent = 'Submit';

}