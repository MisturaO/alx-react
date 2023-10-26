import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<img id="logo" />');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter(){
    count++;
    $('p #count').text(`${count} clicks on the button`);
};


//Sets debounce delay in milliseconds.Prevents accidental clicks on button and delays trigger
const debounceDelay = 1000;

/* Binds the debounce function to the click event */
$('button').on('click', _.debounce(updateCounter, debounceDelay));
