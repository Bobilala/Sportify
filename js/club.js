var lastselected;
function selectspace(element) {
    if (element.className.indexOf("club") > -1) {
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
    lastselected = "羽你同行";
    document.getElementById(lastselected).style.color = "#FFF";
    document.getElementById(lastselected).style.border = "3px solid #063";
    document.getElementById(lastselected).style.fontWeight = 'bold';
    myClubs = localStorage.getItem('myClubs');
    myClubs = myClubs ? JSON.parse(myClubs) : [];
}



function addTomyClubs(item) {
    // Get the current list of activities from local storage
    let myClubs = localStorage.getItem('myClubs');
    myClubs = myClubs ? JSON.parse(myClubs) : [];

    // Add the new item to the list
    myClubs.push(item);

    // Save the updated list to local storage
    localStorage.setItem('myClubs', JSON.stringify(myClubs));
    // alert("Successfully reserved: " + localStorage.getItem('myClubs'));

    // Redirect to the My Activities page
    window.location.href = 'myClubs.html';

}

function reserve() {
    var selectedItem = lastselected;
    addTomyClubs(selectedItem);
    alert("Successfully reserved: " + selectedItem);
    alert(localStorage.getItem('myClubs'))
    sessionStorage.removeItem('estimatedduration');
    let now = new Date().getTime();
    sessionStorage.setItem('estimatedarrivetime', now + 600 * 1000);
    sessionStorage.setItem('reservedparkplace', selectedItem);
    //window.location.href = 'myClubs.html';
}



window.onload = function () {
    init();
    // localStorage.clear();

    // Get the container element to display the activities
    var myClubList = document.getElementById('myClubList');

    // Get the list of activities from localStorage
    var myClubs = localStorage.getItem('myClubs');
    myClubs = myClubs ? JSON.parse(myClubs) : [];


    // Loop through the activities and create checkboxes
    myClubs.forEach(function (activities) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = activity;
        myClubList.appendChild(checkbox);

        var label = document.createElement('label');
        label.textContent = activity;
        myClubList.appendChild(label);

        var lineBreak = document.createElement('br');
        myClubList.appendChild(lineBreak);
    });
};





