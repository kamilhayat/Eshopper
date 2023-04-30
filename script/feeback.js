
function sendEmail() {
   
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hayatkamil27@gmail.com",
        Password: "BD6D94EED682DB6C0A7EA8CF50EF78007241",
        To: 'kamilhayat27@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Feedback regarding e-website",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email" + document.getElementById("email").value
            + "<br> subject." + document.getElementById("subject").value
            + "<br> Message" + document.getElementById("message").value
    }).then(
        message => alert("Feedback sent successfully")
    );
}

