var ageCalculator = () => {
    var inputDay = document.getElementById("day").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    var dateObj = new Date();
    var currentDay = dateObj.getDate();
    var currentMonth = dateObj.getMonth() + 1;
    var currentYear = dateObj.getFullYear();
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var date = {
        day: 0,
        month: 0,
        year: 0
    }
    if (inputDay == "" || inputDay > 31) {
        alert("Enter the day");
        return false;
    } else if(inputMonth == "" || inputMonth > 12) {
        alert("Enter the month");
        return false;
    } else if (inputYear == "" || inputYear > currentYear) {
        alert("Enter the year");
        return false;
    }
    // YEAR LOGIC - STARTS 
    if (currentMonth > inputMonth) {
        date.year = currentYear - inputYear;
    } else if (currentMonth == inputMonth) {
        if(currentDay >= inputDay) {
            date.year = currentYear - inputYear;
        } else {
            date.year = currentYear - inputYear - 1; 
        }
    } else {
        date.year = currentYear - inputYear -1;
    }
   // YEAR LOGIC - ENDS
    // MONTHS LOGIC STARTS
    if (currentMonth > inputMonth) {
        date.month = (currentMonth - inputMonth);
    } else if (currentMonth == inputMonth) {
        date.month = 11;
        if (inputDay <= currentDay) {
            date.month = 0;
        } 
    } else {
        date.month = 12- (inputMonth - currentMonth);
        
    }
    // MONTHS LOGIC ENDS
    // DAYS LOGIC STARTS
    date.day = monthDays[dateObj.getMonth()] - Math.abs(inputDay - currentDay);
    // DAYS LOGIC ENDS
    document.getElementById("days-result").innerHTML = date.day;
    document.getElementById("months-result").innerHTML = date.month;
    document.getElementById("years-result").innerHTML = date.year;
}


