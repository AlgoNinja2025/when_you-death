function calculate() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value) - 1;
    const birthDay = parseInt(document.getElementById("birthDay").value);

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const today = new Date();

    if (isNaN(birthDate)) {
        alert("Invalid date. Please enter valid numbers.");
        return;
    }

    const ageInMilliseconds = today.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const averageLifespan = Math.floor(Math.random() * 20) + 70;
    const healthFactor = Math.random() * 1 + 0.5;
    const luckFactor = Math.random() * 0.4 + 0.8;
    let estimatedLifespan = averageLifespan * healthFactor * luckFactor;

    const smoking = parseInt(document.getElementById("smoking").value);
    const drinking = parseInt(document.getElementById("drinking").value);

    const smokingPenalty = smoking * 0.5;
    const drinkingPenalty = drinking * 0.2;

    estimatedLifespan -= (smokingPenalty + drinkingPenalty);

    if (estimatedLifespan < ageInYears) {
        estimatedLifespan = ageInYears + Math.floor(Math.random() * 5) + 1;
    }

    const yearsLeft = estimatedLifespan - ageInYears;
    let secondsLeft = Math.floor(yearsLeft * 365.25 * 24 * 60 * 60);

    document.getElementById("input-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";

    updateClock(secondsLeft);

    let timerInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "Time's up!";
            return;
        }
        updateClock(secondsLeft);
    }, 1000);
}


function updateClock(secondsLeft) {
    const days = Math.floor(secondsLeft / (24 * 60 * 60));
    const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
    const seconds = Math.floor(secondsLeft % 60);

    document.getElementById("timer").textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}