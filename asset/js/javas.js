/* An hien pass */
var passField= document.querySelector("#pass");
var showBtn = document.querySelector(".show-btn i");
showBtn.onclick = ( () =>{
    if(passField.type === "password"){
        passField.type = "text";
        showBtn.classList.remove('fa-light');
        showBtn.classList.remove('fa-eye-slash');
    }
    else{
        passField.type = 'password';
        showBtn.classList.add('fa-light');
        showBtn.classList.add('fa-eye-slash');
    }
});