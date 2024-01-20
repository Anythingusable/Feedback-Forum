    function sendEmail() {
      Email.send({
        SecureToken: "b947d794-509a-4875-9063-c348a0956914",
        To: 'adityarajsheikh12345@gmail.com',
        From: "adityarajsheikh12345@gmail.com",
        Subject: "For contact",
        Body: "Name : " + document.getElementById("name").value + "<br>Phone No. : " + document.getElementById("phone").value + "<br>Email Id : " +
          document.getElementById("email").value + "<br>Cause : " +
          document.getElementById("cause").value +
          "<br>Message : " + document.getElementById("message").value
      })
    }
let popup = document.getElementById("popup");
    function openPopup() {
      popup.classList.add("open-popup")
    }
    function closePopup() {
      popup.classList.remove("open-popup")
    }
    let form = document.getElementById("form");
    function hideForm() {
      form.classList.add("hidden-form")
    }
    function showForm() {
      form.classList.remove("hidden-form")
    }
  