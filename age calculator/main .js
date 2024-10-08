let dob = document.getElementById("birthDate");
let cDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click", () => {
    if (dob.value === "" || cDate.value === "") {
        output.innerHTML = "Please select the Date";
    } else {
        calculateAgeDifference(dob.value, cDate.value);
    }
});

function calculateAgeDifference(start, end) {
    let dobYear = parseInt(start.substring(0, 4), 10);
    let dobMonth = parseInt(start.substring(5, 7), 10);
    let dobDate = parseInt(start.substring(8, 10), 10);
    let currYear = parseInt(end.substring(0, 4), 10);
    let currMonth = parseInt(end.substring(5, 7), 10);
    let currDate = parseInt(end.substring(8, 10), 10);

    let yearAgeDiff = currYear - dobYear;

    let monthAgeDiff;
    if (currMonth >= dobMonth) {
        monthAgeDiff = currMonth - dobMonth;
    } else {
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    let dayAgeDiff;
    if (currDate >= dobDate) {
        dayAgeDiff = currDate - dobDate;
    } else {
        monthAgeDiff--;
        let noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
        dayAgeDiff = noOfDaysInDOB + currDate - dobDate;

        if (monthAgeDiff < 0) {
            monthAgeDiff = 11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = `${yearAgeDiff} Years, ${monthAgeDiff} Months, ${dayAgeDiff} Days.`;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
