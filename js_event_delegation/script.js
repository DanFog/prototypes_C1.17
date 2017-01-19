// Answer the questions here:

// - What do you think is going to happen?
// Answer: It will console.log the statement "Delegated Button #5
// - What happened?
// Answer: Since we used .on earlier on #lists, the click handler is also on delegated button 5
// - Why?
// Answer: It happens because we have the .on method applied to #list which is a parent of the button we created
//========== Write your code below ===========//
$('document').ready(function() {
    $('#list').on('click', 'button', function () {
        console.log($(this).text());
    });
    $('#list').on('click', '.google', function () {
        window.open('https://www.google.com/');
    });
    var delegated_li = $('<li>');
    var delegated_button = $('<button>', {
        style: 'margin-top: 10px',
        text: 'Delegated Button #5'
    });
    var google_li = $('<li>');
    var google_button = $('<button>', {
        class: 'google',
        style: 'margin-top: 10px',
        text: 'google.com'
    });
    $(google_li).append(google_button);
    $(delegated_li).append(delegated_button);
    $('#list').append(delegated_li, google_li);
});