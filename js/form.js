// If user is already logged in, then redirect to landing page
if (sessionStorage.getItem("USER")) location.replace("./pages/welcome.html");

const firstNameTextbox = document.getElementById("firstName");

const yearOrLevelDropdown = document.getElementById("yrOrLevel");
const yearOrLevelPlaceholder = yearOrLevelDropdown.firstElementChild;

const programDropdown = document.getElementById("program");
const programPlaceholder = programDropdown.firstElementChild;


function setActiveLogin() {
    login.classList.toggle("active");
}

function submitToSession(event) {
    event.preventDefault();

    const user = {
        firstName: firstNameTextbox.value,
        yearOrLevel: yearOrLevelDropdown.value,
        program: programDropdown.value
    }


    // ERROR HANDLING
    // Validate if the selected yearOrLevel and program is not Sthe placeholder option
    if (user.yearOrLevel === yearOrLevelPlaceholder.value
        && user.program === programPlaceholder.value
    ) {
        // invalid
    } else {
        // valid
        sessionStorage.setItem("USER", JSON.stringify(user));
        location.replace("./pages/welcome.html");
    }
}

function updateProgramDropdown() {

    if (yearOrLevelDropdown.value === "Senior Highschool") {
        programDropdown.innerHTML = `
            <option value="" disabled selected>Select Program</option>

            <option value="ABM">ABM</option>
            <option value="Animation">Animation</option>
            <option value="Arts & Design">Arts & Design</option>
            <option value="Audio Production">Audio Production</option>
            <option value="Software Development">Software Development</option>
            <option value="Fashion Design">Fashion Design</option>
            <option value="Graphic  Illustration">Graphic Illustration</option>
            <option value="HUMSS">HUMSS</option>
            <option value="Robotics">Robotics</option>
        `;
    } else if (yearOrLevelDropdown.value === "College") {
        programDropdown.innerHTML = `
        <option value="" disabled selected>Select Program</option>

        <option value="Game Development">Game Development</option>
        <option value="Software Engineering">Software Engineering</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="Data Science">Data Science</option>
        <option value="Web Development">Web Development</option>
        <option value="Marketing Development">Marketing Development</option>
        <option value="E-Management">E-Management</option>
        <option value="Real Estate Management">Real Estate Management</option>
        <option value="Psychology">Psychology</option>
        <option value="Accountancy">Accountancy</option>
        <option value="Fashion Design and Technology">Fashion Design and Technology</option>
        <option value="Multimedia Arts and Design">Multimedia Arts and Design</option>
        <option value="Animation">Animation</option>
        <option value="Music Production and Sound Design">Music Production and Sound Design</option>
    `;
    } else {

    }


    // <option value="Game Development">Game Development</option>
    // <option value="Software Engineering">Software Engineering</option>
    // <option value="Cloud Computing">Cloud Computing</option>
    // <option value="Data Science">Data Science</option>
    // <option value="Web Development">Web Development</option>
    // <option value="Marketing Development">Marketing Development</option>
    // <option value="E-Management">E-Management</option>
    // <option value="Real Estate Management">Real Estate Management</option>
    // <option value="Psychology">Psychology</option>
    // <option value="Accountancy">Accountancy</option>
    // <option value="Fashion Design and Technology">Fashion Design and Technology</option>
    // <option value="Multimedia Arts and Design">Multimedia Arts and Design</option>
    // <option value="Animation">Animation</option>
    // <option value="Music Production and Sound Design">Music Production and Sound Design</option>

}