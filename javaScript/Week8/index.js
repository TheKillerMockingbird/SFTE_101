console.log('Hello');
console.log('I like Tlincalli');

// window.alert('This is an alert');
// window.alert('Moths are cool');

document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'Tlincalli are cool';

//this is a comment

// let username = window.prompt("What's your username?");

// console.log(username);

let username;

document.getElementById("passwordSubmit").onclick = function(){
    username = document.getElementById("usernameText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}