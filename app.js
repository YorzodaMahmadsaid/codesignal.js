Write a function that returns the sum of two numbers.

Example

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

function add(param1, param2) {
   return param1 + param2;
}

add(1, 2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.

function centuryFromYear(year) {
    let inputYear = Math.floor(year/100);
    if(year % 100 === 0) {
        return inputYear;
    } else {
        return inputYear + 1;
    }
}

centuryFromYear(1905);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////