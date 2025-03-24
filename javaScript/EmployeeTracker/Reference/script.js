document.addEventListener("DOMContentLoaded", function () {
    // Grabs info from HTML file
    const punchInButton = document.getElementById("punchInButton");
    const punchOutButton = document.getElementById("punchOutButton");
    const missedPunchButton = document.getElementById("missedPunchButton");
    const missedPunchTime = document.getElementById("missedPunchTime");
    const missedPunchType = document.getElementById("missedPunchType");
    const punchHistory = document.getElementById("punchHistory");
    const clockElement = document.getElementById("clock");

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();

    function addPunch(type, time = null) {
        const timeStamp = time || new Date().toLocaleString();
        const entry = document.createElement("li");
        entry.textContent = `${type}: ${timeStamp}`;
        punchHistory.appendChild(entry);
    }

    punchInButton.addEventListener("click", function () {
        addPunch("Punch In");
    });

    punchOutButton.addEventListener("click", function () {
        addPunch("Punch Out");
    });

    missedPunchButton.addEventListener("click", function () {
        if (!missedPunchTime.value) {
            alert("Please select a date and time for the missed punch.");
            return;
        }
        addPunch(missedPunchType.value, new Date(missedPunchTime.value).toLocaleString());
    });
});
