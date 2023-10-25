/*updateCounter function tracks the number of times the button element has been clicked.
Bind the debounce function in Lodash to the click event on the button:
    Each time updateCounter is called, update the count by 1 and set the content of 
    the paragraph element with id=‘count’ to "{count} clicks on the button"
*/

import jQuery from "jquery";
import _ from 'lodash';

jQuery('body').append("<p>Holberton Dashboard</p>");
jQuery('body').append("<p>Dashboard data for the students</p>");
jQuery('body').append("<button>Click here to get started</button>");
jQuery('body').append("<p id='count'></p>");
jQuery('body').append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter(){
    count++;
    jQuery('#count').html(`${count} clicks on the button`);
};


//Sets debounce delay in milliseconds.Prevents accidental clicks on button and delays trigger
const debounceDelay = 1000;

/* Binds the debounce function to the click event */
jQuery('button').on('click', _.debounce(updateCounter, debounceDelay));
