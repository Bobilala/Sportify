


var lastselected;


function selectspace(element) {
    if (element.className.indexOf("_available") > -1) {
        document.getElementById(lastselected).style.color = "black";
        document.getElementById(lastselected).style.border = "";
        document.getElementById(lastselected).style.fontWeight = 'normal';
        element.style.color = "#FFF";
        element.style.border = "3px solid #063";
        element.style.fontWeight = 'bold';
        element.name = "place";
        lastselected = element.id;
    }
}

function show() {
    alert("Successfully reserved: " + lastselected.toUpperCase());
}

function init() {
    //document.getElementById("currentusername").innerHTML = sessionStorage.getItem('username');
    lastselected = "basketball";
    document.getElementById(lastselected).style.color = "#FFF";
    document.getElementById(lastselected).style.border = "3px solid #063";
    document.getElementById(lastselected).style.fontWeight = 'bold';
    myActivities = localStorage.getItem('myActivities');
    myActivities = myActivities ? JSON.parse(myActivities) : [];
}



function addToMyActivities(item) {
    // Get the current list of activities from local storage
    let myActivities = localStorage.getItem('myActivities');
    myActivities = myActivities ? JSON.parse(myActivities) : [];

    // Add the new item to the list
    myActivities.push(item);

    // Save the updated list to local storage
    localStorage.setItem('myActivities', JSON.stringify(myActivities));
    // alert("Successfully reserved: " + localStorage.getItem('myActivities'));

    // Redirect to the My Activities page
    window.location.href = 'myactivities.html';

}

function reserve() {
    var selectedItem = lastselected;
    addToMyActivities(selectedItem);
    alert("Successfully reserved: " + selectedItem);
    sessionStorage.removeItem('estimatedduration');
    let now = new Date().getTime();
    sessionStorage.setItem('estimatedarrivetime', now + 600 * 1000);
    sessionStorage.setItem('reservedparkplace', selectedItem);
    //window.location.href = 'myactivities.html';
}



window.onload = function () {
    init();
    // localStorage.clear();

    // Get the container element to display the activities
    var myActivitiesList = document.getElementById('myActivitiesList');

    // Get the list of activities from localStorage
    var myActivities = localStorage.getItem('myActivities');
    myActivities = myActivities ? JSON.parse(myActivities) : [];


    // Loop through the activities and create checkboxes
    myActivities.forEach(function (activities) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = activity;
        myActivitiesList.appendChild(checkbox);

        var label = document.createElement('label');
        label.textContent = activity;
        myActivitiesList.appendChild(label);

        var lineBreak = document.createElement('br');
        myActivitiesList.appendChild(lineBreak);
    });
};





