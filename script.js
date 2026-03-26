// Worker Registration
function registerWorker() {
    alert("Worker Registered Successfully!");
}

// Manager Job Posting
function postJob() {
    alert("Job Posted Successfully!");
}
function saveWorker(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value;
    let availability = document.getElementById("availability").value;

    let worker = {
        name: name,
        skill: skill,
        availability: availability
    };

    let workers = JSON.parse(localStorage.getItem("workers")) || [];
    workers.push(worker);

    localStorage.setItem("workers", JSON.stringify(workers));

    displayWorkers();
}

function displayWorkers(filteredWorkers = null) {
    let workers = filteredWorkers || JSON.parse(localStorage.getItem("workers")) || [];
    let list = document.getElementById("workerList");

    list.innerHTML = "";

    workers.forEach((worker, index) => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${worker.name}</h3>
            <p><strong>Skill:</strong> ${worker.skill}</p>
            <p><strong>Available:</strong> ${worker.availability}</p>
            <button onclick="deleteWorker(${index})">Delete</button>
        `;

        list.appendChild(card);
    });
}

// Load workers when page opens
window.onload = displayWorkers;
function saveWorker(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value;
    let availability = document.getElementById("availability").value;

    let worker = { name, skill, availability };

    let workers = JSON.parse(localStorage.getItem("workers")) || [];
    workers.push(worker);

    localStorage.setItem("workers", JSON.stringify(workers));

    displayWorkers();
}

// Display Workers
function displayAvailableWorkers(workers) {
    let list = document.getElementById("availableWorkers");

    list.innerHTML = "";

    if (workers.length === 0) {
        list.innerHTML = "<p>No workers available</p>";
        return;
    }

    workers.forEach((worker) => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${worker.name}</h3>
            <p><strong>Skill:</strong> ${worker.skill}</p>
            <p><strong>Available:</strong> ${worker.availability}</p>
            <button onclick="hireWorker('${worker.name}')">Hire</button>
        `;

        list.appendChild(card);
    });
}

// Delete Worker
function deleteWorker(index) {
    let workers = JSON.parse(localStorage.getItem("workers")) || [];

    workers.splice(index, 1);

    localStorage.setItem("workers", JSON.stringify(workers));

    displayWorkers();
}

// Search Function
function searchWorkers() {
    let searchValue = document.getElementById("search").value.toLowerCase();

    let workers = JSON.parse(localStorage.getItem("workers")) || [];

    let filtered = workers.filter(worker =>
        worker.name.toLowerCase().includes(searchValue) ||
        worker.skill.toLowerCase().includes(searchValue)
    );

    displayWorkers(filtered);
}

// Load on start
window.onload = displayWorkers;
// Find Workers for Manager
function findWorkers(event) {
    event.preventDefault();

    let skill = document.getElementById("requiredSkill").value.toLowerCase();

    let workers = JSON.parse(localStorage.getItem("workers")) || [];

    let matched = workers.filter(worker =>
        worker.skill.toLowerCase().includes(skill)
    );

    displayAvailableWorkers(matched);
}

// Display Matched Workers
function displayAvailableWorkers(workers) {
    let list = document.getElementById("availableWorkers");

    list.innerHTML = "";

    workers.forEach((worker, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${worker.name} - ${worker.skill} - ${worker.availability}
            <button onclick="hireWorker('${worker.name}')">Hire</button>
        `;

        list.appendChild(li);
    });
}

// Hire Worker
function hireWorker(name) {
    alert(name + " has been hired!");
}
function findWorkers(event) {
    event.preventDefault();

    let skill = document.getElementById("requiredSkill").value.toLowerCase();
    let date = document.getElementById("requiredDate").value;

    let workers = JSON.parse(localStorage.getItem("workers")) || [];

    let matched = workers.filter(worker =>
        worker.skill.toLowerCase().includes(skill) &&
        worker.availability === date
    );

    displayAvailableWorkers(matched);
}