console.log("Hello World");


function openPrompt() {
    alert("Button has been successfully pressed!");
    document.body.style.backgroundColor = "lightblue";
}


// Button - increase size
function increaseFontSize() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body).fontSize;
    body.style.fontSize = (parseFloat(currentSize) + 2) + "px";
}

// Button - decrease size
function decreaseFontSize() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body).fontSize;
    body.style.fontSize = (parseFloat(currentSize) - 2) + "px";
}

// Button - change font colour
function changeFontColor() {
    document.body.style.color = "blue";
}


function submitForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    if (firstName && lastName && email) {
        alert(`Hello, '${firstName}' '${lastName}'.\nYour email '${email}' has been added to the mailing list.`);
    }
}


//function increaseFontSize() {
//    let body = document.body;
//    let currentSize = window.getComputedStyle(body).fontSize;
//    let newSize = parseFloat(currentSize) + 2;
//    body.style.fontSize = newSize + "px";
//}
//
//
//function decreaseFontSize() {
//    let body = document.body;
//    let currentSize = window.getComputedStyle(body).fontSize;
//    let newSize = Math.max(parseFloat(currentSize) - 2, 10); // Decrease by 2px, but minimum size is 10px
//    body.style.fontSize = newSize + "px";
//}
//
//
//function changeFontColor() {
//    let colors = ["red", "blue", "green", "purple", "orange", "black"];
//    let randomColor = colors[Math.floor(Math.random() * colors.length)];
//    document.body.style.color = randomColor;
//}

function checkWage() {
    let selectedAge = document.querySelector('input[name="ageGroup"]:checked');

    if (!selectedAge) {
        alert("Please select an age range.");
        return;
    }

    let wages = {
        "16-17": "£4.81",
        "18-20": "£6.83",
        "21-22": "£9.18",
        "23+": "£9.50"
    };

    let wage = wages[selectedAge.value];

    alert(`The minimum wage for age group ${selectedAge.value} is ${wage}`);
    document.getElementById("wageResult").innerText = `The minimum wage for age group ${selectedAge.value} is ${wage}`;
}





// Function to hide/unhide
function toggleContent() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    if (title.style.display === "none") {
        title.style.display = "block";
        description.style.display = "block";
    } else {
        title.style.display = "none";
        description.style.display = "none";
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    let body = document.body;
    let darkModeCheckbox = document.getElementById("darkModeToggle");

    if (darkModeCheckbox.checked) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}







let name = "Hibbah";
let age = 24;
let employed = null;

let data = [name, age, employed]

for(let data_point of data){
console.log(data_point)};

console.log(name);
console.log(age);
console.log(employed);


let name2 = "    Hib    ";
console.log(name2.length);
console.log(name2);
console.log(name2.trim());
console.log(name2);
console.log(name2.toLowerCase());
console.log(name2);
console.log(name2.toUpperCase());
console.log(name2);


let speed = 50;
console.log(speed * 2);
console.log(speed + 2);
console.log(speed - 2);
console.log(speed / 2);
console.log(speed % 2);


console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log(Math.ceil(Math.random()));
console.log(Math.floor(Math.random()* speed));

let speed2 = 50;
let collection = [10,20,30,22,22,9];

console.log(Math.min(...collection));
console.log(Math.max(...collection));
console.dir(collection);
console.log(Math.PI);


//console.log(value_b);
//console.log(value_a);
//let value_a = "a";
//var value_b = "b";


let daysInYear = 365;
let weeksInYear = 52;
let daysInWeek = 7;

console.log(daysInYear + 1);
console.log(daysInWeek - 2);
console.log((daysInWeek-2) * 52);
console.log(weeksInYear / 12);


let a = 1;
a++;
console.log(a);

a--;
console.log(a);

let first_name = "Hibbah"
let age2 = 24;
let role = "consultant";
let parking_space = true;
console.log(first_name + " is a " + age2 + " year old " + role);

console.log(`${first_name} is a ${age2} year old ${role}`);
console.log(typeof parking_space);
console.log(typeof role);
console.log(typeof age2);

if (typeof first_name == 'string') {
    console.log(`${first_name} is a string`)
} else {
    console.log(`${first_name} is not a string`)
    }

if (age2 >= 17){
    console.log("Able to drive");
} else {
    console.log("Not allowed to drive");
}

let age3 = 15;
if (age3 >= 17){
    console.log("You are allowed to drive");
} else if (age3 >12) {
    console.log("teen");
} else {
    console.log("child")
}

let job_role = 'developer';
switch (job_role) {
    case 'developer':
        console.log('developer salary 50p');
        break;
    case 'devops':
        console.log('devops salary 65p');
        break;
    case 'tester':
        console.log('tester salary 99p');
        break;
    default:
        console.log('role not recognised');
        break;
}

let job_role2 = 'devops';
let current_age = 24

function test(num){
    if (num>10){
    age++;
    return current_age;
    } else {
    age--;
    return current_age;
    }
}

if (job_role2 === 'devops' & test(current_age) >18){
    console.log('Person is eligible for hiring');
}

job_role2 == 'test' ? console.log('developer character selected') : console.log ('character not recognised');
job_role2 == 'test'
    ? console.log('developer character selected') :
    console.log ('character not recognised');
