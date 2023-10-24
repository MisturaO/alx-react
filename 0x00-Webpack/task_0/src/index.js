import $ from "jquery";


/*imports jquery and add three different paragraphs to the page body when the DOM is ready*/
$( function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<p>Copyright - Holberton School</p>')
});