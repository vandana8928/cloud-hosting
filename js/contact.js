function send() 
{
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let msg = document.getElementById("message").value;
  let mob = document.getElementById("mob").value;

  let body =
    "Name:  " +
    name +
    "<br> Email:  " +
    email +
    "<br> mob: " +
    mob +
    "<br>message:" +
    msg;
   Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yvandana8928@gmail.com",
    Password: "0547B1D30CD5360F70D4C65581F1814CF422",
    To: "vandanayadav8286@gmail.com",
    From: "yvandana8928@gmail.com",
    Subject: "This is the subject",
    Body: body,
  }).then((message) => alert(message));
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click');
});