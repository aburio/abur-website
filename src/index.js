import '../src/css/style.css';
import '../src/css/bootstrap-rfs.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import lozad from 'lozad'

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

function sendForm() {
    var form = document.getElementById("form").elements;
    var name = /[A-Za-z]{1}[A-Za-z]/;
    var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    var message = form.item(2).value;
    var data;
    var XHR = new XMLHttpRequest();

    if (!name.test(form.item(0).value)) {
        alert("Name field is too short !");
        return;
    }
    else {
        name = form.item(0).value;
    }

    if (form.item(1).value === "") {
        alert("Please enter an e-mail address");
        return;
    }
    else if (!email.test(form.item(1).value)) {
        alert("Please enter a valid email address");
        return;
    }
    else {
        email = form.item(1).value;
    }

    if (message.length < 10) {
        alert("Message is too short, please be more precise !");
        return;
    }

    data = JSON.stringify({"name": name, "email": email, "message": message});
    
    XHR.addEventListener('load', function(event) {
        alert('Your message as been successfuly send !');
        form.reset();
    });

    XHR.addEventListener('error', function(event) {
        alert('Oups! Something wrong append.');
    });

    XHR.open('POST', 'https://ennsa7847f.execute-api.eu-west-1.amazonaws.com/production/contact');
    XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    XHR.send(data);
}

window.addEventListener("DOMContentLoaded", (event) => {
    var d = new Date();
    var formButton = document.getElementById("formButton");

    document.getElementById('copyright-year').innerHTML = d.getFullYear();
    
    formButton.addEventListener("click", function (event) {
        event.preventDefault();
        sendForm();
    });
});