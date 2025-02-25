const but = document.getElementById("hell");
const inputs = document.querySelectorAll("#otp-input-container input");

but.addEventListener("click", () => {
    let otp = "";
    inputs.forEach(input => otp += input.value);

    if (otp === "123411") {
        const par = document.createElement('p');
        par.textContent = "LOGIN SUCCESSFUL";
        document.getElementById("message").appendChild(par);
    } else {
        alert("Enter correct OTP");
    }
})
