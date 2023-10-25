/*updateCounter function tracks the number of times the button element has been clicked.
Bind the debounce function in Lodash to the click event on the button:
    Each time updateCounter is called, update the count by 1 and set the content of 
    the paragraph element with id=‘count’ to "{count} clicks on the button"
*/


import $ from "jquery";
import _ from 'lodash';

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter(){
    count++;
    $('#count').html(`${count} clicks on the button`);
};


//Sets debounce delay in milliseconds.Prevents accidental clicks on button and delays trigger
const debounceDelay = 1000;

/* Binds the debounce function to the click event */
$('button').on('click', _.debounce(updateCounter, debounceDelay));
