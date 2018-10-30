//for current job status section
function studentFunc() {
    document.getElementById("jobStatus-btn").innerHTML = "Student";
}

function jobFunc() {
    document.getElementById("jobStatus-btn").innerHTML = "Full Time Job";
}

function learnerFunc() {
    document.getElementById("jobStatus-btn").innerHTML = "Full Time Learner";
}

function notSayFunc() {
    document.getElementById("jobStatus-btn").innerHTML = "Prefer Not To Say";
}

function othersFunc() {
    document.getElementById("jobStatus-btn").innerHTML = "Others";
}

//for best choice(s) on fcc section
function challengesFunc() {
    document.getElementById("cat-btn").innerText = "Challenges";
}

function projectsFunc() {
    document.getElementById("cat-btn").innerText = "Projects";
}

function communityFunc() {
    document.getElementById("cat-btn").innerText = "Community";
}

function openFunc() {
    document.getElementById("cat-btn").innerText = "Open Source";
}